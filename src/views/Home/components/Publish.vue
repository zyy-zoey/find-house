<template>
  <div>
    <van-nav-bar title="发布房源" left-arrow @click-left="$router.go(-1)" />
    <van-cell-group title="房源信息">
      <van-cell title="小区名称" is-link value="请输入小区名称" />
      <van-field
        v-model="value"
        label="租金"
        placeholder="请输入租金/月"
        value="内容"
      >
        <template #extra>￥/月</template>
      </van-field>
      <van-field
        v-model="value"
        label="建筑面积"
        placeholder="请输入建筑面积"
        value="内容"
      >
        <template #extra>m²</template>
      </van-field>
      <!-- <van-cell title="户型" is-link value="请选择"></van-cell> -->
      <div>
        <van-cell title="户型" value="请选择 >" @click="changePicker" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            value-key="label"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <div>
        <van-cell title="所在楼层" value="请选择 >" @click="changePicker" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns1"
            value-key="label"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <div>
        <van-cell title="朝向" value="请选择 >" @click="changePicker" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns2"
            value-key="label"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <van-cell-group title="房屋标题">
        <van-field
          v-model="value"
          placeholder="请输入标题 (例如：整租 小区名 2室 5000元)"
        />
      </van-cell-group>
      <van-cell-group title="房屋图像">
        <van-uploader :after-read="afterRead" />
      </van-cell-group>
      <van-cell-group title="房屋配置">
        <van-grid :border="false" :column-num="5">
          <van-grid-item
            v-for="(item, index) in publist"
            :key="index"
            :text="item.label"
          />
        </van-grid>
      </van-cell-group>
      <van-cell-group title="房屋描述" class="represent">
        <van-field v-model="value" placeholder="请输入房屋描述信息" />
      </van-cell-group>
    </van-cell-group>
    <van-row>
      <van-col span="8">
        <van-button block>取消 </van-button>
      </van-col>
      <van-col span="16">
        <van-button type="primary" block>确定</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getPublish } from '@/api/home'
export default {
  async created () {
    try {
      const res = await getPublish()
      console.log(res)
      this.columns = res.data.body.roomType
      this.columns1 = res.data.body.floor
      this.columns2 = res.data.body.oriented
      // console.log('columns', this.columns)
      // console.log('columns1', this.columns1)
      // console.log('columns2', this.columns2)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      value: '',
      publist: '',
      list: [],
      columns: [],
      columns1: [],
      columns2: [],
      showPicker: false
    }
  },
  methods: {
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    changePicker () {
      this.showPicker = true
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.represent {
  height: 450px;
}
</style>
