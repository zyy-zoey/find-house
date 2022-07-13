<template>
  <div>
    <van-nav-bar title="注册账号">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <!-- 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线 -->
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit"
          >注 册
          <router-link to="/login"></router-link>
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar__content {
  margin-bottom: 21px;
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
    font-size: 36px;
  }
  .van-icon {
    color: #fff;
  }
}
.van-form {
  margin: 0 15px;
  .van-cell {
    height: 140px;
    line-height: 140px;
    font-size: 34px;
    margin-bottom: 9px;
  }
  .van-button {
    height: 100px;
    background-color: #21b97a;
    font-size: 36px;
    color: #fff;
  }
}

.tip {
  color: #666;
  font-size: 28px;
  text-align: center;
}
</style>
