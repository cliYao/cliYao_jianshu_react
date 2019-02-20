import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommendList:[],
	writerList:[],
	articlePage:1,
	showScroll:true
})

export default (state = defaultState, action) => {
	if(action.type===actionTypes.CHANGE_HOME_DATA){
		return state.merge({
			topicList:fromJS(action.topicList),
			articleList:fromJS(action.articleList),
			recommendList:fromJS(action.recommendList),
			writerList:fromJS(action.writerList)
		})
	}
	if(action.type===actionTypes.ADD_LIST){
		return state.merge({
			'articleList':state.get('articleList').concat(action.list),
			'articlePage':action.nextPage
		})
	}
	if(action.type===actionTypes.TOGGLE_SCROLL_TOP){
		return state.set('showScroll',action.show)
	}
	return state;
}

