import { combineReducers } from 'redux-immutable';//此时生成的数据都是immutable格式
import { reducer as headerReducer } from '../components/header/store';
import { reducer as HomeReducer } from '../views/home/store';

const reducer = combineReducers({
    header: headerReducer,
    home: HomeReducer
});

export default reducer;