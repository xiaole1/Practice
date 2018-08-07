import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Header from './public/header';
import Footer from './public/footer';
import Nav from './public/nav';
import Left from './public/left';
import Routes from './routes/routes';

import App from './public/app';
import About from './public/about';
import Inbox from './public/inbox';


import {Route,Router,hashHistory} from 'react-router';

let cstyle={width:800,height:400,margin:"0 auto",position:"relative",overflow:"hidden"};
let lstyle={width:200,height:400,margin:0,backgroundColor:"#eee",float:"left"};
let rstyle={width:600,height:400,backgroundColor:"#ccc",float:"left"};
class Content extends React.Component{
    constructor(props){
        super(props);
        // this.state={names:"coco",age:"19"};
        this.state={stu:[]};
    }
    handleShow(){

    }
    handleChange(cons){//儿子向父亲传值
        this.state.stu.push(cons);
        this.setState({stu:this.state.stu});
    }
    handleClickref(){ //ref方法改变背景颜色
        this.refs.refgb.style.backgroundColor="#0f0";
    }

    handleClickys(){  //原生JS改变背景颜色
        let a=document.getElementById("ys");
        a.style.backgroundColor="#030";
    }
    render(){
        // setTimeout(()=>{
        //     this.setState({names:"Tom"})
        // },5000)
        return(
            <div style={cstyle}>
                <div style={lstyle}>
                    <Left 
                        marks={'来自contents的值'} //父亲向儿子传值
                        xinxi={this.handleChange.bind(this)} //儿子向父亲传值
                    />
                </div>
                <div style={rstyle}>
                    {
                        // console.log(this.state.stu)
                        this.state.stu.map((item,index)=>{
                            return(
                                <div key={index}>
                                <h3>姓名：{item.name}</h3>
                                <h3>年龄：{item.age}</h3>
                                </div>
                            )
                        })
                    }
                    <Routes />
                    <h6 id="ys" onClick={this.handleClickys.bind(this)}>原生JS改变</h6>
                    <h6 ref="refgb" onClick={this.handleClickref.bind(this)}>ref改变</h6>
                </div>

            </div>
        )
    }
}

ReactDom.render(
<div>
    <Header />
    <Nav />
    <Content />
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/inbox" component={Inbox} />
        <Route path="/about" component={About} />
    </Router>
    <Footer />

</div>,
document.getElementById('eg')
)

