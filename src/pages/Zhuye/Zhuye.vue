<template>
  <div id="g-baikeZhuye">
    <CyclopediaFooter :detail="Bk.detail">
      <template slot="title"> 
        <p>— 热搜功效 —</p>
      </template>
      <template slot="picture">
        <ul class="content">
          <li v-for="(item, index) in Bk.nav" :key="index">
            <a href="javascript:;">
              <img :src="item.url" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>         
        </ul>
      </template>
    </CyclopediaFooter>
  </div>
</template>

<script type="text/ecmascript-6">

  import CyclopediaFooter from "../../components/CyclopediaFooter/CyclopediaFooter"
  export default {
    data() {
      return {
        Bk: {}
      }
    },
    components: {
      CyclopediaFooter
    },
    mounted() {
      if (sessionStorage.getItem('zhuye')) {
        let Bk = JSON.parse(sessionStorage.getItem('zhuye'))
        this.Bk = Bk
      }else {
        this.Bk =  this.$route.query.Bk
      }
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('zhuye', JSON.stringify(this.Bk))
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #g-baikeZhuye

</style>
