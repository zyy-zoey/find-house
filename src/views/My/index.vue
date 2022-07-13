<template>
  <div>
    <!-- 登录后 -->
    <div class="my_title notlogin" v-if="user">
      <van-image width="100%" :src="require('/src/assets/avatar2.png')" />
      <div class="card">
        <van-image class="my_icon" :src="require('/src/assets/avatar.png')" />
        <div class="my_user">
          <div class="my_name">好客_68564</div>
          <van-button type="info" class="outbtn" @click="outbtn"
            >退出</van-button
          >
          <p>编辑个人资料</p>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="my_title" v-else>
      <van-image width="100%" :src="require('/src/assets/bg.png')" />
      <div class="card">
        <van-image class="my_icon" :src="require('/src/assets/avatar.png')" />
        <div class="my_user">
          <div class="my_name">游客</div>
          <van-button type="info" class="inbtn" @click="$router.push('/login')"
            >去登录</van-button
          >
        </div>
      </div>
    </div>

    <div>
      <van-grid :column-num="3" :border="false" class="my_list">
        <van-grid-item icon="star-o" text="我的收藏" @click="onCollect" />
        <van-grid-item icon="wap-home-o" text="我的出租" @click="onLet" />
        <van-grid-item icon="underway-o" text="看房记录" />
        <van-grid-item icon="idcard" text="成为房主" />
        <van-grid-item icon="contact" text="个人资料" />
        <van-grid-item icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div>
      <van-image class="my_join" :src="require('/src/assets/join.png')" />
    </div>
  </div>
</template>

<script>
import { getUserCollect, getFavourite } from '@/api/user'
import { mapState } from 'vuex'
export default {
  name: 'My',
  async created () {

  },
  data () {
    return {}
  },
  methods: {
    async outbtn () {
      try {
        await this.$dialog.confirm({ message: '确认退出码？' })
        this.$store.commit('setUser', '')
      } catch (err) {
        console.log(err)
      }
    },
    async onCollect () {
      try {
        const res = await getUserCollect()
        console.log(res)
        if (res.data.status === 200) {
          this.$router.push('/mycollect')
        } else {
          this.$toast.fail('用户未登录')
        }
      } catch (err) {
        console.log(err)
      }
    },
    async onLet () {
      try {
        const res = await getFavourite()
        console.log(res)
        if (res.data.status === 200) {
          this.$router.push('/mylet')
        } else {
          this.$toast.fail('用户未登录')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my_title {
  min-height: 600px;
  position: relative;
  .card {
    position: absolute;
    background: #fff;
    width: 82%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 10px;
    text-align: center;
    font-size: 13px;
    .my_icon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 120px;
      height: 120px;
      border: 10px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .my_user {
      padding-top: 30px;
      .my_name {
        margin-top: -50px;
        margin-bottom: 10px;
      }
      .inbtn {
        color: #fff;
        height: 60px;
        font-size: 24px;
        margin-top: 20px;
        background-color: #21b97a;
      }
      p {
        color: #a5a7a9;
      }
    }
  }
}
.outbtn {
  color: #fff;
  height: 40px;
  border-radius: 20px;
  font-size: 24px;
  margin-top: 20px;
  background-color: #21b97a;
}
.my_list {
  margin-top: 20px;
}
.my_join {
  padding: 0 30px;
}
/deep/ .van-grid-item__content {
  margin: 10px 0;
}
/deep/ .van-grid-item__icon {
  font-size: 40px;
}
/deep/ .van-grid-item__text {
  font-size: 28px;
}
</style>
