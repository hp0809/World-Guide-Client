import config from '../config'
import TokenService from '../services/token-service'
import UserService from '../services/user-service'
import IdleService from '../services/idle-service'

const AuthApiService = {
    postLogin({ user_name, password }) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ user_name, password }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => console.log(e))
              : res.json()
          )
          .then(res => {
            TokenService.saveAuthToken(res.authToken)
            UserService.saveUserInfo(res.userInfo)
            IdleService.regiserIdleTimerResets()
            TokenService.queueCallbackBeforeExpiry(() => {
              AuthApiService.postRefreshToken()
            })
            return res
          })
      },
      postRefreshToken() {
        return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
          method: 'POST',
          headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .then(res => {
            TokenService.saveAuthToken(res.authToken)
            UserService.saveUserInfo(res.userInfo)
            UserService.getUserSoaps(res.soapInfo)
            TokenService.queueCallbackBeforeExpiry(() => {
              AuthApiService.postRefreshToken()
            })
            return res
          })
          .catch(err => {
            console.log('refresh token request error')
            console.error(err)
          })
      },
      postUser(user) {
          return fetch(`${config.API_ENDPOINT}/users`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(user),
          })
          .then(res =>
            (!res.ok)
             ? res.json().then(e => Promise.reject(e))
             : res.json()
          )
      },
    }
    
    export default AuthApiService