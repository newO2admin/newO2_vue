<template>
  <div>
    <ul>
      <li v-for="(message, index) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        messages:[]
      }
    },
    mounted(){
      setTimeout(() => {
        const messages = [
          {
            id:1, title:'message01'
          },
          {
            id:2, title:'message02'
          },
          {
            id:3, title:'message03'
          }
        ]
        this.messages = messages
      }, 1000);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
