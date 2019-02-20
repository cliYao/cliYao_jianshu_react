import React,{ PureComponent } from 'react';
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { BackTop } from './style'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style'

class Home extends PureComponent {

	handleScrollTop(){
		window.scrollTo(0,0)

	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img 
					className="banner-img" 
					src="//upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
					alt=''
					/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>: '' }
				
			</HomeWrapper>
		)
	}
	componentDidMount(){
		this.props.changeHomeData()
		this.bindEvents()
	}

	ComponentWillUnmount() {
		window.removeEventListener('scroll',this.props.changeScrollTopShow)

	}

	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}


}

const mapState = (state)=>({
	showScroll:state.get('home').get('showScroll')
})

const mapDispatch = (dispatch)=>({
	changeHomeData(){
		const action = actionCreators.getHomeInfo()
		dispatch(action)
	},
	changeScrollTopShow(){
		console.log(document.documentElement.scrollTop)
		if(document.documentElement.scrollTop>400){
			const action = actionCreators.toggleTopShow(true)
			dispatch(action)
		}else{
			const action = actionCreators.toggleTopShow(false)
			dispatch(action)
		}
	}
})

export default connect(mapState,mapDispatch)(Home);










