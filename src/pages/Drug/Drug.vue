<template>
  <div id="g-baikeDrug" v-if="Bk.detail">
    <CyclopediaFooter :detail="Bk.detail">
      <template slot="title">
        <p>— 热门品牌 —</p>
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
      if (sessionStorage.getItem('drug')) {
        let Bk = JSON.parse(sessionStorage.getItem('drug'))
        console.log(Bk)
        this.Bk = Bk
      }else {
        this.Bk =  this.$route.query.Bk
      }
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('drug', JSON.stringify(this.Bk))
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
</style>
