import config from '../config'

const UserService = {
    saveUserInfo(user) {
        window.localStorage.setItem(config.USER_INFO, JSON.stringify(user))
      },
      getUserInfo() {
          return window.localStorage.getItem(config.USER_INFO)
      },
      clearUserInfo() {
          window.localStorage.removeItem(config.USER_INFO)
      }
}

export default UserService