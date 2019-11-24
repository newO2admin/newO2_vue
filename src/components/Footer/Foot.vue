<template>
  <div class="feed-tab">
      <div class="tab">
        <ul class="tabList">
          <li class="tabItem" 
          :class="{active:show===index}" 
          v-for="(footItem, index) in datas" :key="index" 
          @click="toShow(index)"
          >
          <router-link :to="'/msite/' + this.show"> <span>{{footItem}}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import datas from '../../data/foot.json'
  export default {
    data(){
      return{
        show: 0,
        datas:[],
      }
    },
    methods:{ 
      toShow(index){
        this.show = index
        // this.$router.replace(`/msite/${index}`)
      }
    },
    mounted(){
      this.datas = datas
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
