import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/List'
import Mine from '@/pages/Mine'
import Contact from '@/pages/Contact'
import Register from '@/pages/Register'
import Login from '@/components/login'
import companyCulture from '@/pages/home/companyCulture'
import companyServe from '@/pages/home/companyServe'
import Detail from '@/pages/onesDetails/onesDetail'
import userInfo from '@/pages/user/userInfo'
import msgList from '@/pages/user/msgList'
import historyOrder from '@/pages/user/historyOrder'
import myLocation from '@/pages/user/myLocation'
import managementEvel from '@/pages/user/managementEvel'
import collect from '@/pages/user/collect'
import addEval from '@/pages/onesDetails/addEval'
import evalInfo from '@/pages/onesDetails/evalInfo'

Vue.use(Router);

export default new Router({
  mode: 'history',
  // hashbang: false, history: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      component: Home,
    },{
      path: '/Home/companyCulture',
      name:'companyCulture',
      component: companyCulture
    },{
      path: '/Home/companyServe',
      name:'companyServe',
      component: companyServe
    },{
      path: '/List',
      name: 'List',
      component: List
    },{
      path: '/Detail',
      name: 'Detail',
      component: Detail,
    },{
      path: '/addEval',
      name: 'addEval',
      component: addEval
    },{
      path: '/evalInfo',
      name: 'evalInfo',
      component: evalInfo
    },{
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },{
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },{
      path: '/Mine/userInfo',
      name: 'userInfo',
      component: userInfo
    },{
      path: '/Mine/collect',
      name: 'collect',
      component: collect
    },{
      path: '/Mine/historyOrder',
      name: 'historyOrder',
      component: historyOrder
    },{
      path: '/Mine/managementEvel',
      name: 'managementEvel',
      component: managementEvel
    },{
      path: '/Mine/myLocation',
      name: 'myLocation',
      component: myLocation
    },{
      path: '/Mine/msgList',
      name: 'msgList',
      component: msgList
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    },{
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
