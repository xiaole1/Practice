// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Practice from './components/practice.vue'

Vue.config.productionTip = false

Vue.component('my-component',{
  template:"<p>I am a globel component1</p>"
})

Vue.component('example', {
  props: {
    //基础类型检测("null"意思是任何类型都可以)
    msg_null: null,
    //String类型，必须是定义过的，可以是空字符串""
    msg_string: {
        type: String,
        required: true,
    },
    //Number类型，默认值100
    msg_number: {
        type: Number,
        default: 100,
    },
    //Object类型，返回值必须是js对象
    msg_obj: {
        type: Object,
        default: function() {
            return {
                name: "DarkRanger",
                age: "18",
            }
        }
    },
    //指定这个prop为双向绑定
    //如果绑定类型不对将抛出一条警告
    msg_twoway: {
        type: String,
        twoWay: true,
    },
    //自定义验证，必须是Number类型，验证规则：大于0
    msg_validate: {
        type: Number,
        validator: function(val) {
            return val > 0;
        }
    },
    //将值转为String类型
    //在设置值之前转换值(1.0.12+)
    msg_number2string: {
        coerce: function(val) {
            return val + ""
        }
    },
    //js对象转JSON字符串
    msg_obj2json: {
        coerce: function(obj) {
            return JSON.stringify(obj);
        }
    },
    //JSON转js对象
    msg_json2obj: {
        coerce: function(val) {
            return JSON.parse(val);
        }
    },
},
template: '<div>msg_null: {{msg_null}}</div>' 
　　　　+ '<div>msg_string:{{msg_string}}</div>' 
　　　　+ '<div>msg_number: {{msg_number}}</div>' 
　　　　+ '<div>msg_obj:{{"name-->"+msg_obj.name+", age-->"+msg_obj.age}}</div>' 
　　　　+ '<div>msg_twoway:<input v-model="msg_twoway"></div>' 
　　　　+ '<div>msg_validate:{{msg_validate}}</div>' 
　　　　+ '<div>msg_number2String: {{msg_number2string}}</div>' 
　　　　+ '<div>msg_obj2json: {{msg_obj2json}}</div>'
　　　　+'<div>msg_json2obj:{{"name: "+msg_json2obj.name+"; age: "+msg_json2obj.age}}</div>'
})


var info={template:"<p>I am the part component two!</p>"}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App ,
    Practice,
    "my-children":info
  },
  template: '<div><App/><my-component /><Practice /><my-children /></div>'
})
