import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  font-size: 25px;
  display: inline-block;
  line-height: 56px;
  position: absolute;
  left: 50px;
  text-decoration: none;
  color: #ec6149;
`

export const Nav = styled.div`
  width:960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 100px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.left{float: left;}
  &.right{float: right;color: #969696;}
  &.active{color: #ec6149;}
`
export const SearchWrapper = styled.div`
  float: left;
  /* overflow: hidden; */
  position: relative;
  .find{
    position:absolute;right:5px;bottom: 4px;width: 30px;height:30px;border-radius: 15px;line-height:30px;text-align:center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size:14px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-left: 20px;
  color: #777;
  &::placeholder{color: #999;}
  &.focused{width: 240px;}
  &.slide-enter{transition: all .3s ease-out;}
  &.slide-enter-active{width: 240px;}
  &.slide-exit{transition: all .3s ease-out;}
  &.slide-exit-active{width: 160px;}
`
export const SearchInfo = styled.div`
  position:absolute;
  left:20px;
  top: 56px;
  width:240px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
  box-sizing: border-box;
`
export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height:20px;
  color: #969696;
  font-size: 13px;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size:12px;
  cursor:pointer;
  .spin{
    display: inline-block;
    font-size: 12px;
    margin-right: 3px;
    transition: all .3s ease-in;
  }
`
export const SearchInfoItem = styled.a`
  line-height: 18px;
  padding: 0 3px;
  font-size:12px;
  border: 1px solid #ddd;
  color:#969696;
  border-radius:3px;
  display: inline-block;
  margin:0 10px 10px 0;
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;  
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  float: right;
  text-align: center;
  &.regBtn{color: #ec6149;}
  &.writeBtn{color: #fff; background: #ec6149;}
`