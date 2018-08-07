let React=require('react');

import Nav2 from './nav2';

let mstyle={margin:"0 auto"};
let bgstyle={margin:"0 auto",backgroundColor:"#fcd878",widht:200,height:800};

export default class Left extends React.Component{
	constructor(props){
		super(props);
		this.state='';
	}
	componentDidMount(){
        this.setState({
            name: this.loadInfo()
        })
	}
	handleSub(){
		let name=this.refs.name.value;
		let age=this.refs.age.value;
		if(this.props.xinxi){
			this.props.xinxi({name,age});
		}
	}
    loadInfo(){
        var p;
        $.ajax({
            type:"post",
            url:"http://www.qhdlink.com/stutest/teacher.php",
            data:{"username":"admin","pwd":"admin"},
            async:false,
            success:function(data){
                if(data=="01"){
                    alert("登陆失败，请联系网站管理员");
                }else{
                    p=eval("("+data+")");
                }
            }
        })
		return p;
    }
	render(){
		return(
			<div style={bgstyle}>
				{/*{console.log(this.state.name)}*/}
                <h3 style={mstyle}>{this.props.marks}</h3> //父亲传来的值
                <p>用户名：<input type="text" ref="username" /></p>
				<p>密码：<input type="password" ref="pwd" /></p>
				<input type="button" ref="sub" value="提交" onClick={this.handleSub.bind(this)}/>
                <Nav2 />
            </div>
			)
	}
}