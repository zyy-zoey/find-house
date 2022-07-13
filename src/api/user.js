import store from '@/store'
import request from '@/utils/request'
/**
 * 登录
 */
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户个人信息
 */
export const getUserInfo = () => {
  return request({
    url: '/user',
    headers: {
      authorization: store.state.user
    }
  })
}

/**
 * 获取收藏列表
 * @returns
 */
export const getUserCollect = () => {
  return request({
    url: '/user/favorites',
    header: {
      authorization: store.state.user
    }
  })
}

/**
 * 获取 我的出租 数据
 * @returns
 */
export const getFavourite = () => {
  return request({
    url: '/user/houses',
    header: {
      authorization: store.state.user
    }
  })
}
