import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';

import { connect } from 'react-redux'
import { actionCreators } from './store'

import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch,
  Addition, Button, SearchWrapper, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from './style'


class Header extends Component {
  render() {
    const { inputFocus, handleInputFocus, handleInputBlur, searchList } = this.props;
    return (
      <HeaderWrapper>
        <Logo>汪卷</Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition in={inputFocus} timeout={200} classNames="slide">
              <NavSearch className={inputFocus ? 'focused' : ''} onFocus={() => handleInputFocus(searchList)} onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={inputFocus ? 'iconfont find focused' : 'iconfont find'}>&#xe614;</i>
            {this.searchInfo()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writeBtn"><i className="iconfont">&#xe678;</i> 写文章</Button>
          <Button className="regBtn">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  searchInfo = () => {
    const { inputFocus, searchList, page, handleMouseIn, handleMouseLeave, mouseStatus, handleChangePage } = this.props;
    const jsList = searchList.toJS();
    const pageList = [];
    if(jsList.length){
      for (let i = ((page - 1) * 10); i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
      }
    }
    if (inputFocus || mouseStatus) {
      return (
        <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一换
              </SearchInfoSwitch>
            </SearchInfoTitle>
          <div>{pageList}</div>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}


const mapStateToProps = (state) => {
  return {
    //将store的数据映射到组件props
    // inputFocus: state.get('header').get('inputFocus')
    //优化格式
    inputFocus: state.getIn(['header', 'inputFocus']),
    searchList: state.getIn(['header', 'searchList']),
    page: state.getIn(['header', 'page']),
    mouseStatus: state.getIn(['header', 'mouseStatus'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      //此时list为immutable类型所以采用size属性
      (list.size === 0) && dispatch(actionCreators.getSearchList());
      dispatch(actionCreators.inputToggle(true));
    },
    handleInputBlur() {
      dispatch(actionCreators.inputToggle(false));
    },
    handleMouseIn() {
      dispatch(actionCreators.infoMouseIn(true));
    },
    handleMouseLeave() {
      dispatch(actionCreators.infoMouseIn(false));
    },
    handleChangePage(spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) originAngle = parseInt(originAngle, 10);
      else originAngle = 0
      spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
      dispatch(actionCreators.changeCurrentPage());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)