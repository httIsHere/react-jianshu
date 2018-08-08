import * as actionTypes from './actionTypes';
import axios from 'axios'
import { fromJS } from 'immutable';//将js对象转换成immutable对象

export const inputToggle = (inputFocus, list = []) => ({
  type: actionTypes.INPUT_FOCUS,
  inputFocus,
  searchList: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/headList.json').then(res => {
      dispatch(inputToggle(true, res.data.data))
    }).catch(e => {
      console.log('api error')
    });
  }
}

export const infoMouseIn = (mouseStatus) => ({
  type: actionTypes.MOUSE_TOGGLE,
  mouseStatus
})

export const changeCurrentPage = () => ({
  type: actionTypes.CHANGE_PAGE
})