<template>
  <div>
    <h1>Sobre o Projeto</h1>
    <div class="col-12">
      <p class="mt-5 subtitulo-sobre">
        Olá, este projeto foi desenvolvido para aprendizado e apliacação do
        VueJs, <br />
        juntamente com um servidor backend(fake) em JSON Server.
      </p>
    </div>
    <h2 class="mt-5">Tecnologias Aplicadas</h2>
    <div class="col-8 mt-3" style="justify-content: center; width: 100%; display: flex;">
      <div class="row" >
        <div class="col">
          <img
            src="@/assets/icone-javascript.png"
            alt="JavaScript"
            class="icons"
          />
        </div>
        <div class="col">
          <img src="@/assets/icone-html.png" alt="JavaScript" class="icons" />
        </div>
        <div class="col">
          <img
            src="@/assets/icone-bootstrap.png"
            alt="JavaScript"
            class="icons"
          />
        </div>
        <div class="col">
          <img src="@/assets/icone-vue.png" alt="JavaScript" class="icons" />
        </div>
        <div class="col">
          <img src="@/assets/icone-json.png" alt="JavaScript" class="icons" />
        </div>
      </div>
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
.icons {
  width: 80px;
}
</style>