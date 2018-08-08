import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';//将js对象转换成immutable对象

const defaultState = fromJS({
    topicList: [
        {
            id: 2,
            img: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
            text: '@IT-互联网'
        }
    ],
    articleList: [
        {
            id: 1,
            img: 'https://upload-images.jianshu.io/upload_images/8085542-a3843b2a31b462aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
            title: '【区块链】区块链和比特币的关系？',
            desc: '【本文由赞我（eds.com）独家冠名】 最近掀起了一股区块链热潮，与此相关的比特币被广大人们关注，在大多数人眼里这是一个暴利行业，人们纷纷抢占..'
        }
    ]
});

export default (state = defaultState, action) => {
  return state;
}