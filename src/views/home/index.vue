<template>
  <p>{{ msg }}</p>
</template>

<script>
import { list } from '@/mock/index'
export default {
  data() {
    return {
      msg: 'hello world'
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // list
    getList() {
      list().then(res => {
        const { code, list, msg } = res.data
        if (code === 10000) {
          this.list = list
        } else {
          this.$toast(msg)
        }
      }).catch(err => {
        console.log(err)
        this.$toast('哎呀，出错啦~~~')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  p {
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
</style>
