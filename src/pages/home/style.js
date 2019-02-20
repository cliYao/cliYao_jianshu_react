import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	margin:0 auto;
	margin-top:30px;
	height:300px;
	xbackground:red;
`
export const HomeLeft = styled.div`
	float:left;
	width:640px;
	margin:0 auto;
	height:300px;
	xbackground:red;
	.banner-img{
		width:625px;
		height:270px;
	}
`

export const HomeRight = styled.div`
	float:right;
	width:240px;
	margin:0 auto;
	height:300px;
	xbackground:blue;
`

export const TopicWrapper = styled.div`
	overflow:hidden;
	padding:0px 0 10px 0;
	xmargin-left:-20px;
	border-bottom:1px solid #dcdcdc;


`

export const TopicItem = styled.div`
	float:left;
	height:32px;
	 .TopicPic{
	 	display:block;
	 	float:left;
	 	height:32px;
		width:32px;
		margin-right:10px;


	 }
	line-height:32px;
	margin-left:18px;
	margin-top:18px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:#000;
	xborder:1px solid #dcdcdc;
	border-radius:4px;
	box-sizing:border-box;
`

export const TopicItemMore = styled.div`
	float:left;
	height:32px;
	line-height:32px;
	margin-left:18px;
	margin-top:18px;
	padding-right:10px;
	color:#999;
	font-size:14px;
`

export const ListItem =styled.div`
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.list-pic{
		width:125px;
		height:100px;
		display:block;
		float:right;
		border-radius:10px;
	}
	
`

export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		line-height:27px;
		font-size:18px;
		color:#333;
		font-weight:bold;
	}
	.desc{
		font-size:13px;
		line-height:24px;
		color:#999;
	}
`
export const LoadMore=styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	margin:30px 0;
	text-align:center;
	background:#a5a5a5;
	border-radius:20px;
	color:#fff;
	cursor:pointer;
`

export const RecommendList = styled.div`
	width:280px;
	height:50px;
	margin-left:-50px;
	.list-pic{
		width:280px;
		height:50px;
		display:block;
		float:right;
		margin-bottom:5px;
	}
	a{
		cursor:pointer;
	}
`

export const WriterInfo = styled.div`
	width:280px;
	height:559px;
	margin-left:-50px;
	margin-top:40px;
	xbackground:blue;
`

export const WriterInfoTitle = styled.div`
	float:left;
	line-height:20px;
	font-size:14px;
	color:#969696;
`

export const WriterInfoSwitch = styled.span`
	float:right;
	font-size:14px;
	cursor:pointer;
	color:#969696;
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:2px;
		transition:all .2s ease-in;
		transform-origin:center center;
	}
`

export const WriterInfoItem =styled.div`
	float:left;
	width:280px;
	height:48px;
	margin-top:10px;
	xmargin-left:-50px;
	.pic{
		width:48px;
		height:48px;
		border-radius:50px;
		float:left;
		margin-right:10px;
	}

	
`

export const WriterInfoItemList = styled.div`
	width:222px;
	float:left;
	line-height:24px;
	font-size:14px;
	color:#333;

	.add{
		float:right;
		color:#42c02e;
		text-decoration:none;
	}
	.desc{
		color:#969696;
	}
	.title{
		text-decoration:none;
		color:#333;
	}
`

export const BackTop = styled.div`
	position:fixed;
	right:50px;
	bottom:50px;
	width:60px;
	height:60px;
	line-height:60px;
	font-size:12px;
	color:#333;
	text-align:center;
	border:1px solid #ccc;
	:hover{
		background:#eee;
	}
	transition:all .2s ease-in;
`













