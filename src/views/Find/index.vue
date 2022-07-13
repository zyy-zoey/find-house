<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      class="label"
      v-model="value"
      show-action
      label="北京"
      placeholder="请输入小区或地址"
      @search="onSearch"
    >
      <template #left>
        <div @click="goBack">
          <van-icon name="arrow-left" color="#fff" size="22" />
        </div>
      </template>
      <template #label>
        <p @click="cityList">
          <span>
            {{ $store.state.houseName }}
          </span>
          <van-icon name="arrow-down" />
          |
        </p>
      </template>
      <template #action>
        <div @click="onSearch">
          <van-icon name="location-o" color="#fff" size="25" />
        </div>
      </template>
    </van-search>
    <!-- 下拉菜单 -->
    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>
    <van-card
      v-for="item in houseList"
      :key="item.id"
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
import { getCondition, getHouses } from '@/api/home'
export default {
  async created () {
    try {
      const res = await getCondition()
      console.log(res)
      res.data.body.area.children[0].children = [{ label: '' }]
      res.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res.data.body.area, res.data.body.subway]
      this.columns1 = res.data.body.rentType
      this.columns2 = res.data.body.price
    } catch (err) {
      console.log(err)
    }
    try {
      const res1 = await getHouses()
      console.log('res1', res1)
      this.houseList = res1.data.body.list
      console.log(this.houseList)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      columns: [],
      columns1: [],
      columns2: [
        {
          text: '浙江'

        },
        {
          text: '福建'

        }
      ],
      flag: false,
      houseList: ''
    }
  },
  methods: {
    goBack () {
      this.$router.push({
        path: '/home'
      })
    },
    cityList () {
      this.$router.push({
        path: '/city'
      })
    },
    onSearch () { }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.label {
  background-color: #21b97a;
}
.van-search__action {
  line-height: 0;
}
.van-search__content {
  align-items: center;
  height: 68px;
  padding-left: 6px;
  margin-left: 20px;
}
/deep/ .van-tabs__line {
  height: 0;
}

//
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
