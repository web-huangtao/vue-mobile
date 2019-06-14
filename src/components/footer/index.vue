<template>
  <div class="footers">
    <div class="footer-item" v-for="(item,index) in footer" :key="index">
      <router-link :to="item.path" exact>
        <img v-if="checkIndex == index" :src="item.checkImgUrl" />
        <img v-else :src="item.imgUrl" />
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'checkIndex': {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      footer: [
        {'title': '首页', 'imgUrl': require('./imgs/home.png'), 'checkImgUrl': require('./imgs/homefill.png'), 'path': '/'},
        {'title': '分类', 'imgUrl': require('./imgs/sort.png'), 'checkImgUrl': require('./imgs/sortfill.png'), 'path': '/kind'},
        {'title': '购物车', 'imgUrl': require('./imgs/cart.png'), 'checkImgUrl': require('./imgs/cartfill.png'), 'path': '/cart'},
        {'title': '我的', 'imgUrl': require('./imgs/people.png'), 'checkImgUrl': require('./imgs/peoplefill.png'), 'path': '/user'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .footers {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    background: #e5e5e5;
    .footer-item a {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-decoration: none;
      width: 100px;
      height: 100px;
      padding: 10px 0;
      box-sizing: border-box;
      img {
        width: 50px;
        height: 50px;
      }
      // span {

      // }
      &.router-link-active {
        color: #e16c61;
      }
    }
  }
</style>
