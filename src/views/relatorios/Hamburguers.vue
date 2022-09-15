<template>
  <div>
    <h1>Todos os Hambúrguers Feitos</h1>
    <div class="divRelatorio">
      <table class="table table-striped tablePrincipal">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>Pão</th>
            <th>Carne</th>
            <th>Adicionais</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pedido in pedidos" :key="pedido.id">
            <td>{{ pedido.nome }}</td>
            <td>{{ pedido.pao }}</td>
            <td>{{ pedido.carne }}</td>
            <td>{{ pedido.adicionais }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { collapsed, toggleSidebar } from "@/components/sidebar/state";
export default {
  name: "Hamburguers",
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
    };
  },
  methods: {
    async getHamburgers() {
      const req = await fetch("http://localhost:3000/relatorio-burgers");
      const data = await req.json();
      this.pedidos = data;
      console.log(data);
    },
  },
  mounted() {
    this.getHamburgers();
  },
};
</script>
<style>
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