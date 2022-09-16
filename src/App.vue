<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Sidebar, Nav, Footer },
  setup() {
    return { sidebarWidth };
  },
};
</script>
  <template>
  <div>
    <Sidebar />
    <div id="principal" :style="{ 'margin-left': sidebarWidth }">
      <Nav />
      <router-view style="max-height: 100vh; overflow-x: auto;" />
      <Footer />
    </div>
  </div>
</template>
  
  <style>
@media screen and (max-width: 920px) {
  #principal{
    margin-left: 70px!important;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>