import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem,TopicItemMore} from '../style';


class Topic extends PureComponent {
	render() {
		const {list}= this.props
		return (
			<TopicWrapper>
				{
					list.map((item)=>(
							<TopicItem key={item.get('id')}>
								<img 
								className="TopicPic" 
								src={item.get('imgUrl')}
			    			alt=''
			    			/>
								{item.get('title')}
							</TopicItem>
						
						))
				}
				<TopicItemMore>
					更多热门专题>
				</TopicItemMore>
			</ TopicWrapper>
		)
	}
}

const mapState =(state) =>({
	list:state.get('home').get('topicList')
})

export default connect(mapState,null)(Topic);