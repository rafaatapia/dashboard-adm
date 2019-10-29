import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      menu: true,
      icone: 'home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Clientes',
      icone: 'face',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Clientes.vue')
    },
    {
      path: '/compradores',
      name: 'Comprador',
      icone: 'store',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Comprador.vue')
    },
    {
      path: '/compradores/perfil',
      name: 'Novo comprador',
      component: () => import('./views/PerfilComprador.vue')
    },
    {
      path: '/compradores/perfil/:id',
      name: 'Editar comprador',
      component: () => import('./views/PerfilComprador.vue')
    },
    {
      path: '/entregadores',
      name: 'Entregador',
      icone: 'directions_car',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Entregadores.vue')
    },
    {
      path: '/ganhos',
      name: 'Ganhos',
      icone: 'attach_money',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Ganhos.vue')
    },
    {
      path: '/ganhos/novo',
      name: 'Novo ganho',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/NovoGanho.vue')
    },
    {
      path: '/leilao',
      name: 'Leilões',
      icone: 'mdi-gavel',
      menu: false,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Leilao.vue')
    },
    {
      path: '/monitoramento',
      name: 'Monitoramento',
      icone: 'picture_in_picture',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Monitoramento.vue')
    },
    {
      path: '/produtos',
      name: 'Produtos',
      icone: 'mdi-package-variant-closed',
      menu: true,
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Produtos.vue')
    },
    {
      path: '/produtos/editar/:id',
      name: 'Editar Produto',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/EditarProdutos.vue')
    },
    {
      path: '/entregadores/visualizar/:id',
      name: 'Perfil do Entregador',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/PerfilEntregador.vue')
    },
    {
      path: '/clientes/visualizar/:id',
      name: 'Perfil do Cliente',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/PerfilCliente.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (isLogado()) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})

function isLogado() {
  if (localStorage.getItem('login')) {
    return true
  }
  return false
}

export default router
