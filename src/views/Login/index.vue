<template>
  <div>
    <van-nav-bar title="账号登录">
      <van-icon name="arrow-left" slot="left" />
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '请先输入6-20位字母开头的用户名',
          },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[0-9]{6}$/, message: '密码错误,请输入6位数字密码' },
        ]"
      />
      <div style="margin: 16px">
        <van-button block native-type="submit">登 录</van-button>
      </div>
    </van-form>
    <div class="tip">
      <router-link to="/registe">还没有账号，去注册~</router-link>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      // console.log('submit', values)
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        if (res.data.status === 200) {
          this.$toast.success('登录成功')
          // 方法1：path跳转
          this.$router.push({
            path: 'my'
          })
        } else {
          this.$toast.fail('登录失败，请重试')
        }
        console.log(res.data.data)
        this.$store.commit('setUser', res.data.body.token)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
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
