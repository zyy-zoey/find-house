<template>
  <div>
    <van-nav-bar title="收藏列表" left-arrow @click-left="$router.go(-1)" />
    <van-card
      v-for="(item, index) in collect"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { getUserCollect } from '@/api/user'
export default {
  name: 'collect',
  async created () {
    try {
      const res = await getUserCollect()
      console.log(res)
      this.collect = res.data.body
      console.log(this.collect)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      collect: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-card__title {
  font-size: 30px;
  font-weight: 700;
}
.van-card__desc {
  color: #ccc;
  font-weight: 400;
  margin: 6px;
}
/deep/ .van-tag--danger {
  border: 0;
  color: #39becd;
  background: #e1f5f8;
  padding: 4px 6px;
}
.van-card__price-integer {
  font-size: 36px;
  color: #fa5741;
}
</style>
