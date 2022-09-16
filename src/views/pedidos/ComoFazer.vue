<template>
  <div>
    <h1>Como fazer Meu Pedido?</h1>
    <div class="col-12">
      <p class="mt-5 subtitulo-sobre">
        Para realizar seu pedido, basta acessar o menu chamado "Pedidos", insira
        seu nome,<br />
        o pão desejado, o tipo de carne preferido e caso desejar ingredientes
        adicionais.
      </p>
      <p class="mt-5 subtitulo-sobre">
        Clique em "Cadastrar" e seu pedido será direcionado para o menu "Painel"<br />
        onde poderá alterar o status ou realizar o cancelamento dele.
      </p>
    </div>
  </div>
</template>
<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";
export default {
  name: "ComoFazer",
  setup() {
    return { collapsed, toggleSidebar };
  },
};
</script>
<style scoped>
.subtitulo-sobre{
    font-size: 19px;
}
</style>