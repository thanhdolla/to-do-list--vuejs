import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
    // bo dau # tren link
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        },
    ]
})