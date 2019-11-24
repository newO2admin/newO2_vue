<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>titile:{{detail.title}}</li>
    <li>id:{{detail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  const allDetails = [
      {id: 1, title: 'message001',content: 'message content001'},
      {id: 2, title: 'message002',content: 'message content002'},
      {id: 3, title: 'message003',content: 'message content003'}
    ]
  export default {
    data(){
      return{
        detail:{}
      }
    },
    mounted(){
      setTimeout(() => {
        const id = this.$route.params.id * 1
        const detail = allDetails.find(detail => detail.id===id)
        this.detail = detail
      }, 1000);
    },
     watch: {
      // $route代表当前路由信息对象
      $route (value) {
        setTimeout(() => {
          const id = value.params.id * 1
          const detail = allDetails.find(detail => detail.id===id)
          this.detail = detail
        }, 1000);
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
