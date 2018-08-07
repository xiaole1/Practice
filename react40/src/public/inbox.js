import React from 'react';
export default class ServiceList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            //我们使用state里面的services来保存所有的service
            //刚开始的时候，内容为空
            services:[],
            //这里的view决定了我们要显示哪些service
            view:"type_a"
        }
    }

    render(){
        //当react库运行到render方法的时候,就会遍历所有state中service的项目
        const serviceShows = this.state.services.map((service,index)=>{
            //如果这个service的type和当前view相符，就把他添加到待显示内容的array中去
                    console.log(service);
                return <div className="one-service" key={index}>{service.names}</div>
                //看到有说用index做为key是anti-pattern，这个我也没有过多研究
                //更好的方法肯定是用一些明确能代表数据的值，比如service.id这样会更好

                //但是有时候通过相同的index来欺骗react让他相信两个element是同一个element，又会有一些妙用
                //比如假如这里每个service会显示一个根据需要长度不同的label，css上面做一个transition效果
                //然后services分两批显示，即数量除以2，每次显示一半
                //如果使用不同的key，比如service.id，那么你会看到element不同的时候它们只是简单的被替换了
                //而如果总是使用每一批的index，那么你会看到label有一个动态的长度变换效果
                //因为react被我们欺骗了，label没有被替换，只是长度变化，所以css动画效果就生效了


        })
        return(
            <div>
               {/*{这里，我们把待显示内容显示出来}*/}
                <p>{serviceShows}</p>

            </div>
        )
    }

    //可以看到，我们的类被构造的时候本身自带的state中services是个空数组，我们需要用内容填充他
    //查看react的文档的《组件生命周期》这一页（这一页很重要，一定要明白各个函数在什么情况下会被触发），发现它建议我们在每个组件显示完毕
    //之后使用componentDidMount函数来获取需要的数据，那就照做
    componentDidMount(){
        //组件先按照services为空渲染一遍，你可以理解为先把网页框架渲染出来
        //渲染完毕之后就调用我们这里这个函数用ajax方法去服务器取数据
        const xhr = new XMLHttpRequest()
        //服务器随你喜欢，你可以用php，也可以用node，只要实现了标准的GET方法即可
        //对于post，put，delete等方法同理
        //而很显然，假如你的数据没有必要从数据库中提取，或者长期不变，也不怕泄密
        //那你完全可以在此请求一个json文件
        xhr.open("POST", "http://www.qhdlink.com/stutest/teacher.php", true)
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        //根据情况选择是否要随get请求发送用于身份认证的信息
        xhr.send("username=admin&pwd=admin")

        xhr.onreadystatechange = () =>{
            if(xhr.readyState == 4 ){
                if(xhr.status==200){
                    //你当然可以用其他方法编码你的返回信息，但是对于js的世界来说，还有什么比json更方便呢？
                    let gotServices = JSON.parse(xhr.responseText)
                    //好了，我们获得了service列表，使用setState方法覆盖当前元素的services数据
                    this.setState({
                        services : gotServices
                    })
                }
            }
        }
    }

    //那么我们已经渲染了页面，也从服务器获得了数据，还把数据放到了应该放的位置，
    //还要做什么才能让我们写的这个component把新数据显示出来呢？
    //不用担心，react控制着所有的setState方法，
    //当他发现你对于某个component设置了新的state之后，他就会告诉那个component去再次执行render方法，
    //然后你再去看render方法，这次他因为this.state.services的内容不一样了自然就会渲染出不一样的内容啦
    //怎么样才能明显的感受到这一前一后两次渲染的存在呢？
    //在你的服务器端把刚才ajax请求的接口做个5秒钟的延迟，
    //你就会明显看到获得返回结果的那一瞬间新内容被刷出来啦
}
