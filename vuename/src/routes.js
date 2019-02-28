/**
 * Created by dell on 2019/2/28.
 */
import Home from './components/Home';
import NotFound from './components/404'
import Main from './components/Main'
import Index from './components/index/index'
import Form from './components/nav1/Form'
import Table from './components/nav1/Table'
import list from './components/nav1/list'
import tab from './components/nav2/tab'
import tips from './components/nav3/tips'
import bar from './components/echarts/bar'
import ball from './components/echarts/ball'
let routes = [
  {
    path: '/main',
    component: Main,
    name:'主页'
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true
  },
  {
    path: '/',
    name: '表单',
    component: Home,
    children:[
      {
        path: '/',
        component: Index,
        name:'首页',
      },
      {
        path:'/Form',
        component:Form,
        name:'表单',
      },
      {
        path:'/Table',
        component:Table,
        name:'表格',
      },
      {
        path:'/list',
        component:list,
        name:'列表',
      }
    ],
    beforeEnter:(to,form,next) =>{
      console.log('进入前执行')
      next()
    }
  },
  {
    path: '/',
    name: '选项卡',
    component: Home,
    children:[
      {
        path:'/tab',
        component:tab,
        name:'选项卡',
      }
    ],
    beforeEnter:(to,form,next) =>{
      console.log('进入前执行')
      next()
    }
  },
  {
    path: '/',
    name: '弹窗',
    component: Home,
    children:[
      {
        path:'/tips',
        component:tips,
        name:'弹窗',
      }
    ],
    beforeEnter:(to,form,next) =>{
      console.log('进入前执行')
      next()
    }
  },
  {
    path: '/',
    name: 'echarts',
    component: Home,
    children:[
      {
        path:'/bar',
        component:bar,
        name:'柱状图',
      },
      {
        path:'/ball',
        component:ball,
        name:'GL图',
      },
    ],
    beforeEnter:(to,form,next) =>{
      console.log('进入前执行')
      next()
    }
  },
  {
    path:'*',
    hidden:true,
    redirect: {path:'/404'}
  }
]

export default routes;

