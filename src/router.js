import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "./views/Home"
import IdleTimer from "./views/IdleTimer";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: "/idle",
            name: "Idle Timer",
            component: IdleTimer
        }
    ]
})
