import React,{ PureComponent } from 'react';
import {RecommendList} from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
	render() {
		const { list } = this.props
		return (
			<div>
				{
					list.map((item)=>{
						return(
							<RecommendList key={item.get('id')}>
								<a href='./'><img 
								className="list-pic"
								src={item.get('imgUrl')}
								alt=''
								/>
								</a>
							</ RecommendList>
						)
					})
					
				}
			</div>
		)
	}
}

const mapState = (state) =>({
	list:state.get('home').get('recommendList')
})

export default connect(mapState,null)(Recommend);