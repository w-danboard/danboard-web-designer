const getters = {
  // 登录的个人信息
  user(state: any) {
    return state.user || localStorage.get('user') || {}
  }
}

export default getters;