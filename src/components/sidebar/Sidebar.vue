<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="row sidebar-top">
      <span v-if="collapsed">
        <div class="col-3">
          <img src="../../../public/img/user.png" width="40" alt="" />
        </div>
      </span>
      <div class="row" v-else>
        <div class="col-3 img-user">
          <img src="../../../public/img/user.png" width="40" alt="" />
        </div>
        <div class="col-9" style="text-align: left">
          <p class="title">André Secco</p>
          <p class="subtitle">Programador Web</p>
        </div>
      </div>
    </div>
    <hr
      v-if="!collapsed"
      width="130px"
      style="margin-left: auto; margin-right: auto; color: purple"
    />
    <hr
      v-else
      width="30px"
      style="margin-left: auto; margin-right: auto; color: purple"
    />

    <p v-show="!collapsed"  class="menu-estatico">Geral</p>
    <SidebarLink to="/" icon="fas fa-home">Início</SidebarLink>
    <SidebarLink to="/sobre-projeto" icon="fas fa-file"
      >Sobre Projeto</SidebarLink
    >
    <SidebarLink to="/sobre-autor" icon="fas fa-user">Sobre Autor</SidebarLink>

    <p v-show="!collapsed" class="menu-estatico">Pedidos</p>
    <SidebarLink to="/pedidos" icon="fas fa-burger">Pedidos</SidebarLink>
    <SidebarLink to="/como-fazer" icon="fas fa-question"
      >Como Fazer?</SidebarLink
    >

    <p v-show="!collapsed"  class="menu-estatico">Relatórios</p>
    <SidebarLink to="/clientes" icon="fas fa-user">Clientes</SidebarLink>
    <SidebarLink to="/hamburguers" icon="fas fa-burger">Hambúrguers</SidebarLink>
    <SidebarLink to="/ingredientes" icon="fas fa-bacon" 
      >Ingredientes</SidebarLink
    >
    <div v-if="collapsed" class="col-3">
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-angle-double-left" />
      </span>
    </div>
    <div v-else class="row">
      <div class="col-3">
        <span
          class="collapse-icon"
          :class="{ 'rotate-180': collapsed }"
          @click="toggleSidebar"
        >
          <i class="fas fa-angle-double-left" />
        </span>
      </div>
      <div class="col-2 col-social">
        <i class="collapse-icon" :class="{ 'rotate-180': collapsed }"
          ><a class="social" target="_blank" href="https://www.instagram.com/andre_fsecco/"
            ><i class="fa-brands fa-instagram"></i></a
        ></i>
      </div>
      <div class="col-2 col-social">
        <i class="collapse-icon" :class="{ 'rotate-180': collapsed }"
          ><a class="social" target="_blank" href="https://www.linkedin.com/in/andr%C3%A9-secco-5209a0186/"
            ><i class="fa-brands fa-linkedin"></i></a
        ></i>
      </div>
      <div class="col-2 col-social">
        <i class="collapse-icon" :class="{ 'rotate-180': collapsed }"
          ><a class="social" target="_blank" href="https://github.com/AndreSecco"
            ><i class="fa-brands fa-github"></i></a
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state.js";
import SidebarLink from "./SidebarLink.vue";
export default {
  name: "Sidebar",
  props: {},
  components: {
    collapsed,
    toggleSidebar,
    sidebarWidth,
    SidebarLink,
  },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
<style>
:root {
  --sidebar-bg-color: #f4f4f4;
  --sidebar-item-hover: #eaeaea;
  --sidebar-item-active: #cfcfcf;
}
</style>
<style scoped>
.sidebar {
  color: rgb(60, 60, 60);
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: black;

  cursor: pointer;
  transition: 0.2 linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2 linear;
}
.sidebar-top {
  padding: 10px;
  align-items: center;
}
.title {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 0px;
}
.subtitle {
  margin-bottom: 0px;
  font-size: 12px;
}
.img-user {
  padding-left: 5px;
}
.menu-estatico {
  text-align: left;
  padding-left: 11px;
  margin: 10px 0px 1px;
  color: purple;
}
.social {
    color: #272727;
}
.col-social{
    margin-right: 3%;
}
</style>