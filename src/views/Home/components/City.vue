<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.go(-1)" />
    <van-index-bar :index-list="indexList">
      <div v-for="(item, index) in indexList" :key="index">
        <van-index-anchor :index="item">
          {{ item === "#" ? "当前城市" : item === "热" ? "热门城市" : item }}
        </van-index-anchor>
        <van-cell
          v-for="(item2, ind) in obj[item]"
          :key="ind"
          :title="item2.label"
          @click="jump($event, item2)"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, getHotCity } from '@/api/home'
import { Toast } from 'vant'
export default {
  async created () {
    try {
      const res = await getCity(1)
      console.log('全部城市res', res)
      this.list = res.data.body
      const obj = {}
      this.list.forEach(item => {
        const first = item.short.substr(0, 1).toUpperCase()
        // console.log('首字母', first)
        if (obj[first]) {
          obj[first].push(item)
        } else {
          obj[first] = [item]
        }
        this.obj = { ...obj, ...this.list }
        // console.log('obj', this.obj)
        // sort() 排序
        this.cityIndexList = Object.keys(obj).sort()
      })
      this.indexList.push(...this.cityIndexList)
      // console.log('拼接后的数据', this.indexList)
    } catch (err) {
      console.log(err)
    }
    try {
      const res2 = await getHotCity()
      console.log('热门城市res2', res2)
      this.hotList = res2.data.body
      this.obj = { ...this.obj, 热: this.hotList, '#': [{ label: this.$store.state.houseName }] }
      // console.log('obj', this.obj)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      list: [],
      hotList: [],
      indexList: ['#', '热'],
      cityIndexList: [],
      obj: {}
    }
  },
  methods: {
    jump (event, item) {
      const hotArr = ['北京', '广州', '上海', '深圳']
      // console.log(item)
      if (hotArr.every((value) => value !== item.label)) {
        Toast({
          message: '此地区没有房源',
          position: 'center'
        })
        return
      }
      // console.log(event.target.innerText)
      this.$store.state.houseName = event.target.innerText
      this.$router.go(-1)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/ .van-index-bar__index {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 26px;
}
</style>
