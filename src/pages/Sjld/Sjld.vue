<template>
  <div id="beautifulContainer">
    <div class="header">
      <span class="back"> < </span>
      <span class="title">美丽日记</span>
    </div>
    <!-- 导航 -->
    <div class="nav_panesl">
      <div class="nav">
        <div class="drop-down">最热日记</div>
        <div class="drop-down" :class="{active:!show}" @click="change(show)">全部项目</div>
        <div class="drop-down">最全部地区</div>
      </div>
    </div>
    <div class="navList">
      <ul>
        <li 
        @click="changeItem(index,item)" 
        v-for="(item, index) in items" :key="index"
        :class="{active: showItem == index }" 
        v-show="!show"
        >{{item.name}}</li>
      </ul>
      <div class="navItem">
        <ul>
          <li 
          @click="changeitemChild(index,itemChild)" 
          v-for="(itemChild,index) in itemsChild" :key="index"
          :class="{active: showChildItem == index }"
          v-show="!show"
          >{{itemChild.name}}</li>
        </ul>
      </div>
    </div>
    </div>
    
</template>

<script type="text/ecmascript-6">
  import datas from '../../data/3.json'
  export default {
    data(){
      return{
        show:true,
        showItem:0,
        showChildItem:0,
        datas:{},
        items:[],
        itemsChild:[]
      }
    },
    mounted(){
      this.datas = datas
      this.items = datas.responseData.item
    },
    methods:{
      change(){
        this.show = !this.show
      },
      changeItem(index,item){
        this.showItem = index
        this.itemsChild = item.menu2
      },
      changeitemChild(index, itemChild){
        this.showChildItem = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#beautifulContainer
  .header
    width 100%
    height 90px
    line-height 90px
    font-size 40px
    // background pink 
    position relative
    border-bottom 1px solid #eee
    .back
        margin-left 10px
        color  #72dacf
      .title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
  .nav_panesl
      .nav
        width 100%
        height 83px
        display flex
        .drop-down
          width 33.3333%
          line-height 83px
          text-align center
          &.active
            color #2cc7c5
  .navList
    display flex
    ul
      li
        display block
        width 200px
        height 60px
        &.active
          background green
    .navItem
      ul
        li
          display block
          width 200px
          height 60px
          &.active
            background green
</style>
