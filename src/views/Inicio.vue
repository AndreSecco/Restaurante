<template>
  <div class="home">
    <div class="banner">
      <h1 class="titulo-inicial">Seja Bem Vindo(a)</h1>
    </div>
    <div class="body-inicial">
      <p class="text-inicial">
        Ao sistema de pedidos online, desenvolvido para aprendizado e aplicação<br>
        de conhecimentos sobre as linguagens VueJs e JSON Serve.
      </p>
      <p class="text-inicial">Fico feliz com seu acesso 😄</p>
      <p class="text-inicial">
        Entre e faça hambúrgueres, veja relatórios e divirta-se.
      </p>
    </div>
    <div class="row w-100">
      <div class="col-6">
        <router-link to="/pedidos" class="btn-inicial btn"><i class="fas fa-burger"></i> Faça seu Pedido</router-link>
      </div>
      <div class="col-6">
        <router-link to="hamburguers" class="btn-inicial btn"><i class="fas fa-file"></i> Veja os Relatórios</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.titulo-inicial {
  font-size: 50px;
  color: #fff;
  font-weight: bold;
}
.banner {
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;

  height: 300px;
  background-size: cover;
  background-position: bottom;
  background-image: linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)),
    url('@/assets/banner01.jpg');
}
.body-inicial {
  margin-top: 50px;
  margin-bottom: 50px;
}
.text-inicial {
  font-size: 19px;
}
.btn-inicial {
  background-color: purple;
  color: #fff;
  padding: 10px 38px;
}
.btn:first-child:hover, :not(.btn-check)+.btn:hover {
  background-color: rgb(96 8 96)!important;
  transition: 0.3s ease;
  color: #fff;
  padding: 12px 42px;
}

@media screen and (max-width: 920px){
  .body-inicial{
    text-align: justify;
    margin: 11%;
  }
}
</style>