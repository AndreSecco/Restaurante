<template>
  <div>
    <h1>Painel</h1>
    <Message :msg="msg" v-show="msg" />
    <div class="divRelatorio">
      <table class="table table-striped tablePrincipal">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>Pão</th>
            <th>Carne</th>
            <th>Adicionais</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in pedidos" :key="pedido.id">
            <td>{{ pedido.nome }}</td>
            <td>{{ pedido.pao }}</td>
            <td>{{ pedido.carne }}</td>
            <td>
              {{ pedido.adicionais }}
              <!-- <ul>
                <li style="text-align: left" v-for="(adicional, index) in pedido.adicionais" :key="index">
                  {{ adicional }}
                </li>
              </ul> -->
            </td>
            <td
              class="row"
              style="align-items: center; width: 100%; margin-left: 0px"
            >
              <div class="col-8">
                <select
                  name="selectStatus"
                  id="selectStatus"
                  class="form-select"
                  @change="atualizaPedido($event, pedido.id)"
                >
                  <option
                    v-for="s in status"
                    :key="s.id"
                    :value="s.tipo"
                    :selected="pedido.status == s.tipo"
                  >
                    {{ s.tipo }}
                  </option>
                </select>
              </div>
              <div class="col-4">
                <button class="btnCancelar" @click="deleteBurger(pedido.id)">
                  Cancelar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  <script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";
import Message from "./Message.vue";
export default {
  name: "Painel",
  setup() {
    return { collapsed, toggleSidebar };
  },
  data() {
    return {
      nomeCliente: null,
      pao: null,
      carne: null,
      adicionais: [],
      pedidos: null,
      status: [],
      msg: null,
    };
  },
  methods: {
    async getHamburgers() {
      const req = await fetch("http://localhost:3000/burgers");
      const data = await req.json();
      this.pedidos = data;
      this.adicionais = data.adicionais;
      //console.log(data);
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");
      const data = await req.json();
      this.status = data;
      //console.log(data)
    },
    async deleteBurger(id) {
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();
      this.getHamburgers();
      //Exibir Mensagem
      this.msg = `Pedido removido com sucesso`;

      //Limpa mensagem
      setTimeout(() => (this.msg = ""), 3500);
    },
    async atualizaPedido(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3000/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();
      //Exibir Mensagem
      this.msg = `Pedido N° ${ res.id } foi atualizado para ${res.status}`;

      //Limpa mensagem
      setTimeout(() => (this.msg = ""), 3500);
    },
  },
  mounted() {
    this.getHamburgers();
  },
  components: { Message },
};
</script>
  <style>
.btnCancelar {
  background-color: purple;
  color: #fff;
  border-radius: 11px;
  margin: 3px;
  border: none;
  height: 46px;
}
.btnAcoes {
  border: none;
  background: transparent;
  font-size: 19px;
}
.divRelatorio {
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 5%;
}
.tablePrincipal {
  width: 80%;
  border: 1px solid #f2f2f2;
}
</style>