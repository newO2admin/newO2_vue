<template>
  <div id="g-baikeFooter">
    <!-- 热搜 -->
    <div class="g-topSearch">
      <div class="topSearch-text">
        <slot name="title"></slot>
        <!-- <p>— 热搜功效 —</p> -->
      </div>
      <div class="topSearch-list">
        <slot name="picture"></slot>
        <!-- <ul class="content">
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/5/20180306140651565.jpg" alt="">
              <span>瘦脸</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/2/20180306140700553.jpg" alt="">
              <span>瘦腿</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/0/20180306140704176.jpg" alt="">
              <span>隆鼻</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/3/20180306140712290.jpg" alt="">
              <span>垫下巴</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/1/20180306140718148.jpg" alt="">
              <span>面部填充</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/6/20180306140723628.jpg" alt="">
              <span>美白</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/5/20180306140727748.jpg" alt="">
              <span>补水保湿</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/9/20180306140732342.jpg" alt="">
              <span>丰胸</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="https://img2.soyoung.com/item/20180306/7/20180306140735385.jpg" alt="">
              <span>半永久妆</span>
            </a>
          </li>          
        </ul> -->
      </div>
    </div>
    <!-- 详情 -->
    <div class="g-detail">
      <div>
        <div class="topBlank"></div>
        <div class="main">
          <div class="name">
            <a href="">
              <p>玻尿酸</p>
            </a> 
          </div>
          <ul>
            <li>
              <span>注射除皱</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="topBlank"></div>
        <div class="main">
          <div class="name">
            <a href="">
              <p>玻尿酸</p>
            </a> 
          </div>
          <ul>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="topBlank"></div>
        <div class="main">
          <div class="name">
            <a href="">
              <p>玻尿酸</p>
            </a> 
          </div>
          <ul>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
            <li>
              <span>玻尿酸塑型</span>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      new BScroll('.topSearch-list', {
        scrollY: false,
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #g-baikeFooter
    .g-topSearch
      height 297px
      .topSearch-text
        margin-top 28px
        margin-bottom 40px
        text-align center
        p
          font-size 30px
          line-height 30px
      .topSearch-list
        height 227px
        display flex
        overflow hidden
        .content
          height 227px
          display flex
          li
            width 160px
            height 197px
            margin-bottm 30px
            a
              display flex
              flex-direction column
              text-align center
              img 
                width 120px
                height 120px
                margin 0 10px 20px 30px
                border-radius 50%
              span 
                font-size 26px
                padding-top 28px
                color #333
    .g-detail
      .topBlank
        height 20px
        width 100%
        background-color #f3f7f7
      .main
        .name
          heihgt 88px
          margin-left 30px
          padding-top 32px
          padding-bottom 36px
          a
            p
              width 720px 
              height 30px
              font-size 30px
              padding-left 20px
              border-left 4px solid #31cac4
              color #333
        ul
          display flex
          flex-wrap wrap
          padding-bottom 36px
          margin 0 30px
          li
            width 168px
            height 64px
            margin-right 6px
            margin-bottom 4px
            background-color #f5f5f5
            text-align center 
            &:nth-child(4n)
              margin-right 0
            span 
              height 64px
              line-height 64px
              color #333
              font-size 24px


</style>
