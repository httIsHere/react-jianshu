import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  /* margin-left: 15px; */
  padding-top: 30px;
  float: left;
  .bannerImg{width: 625px; height: 270px;}
`
export const HomeRight = styled.div`
  width: 280px;
  margin-left: 15px;
  padding-top: 30px;
  float: right;
`

// topic
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  background: #f7f7f7;
  float: left;
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  color: #333;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  overflow: hidden;
  .topicPic{width: 32px;height: 32px;display: block;float: left;margin-right:10px;}
`
// List
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .itemPic{
    width:125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 5px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height:27px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
  .content{
    color: #999;
    line-height:24px;
    font-size: 14px;
  }
`
// Recommend
export const RecommendItem = styled.div`
  width: 280px;
  margin-bottom: 6px;
  border-radius: 4px;
  img{width: 280px;min-height: 50px;}
`