<template>
  <div>
    <div>{{message}}</div>
  </div>
</template>
<script>

export default {
  name: 'Practice',
  data :function() {
    return {
      message: 'I am the part component one!',
    }
  }
}

import Vue from 'vue';
Vue.component('my-component',{
  template:"<p>I am a globel component</p>"
})

</script>
