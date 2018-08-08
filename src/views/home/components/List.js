import React, { Component } from 'react';

import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.articleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="itemPic" src={item.get('img')} />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="content">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']) || []
})
export default connect(mapStateToProps, null)(List);