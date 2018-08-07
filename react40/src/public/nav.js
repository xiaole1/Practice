let React=require('react');

let bgstyle={width:800,height:50,margin:"0 auto",backgroundColor:"#9f0"};
export default class Nav extends React.Component{
	render(){
		return(
			<div style={bgstyle}>
			<a href="#">首页</a>|
			<a href="#">介绍</a>|
			<a href="#">联系</a>|
			<a href="#">招聘</a>|
			
			<input type="button" value="abc" name="age" onClick={this.props.names} />
			</div>
			)
}
}