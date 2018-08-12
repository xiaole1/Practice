<template>
  <div id="app">
      <img :src=srca alt="">
      <router-link to="/">helloworld</router-link>
      <router-link to="/my/lily/9">practice</router-link>
    <router-view/>
    <transition name="fade">
      <p v-if= "show">总数:{{total}}</p>
    </transition>
    
    <my-counter @increase= "handleGetTotal" @reduce= "handleGetTotal"></my-counter>
    <br />
    <button v-on:click="show = !show">消失/出现</button>

    <p>我是来自my-bus的值：{{message}}</p>

    <my-bus>
      <h1>slot练习</h1>
      <h1 slot="header">我是header</h1>
      <p slot="footer">我是footer</p>
    </my-bus>
  </div>
</template>

<script>


export default ({
  name: 'app',
  data: function(){
    return {
      total: 0,
      show: true,
      message:'',
      srca:require('./assets/logo.png')
    }
  },
  methods:{
    handleGetTotal:function(total){
      this.total=total;
    },
  },
  mounted:function(){
      var _this=this;
      bus.$on('on-message',function(msg){
        _this.message=msg;
      })
    }
})

import Vue from 'vue'
Vue.component('my-counter',{
  template:'<div><button @click="handleIncrease">+</button><button @click="handleReduce">-</button></div>',
  data:function(){
    return{
      counter:0,
      message:''
    }  
  },
  methods:{
    handleIncrease:function(){
      this.counter++;
      this.$emit('increase',this.counter);
    },
    handleReduce:function(){
      this.counter--;
      this.$emit('reduce',this.counter);
    },
  }
})

var bus=new Vue();
Vue.component('my-bus',{
  template:"<div><p><input v-model='message' /></p><p><button @click='handleEvent' v-model='message'>传递事件</button></p><slot>如果没有内容显示我</slot><slot name='header'></slot><slot name='footer'></slot></div>",
  data:function(){
    return{
      message:''
    }
  },
  methods:{
    handleEvent:function(){
      bus.$emit('on-message',this.message);
    }
  }
})

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
