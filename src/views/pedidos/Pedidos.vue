<template>
  <div>
    <h1>Faça seu Pedidos</h1>

    <Message :msg="msg" v-show="msg" />
    <form id="burger-form" @submit="createBurger">
      <div class="form-burger row col-12">
        <div class="input-container col-12">
          <div class="inputBox">
            <input
              type="text"
              v-model="nome"
              name="nome"
              id="nome"
              class="inputUser"
              required
            />
            <label for="nome" class="labelInput">Seu Nome</label>
          </div>
        </div>
        <div class="col-sm-6 col-12 banner-ingrediente banner-pao">
          <h6 class="titulo-banner">Escolha seu Pão</h6>
          <select name="pao" id="pao" v-model="pao" class="form-select">
            <option value="">Selecione o seu pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>
        <div class="col-sm-6 col-12 banner-ingrediente banner-carnes">
          <h6 class="titulo-banner">Escolha suas carnes</h6>
          <select name="carne" id="carne" v-model="carne" class="form-select">
            <option value="">Escolha o tipo carnes</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>
        <div class="col-12 mt-4 mb-4">
          <h6 class="subtitulo-opcionais">Opcionais</h6>
          <div class="row">
            <div
              v-for="opcional in opcionaisdata"
              :key="opcional.id"
              class="checkbox-container col-4 mb-1"
              style="text-align: left"
            >
              <input
                type="checkbox"
                name="opcionais"
                v-model="opcionais"
                :value="opcional.tipo"
              />
              <span>{{ opcional.tipo }}</span>
            </div>
          </div>
        </div>
        <div class="col-12" style="text-align: right">
          <input type="submit" class="btn btn-enviar" value="Cadastrar" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";
import Message from "./Message.vue";
export default {
  name: "Pedidos",
  setup() {
    return { collapsed, toggleSidebar };
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: "Solicitado",
      msg: null,
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("https://my-json-server.typicode.com/AndreSecco/db_restaurante/ingredientes");
      const data = await req.json();
      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurger(e) {
      e.preventDefault();
      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne,
        adicionais: Array.from(this.opcionais),
        status: "Aguardando",
      };
      const dataJson = JSON.stringify(data);

      //Inserindo no relatório
      const reqRel = await fetch("https://my-json-server.typicode.com/AndreSecco/db_restaurante/relatorio-burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      //Inserindo na tabela de hamburgers
      const req = await fetch("https://my-json-server.typicode.com/AndreSecco/db_restaurante/burgers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      //console.log(res);

      //Exibir Mensagem
      this.msg = `Obrigado ${res.nome} seu pedido está a caminho - N° ${res.id}`;

      //Limpa mensagem
      setTimeout(() => (this.msg = ""), 3500);

      //Limpar os campos
      this.nome = "";
      this.pao = "";
      this.carne = "";
      this.opcionais = [];
    },
  },
  mounted() {
    this.getIngredientes();
  },
  components: { Message },
};
</script>

<style scoped>
@media screen and (max-width: 920px) {
  .checkbox-container {
    width: 100%;
  }
}
.checkbox-container {
  display: flex;
  align-items: center;
}
.btn-enviar {
  background-color: purple;
  color: #fff;
  padding: 10px 38px;
}
.btn-enviar:hover {
  background-color: rgb(96 8 96) !important;
  transition: 0.3s ease;
  color: #fff;
  padding: 12px 42px;
}
.titulo-banner {
  text-align: left;
  font-size: 26px;
  color: #fff;
}
.banner-pao {
  background-image: linear-gradient(rgb(0 0 0 / 45%), rgb(0 0 0 / 45%)),
    url("@/assets/pao-wallpaper.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 25px;
}
.banner-carnes {
  background-image: linear-gradient(rgb(0 0 0 / 45%), rgb(0 0 0 / 45%)),
    url("@/assets/carnes-wallpaper.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 25px;
}
.banner-ingrediente {
  padding: 5%;
  margin-top: 2%;
  border: 3px solid #fff;
}
.inputUser {
  border: 2px solid #d3d3d3;
  border-radius: 20px;
  padding: 10px;
  color: #212529;
  width: 100%;
  text-align: left;
}
.inputBox {
  position: relative;
  margin-top: 10px;

  width: 100%;
}

.labelInput {
  position: absolute;
  top: 10px;
  left: 10px;
  pointer-events: none;
  transition: 0.5s;
  font-weight: 500 !important;
  font-size: 17px;
}
.inputUser:focus ~ .labelInput,
.inputUser:valid ~ .labelInput {
  top: -27px;
  font-size: 15px !important;
  color: purple;
  left: 8px !important;
}
.input-container {
  margin-top: 40px;
}
.form-burger {
  justify-content: center;
  display: flex;
  padding: 0% 17%;
}
.subtitulo-opcionais {
  font-size: 26px;
  text-align: left;
}
</style>