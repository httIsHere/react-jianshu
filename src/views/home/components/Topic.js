import React, { Component } from 'react';

import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
            return <TopicItem key={item.get('id')}><img className="topicPic" src={item.get('img')}  />{item.get('text')}</TopicItem>
          })
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic);