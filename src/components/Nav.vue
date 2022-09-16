<template>
  <div class="navbar">
    <router-link to="/">
      <img
        src="../../public/img/logo-preta.png"
        alt="logo"
        width="150"
        id="logo"
      />
    </router-link>
    <div class="links-menu">
      <router-link class="link-navbar" to="/">Início</router-link>
      <router-link class="link-navbar" to="/sobre-projeto">Sobre</router-link>
      <router-link class="link-navbar" to="/pedidos">Peça aqui</router-link>
      <router-link class="link-navbar" to="/hamburguers"
        >Relatórios</router-link
      >
      <router-link class="link-navbar" to="/painel">Painel</router-link>
    </div>

    <div class="links-menu-mobile">
      <router-link class="link-navbar" to="/painel">Painel</router-link>
    </div>
  </div>
</template>
  <script>
export default {
  name: "NavBar",
  data(){
    return{
      linksMenu: true
    }
  },
  methods:{
    mobileMenu(){
      if(window.screen.width < 920){
        this.linksMenu = !this.linksMenu
      }
    }
  },
  mounted() {
    this.mobileMenu()
  }
};
</script>
  <style>
.navbar {
  justify-content: space-between;
  padding: 0px;
}
.links-menu {
  padding-right: 30px;
}
.link-navbar {
  text-decoration: none;
  padding: 0px 16px;
  color: #000;
}
.links-menu-mobile{
   display: none; 
  }

@media screen and (max-width: 920px) {
  .links-menu {
    display: none;
  }
  .links-menu-mobile{
    display: block;
  }
  .btn-inicial {
    padding: 8px 14px !important;
  }
}
</style>