//引入多个路由文件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//暴露出一个routes的数组
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/login',
        component: Login,
        meta: { //可以定义属性 是路由提供的
            isFooterHide: true //隐藏footer组件 这个方法登陆注册需要 这也是路由传递参数的一种方式
        }
    },
    {
        path: '/register',
        component: Register,
        meta: { //可以定义属性 是路由提供的
            isFooterHide: true //隐藏footer组件 这个方法登陆注册需要
        }
    },

    //重定向
    {
        path: '/',
        redirect: '/'
    }
]