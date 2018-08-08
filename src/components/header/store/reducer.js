import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';//将js对象转换成immutable对象

const defaultState = fromJS({
  inputFocus: false,
  searchList: [],
  page: 1,
  totalPage: 1,
  mouseStatus: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_FOCUS:
      if (action.inputFocus && !state.get('searchList').length && action.searchList) {
        //第一次获得焦点获取数据
        return state.merge({
          searchList: action.searchList,
          totalPage: action.totalPage,
          inputFocus: action.inputFocus
        });
      }
      else return state.set('inputFocus', action.inputFocus);
    case actionTypes.MOUSE_TOGGLE:
      return state.set('mouseStatus', action.mouseStatus);
    case actionTypes.CHANGE_PAGE:
      let _page = state.get('page'), _total = state.get('totalPage');
      if(_page < _total) _page++;
      else _page = 1;
      return state.set('page', _page);
  }
  return state;
}