<template>
  <div>
    <div @click= "foo">{{message+$route.params.id+$route.params.name}}</div>
  </div>
</template>
<script>
function ale(){
  return this.message;
}

export default {
  name: 'Practice',
  data :function() {
    return {
      message: 'I am the part component one!',
    }
  },
  methods:{
    foo : function(){
      alert(ale());
    }
    
  }
}
</script>
