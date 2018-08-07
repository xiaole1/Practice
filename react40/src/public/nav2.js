import React from 'react';
import fetch from 'node-fetch';



export default class Nav2 extends React.Component{
    constructor(props){
        super(props);
        //fetch是异步加载，所以根据load的参数设置显示内容，根据声明周期函数componentDidmount，改变state值，从而改变DOM
        this.state={name:'',age:'',p:null ,load:false};
    }
    //耗时操作放在这里面
    componentDidMount(){
        this.contentInfo();
    }
    contentInfo(){
        fetch('http://localhost:8080/fetch.php',)
            .then((res)=>res.json()).then((json)=>{console.log(data)}).catch((e)=>{alert(e)});
    }
    render(){
        if(this.state.load) {
            return (
                <div>
                    {console.log(this.state.p)}
                    {/*<div>*/}
                        {/*<div>网络信息内容：{this.state.p.map(function(value,index){*/}

                            {/*let src_info="http://www.qhdlink.com/"+value.pic.slice(3);*/}
                            {/*return<div key={index}><h4>{value.names}</h4><p>{value.title}</p>*/}
                                {/*<div>{value.info}<img src={src_info} alt={value.title} /></div>*/}
                            {/*</div>*/}
                        {/*})}</div>*/}
                    {/*</div>*/}
                </div>
            )
        }else{
            return(
                <div>页面加载中……</div>
            )
        }
    }
}
