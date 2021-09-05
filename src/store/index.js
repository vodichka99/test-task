import { createStore } from "vuex";

export default createStore({
  state: {
    userData: null,
    isAuth: false,
    isInvited: false
  },
  mutations: {
    auth(state, user) {
      state.userData = user
      // console.log(user);
      state.isAuth = true
      state.isInvited = false
    },
    authError(state) {
      state.isAuth = false
    }
  },
  actions: {
    authUser(context) {
      // -------------------------------------------- ПРИМЕР FETCH ЗАПРОСА
      //   fetch('https://jsonplaceholder.typicode.com/users')
      //     .then(response => {
      //       response.json().then(res => {
      //         const user = res.find(item => item.name == data.name)
      //         context.commit('auth', user)
      //       })
      //     })
      //     .catch(err => {
      //       if(err) context.commit('authError')
      //     })
      const users = JSON.parse(localStorage.getItem('users'))
      const currentToken = localStorage.getItem('token')
      const user = users.find(item => item.token == currentToken)
      if (user && user.confirmed) {
        context.commit('auth', user)
      } else {
        context.commit('authError')
      }
    },
    addUser(context, { name, password }) {
      const users = JSON.parse(localStorage.getItem('users'))
      const randomNum = Math.round(Math.random() * 10000 / 10)
      // рандом работает странным образом: на 1к рандомное число не умножается, а на 10к умножается. При этом чтоб получить число,
      // умноженное на 1к, нужно вначале умножить его на 10к, а потом разделить на 10. Не знаю, почему так
      if (!users.find(item => item.name == name)) {
        users.push({ name, password, confirmed: false, token: randomNum })
        localStorage.setItem('users', JSON.stringify(users))
        localStorage.setItem('token', randomNum)
      }
    },
    confirmUser() {
      const users = JSON.parse(localStorage.getItem('users'))
      const token = localStorage.getItem('token')
      const user = users.find(item => item.token == token)
      user.confirmed = true
      localStorage.setItem('users', JSON.stringify(users))
    }
  },
  getters: {
    getUserName(state) {
      return state.userData?.name
    },
    getUserData(state) {
      return state.userData
    }
  },
  modules: {},
});
