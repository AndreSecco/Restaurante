<template>
  <div>
    <h1>Sobre o Projeto</h1>
    <div class="col-12">
      <p class="mt-5 subtitulo-sobre">
        Olá, este projeto foi desenvolvido para aprendizado e apliacação do
        VueJs, <br /> juntamente com um servidor backend(fake) em JSON Server.
      </p>
    </div>
    <div class="col-12 row">
        <div class="col-2"><img src="" alt=""></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";
export default {
  name: "SobreProjeto",
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>
<style scoped>
.subtitulo-sobre {
  font-size: 21px;
}
</style>