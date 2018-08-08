import React, { Component } from 'react';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'


import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="bannerImg" src="https://upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default (Home);