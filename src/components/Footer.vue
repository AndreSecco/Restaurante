<template>
  <div class="footer" :style="{ 'margin-left': sidebarWidth }">
    <p>Todos os direitos reservados @2022 - André Secco</p>
  </div>
</template>
  <script>
import { sidebarWidth } from "@/components/sidebar/state";

export default {
  name: "Footer",
  setup() {
    return { sidebarWidth };
  },
};
</script>
<style>
.footer {
  bottom: 0;
  position: absolute;
  left: 31%;
}
@media screen and (max-width: 920px) {
  .footer {
    width: 217px;
    margin-left: 0px!important;
    display: none;
  }
}
</style>