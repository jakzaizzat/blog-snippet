import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./views/Home";
import Profile from "./views/Profile";
import Modal from "./views/Modal";
import ModalAdvanced from "./views/ModalAdvanced";
import Keyword from "./views/Keyword";

import MainLayout from "./layout/Main";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "/modal",
          name: "Modal Page",
          component: Modal
        },
        {
          path: "/modal-advanced",
          name: "Modal Advanced Page",
          component: ModalAdvanced
        },
        {
          path: "/profile",
          name: "Profile",
          component: Profile
        },
        {
          path: "/keyword",
          name: "Keyword",
          component: Keyword
        }
      ]
    }
  ]
});
