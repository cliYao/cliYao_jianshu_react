import React,{ PureComponent } from 'react';
import { connect } from 'react-redux';
import {WriterInfo,WriterInfoTitle,WriterInfoSwitch,WriterInfoItem,WriterInfoItemList} from '../style';

class Writer extends PureComponent {
	render() {
		const {list,page,totalPage,handleChangePage}=this.props

		const newList = list
		const pageList =[]

		if(newList.length){
			for(let i=(page-1)*5;i<page*5;i++){
			pageList.push(
				newList[i]
			)
			
			}
		}

		return (
			<WriterInfo>
			<WriterInfoTitle>推荐作者</ WriterInfoTitle>
			<WriterInfoSwitch 
				onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
			>
				<i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>换一批
			</ WriterInfoSwitch>
			{
				list.map((item)=>(
					<WriterInfoItem key={item.get('id')}>
						<img className="pic" src={item.get('imgUrl')} alt=''/>
						<WriterInfoItemList>
							<a className="title" href='/'>{item.get('writerName')}</a>
							<a className="add" href='/'>+关注</a>
							<p className="desc">写了{item.get('writeAmount')}字·{item.get('likeAmount')}喜欢</p>
						</WriterInfoItemList>
					</ WriterInfoItem>
				))
			}
			</WriterInfo>
		)
	}
}

const mapState =(state) =>({
	page:state.get('header').get('page'),
	totalPage:state.get('header').get('totalPage'),
	list:state.get('home').get('writerList'),
})

const mapDispatchToProps =(dispatch) =>{
	return {
		handleChangePage(page,totalPage,spin){
			let originAngle =spin.style.transform.replace(/[^0-9]/ig,'')
			console.log(originAngle)
			if(originAngle){
				originAngle=parseInt(originAngle,10)
			}else{
				originAngle=0
			}
			spin.style.transform ='rotate(' +(originAngle+360) +'deg)'
		}

	}
}

export default connect(mapState, mapDispatchToProps)(Writer);