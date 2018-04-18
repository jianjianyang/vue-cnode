import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/topics/HelloWorld'
import about from '@/components/nav/about'
import api from '@/components/nav/api'
import getstart from '@/components/nav/getstart'
import signin from '@/components/nav/signin'
import signup from '@/components/nav/signup'
import tab from '@/components/topics/tab'
import create from '@/components/topics/create'
import user from '@/components/user/user'
import topics from '@/components/user/topics'
import replies from '@/components/user/replies'
import collections from '@/components/user/collections'
import messages from '@/components/messages/messages'
import edit from '@/components/topics/edit'





Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '//:id?',
          component:HelloWorld,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/api',
      name: 'api',
      component: api
    },
    {
      path: '/getstart',
      name: 'getstart',
      component: getstart
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/topic/:userId?',
      name: 'tab',
      component:tab
    },
    {
      path: '/user/:userId?',
      name: 'user',
      component:user
    },
    {
      path: '/user/:userId?/topics',
      name: 'topics',
      component:topics
    },
    {
      path: '/user/:userId?/replies',
      name: 'replies',
      component:replies
    },
    {
      path: '/topic/:userId?/edit',
      name: 'edit',
      component:edit
    },
    {
      path: '/user/:userId?/collections',
      name: 'collections',
      component:collections
    },
    {
      path: '/create',
      name: 'create',
      component:create
    },
    {
      path: '/my/messages',
      name: 'messages',
      component:messages
    },

  ]
})
