import store from '@/store'
import request from '@/utils/request'
/**
 * 轮播图
 */
export const getLunBo = () => {
  return request({
    url: '/home/swiper'
  })
}

/**
 * 租房小组
 * @param {*} area
 * @returns
 */
export const getGroups = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}

/**
 * 获取全部城市数据
 * @param {*} level
 * @returns
 */
export const getCity = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

/**
 * 获取热门城市
 * @returns
 */
export const getHotCity = () => {
  return request({
    url: '/area/hot'
  })
}

/**
 * 发布房屋所需的条件
 * @returns
 */
export const getPublish = () => {
  return request({
    url: '/houses/params',
    header: {
      authorization: store.state.user
    }
  })
}

/**
 * 获取房屋查询条件
 * @returns
 */
export const getCondition = () => {
  return request({
    url: '/houses/condition',
    params: {
      id: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}

/**
 * 根据条件查询房屋
 * @returns
 */
export const getHouses = () => {
  return request({
    url: '/houses',
    params: {
      cityId: 'AREA|88cff55c-aaa4-e2e0'
    }
  })
}
