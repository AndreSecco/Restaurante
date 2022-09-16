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
    <div
      class="col-8 mt-3"
      style="justify-content: center; width: 100%; display: flex"
    >
      <div class="row">
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

        <div class="col mobile-icons">
          <img src="@/assets/icone-vue.png" alt="JavaScript" class="icons" />
        </div>
        <div class="col mobile-icons">
          <img src="@/assets/icone-json.png" alt="JavaScript" class="icons" />
        </div>
      </div>
    </div>
    <div class="col-12">
      <p class="mt-5 subtitulo-sobre">
        O conceito de Orientação a Objetos, S.O.L.I.D e o Design
        Patterns(Factory) foi utilizado neste projeto, <br />
        Tornando a construção mais ágil e com uma estruturá sólida de fácil
        manutenção. <br />
        Faça hambúrguers, veja relatórios e divirta-se<br />
        <a
          href="https://wa.me/5549998100407"
          target="_blank"
          class="btn btn-enviar mt-5"
          >Entrar em contato</a
        >
      </p>
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
.btn-enviar{
  background-color: rgb(96 8 96)!important;
    transition: 0.3s ease;
    color: #fff;
    padding: 12px 42px;
}

@media screen and (max-width: 920px) {
  .subtitulo-sobre {
    text-align: justify;
    margin: 4%;
    font-size: 16px;
  }
  .mobile-icons {
    margin-top: 12%;
  }
}
</style>