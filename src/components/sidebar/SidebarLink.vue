<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed" style="text-align: left;">
        <slot />
      </span>
    </transition>
  </router-link>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";
export default {
  name: "SidebarLink",
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 1.3em;
  border-radius: 0.25em;
  height: 1.5em;

  color: #000;
  text-decoration: none;

  
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  /* background-color: var(--sidebar-item-active); */
  font-weight: bold;
  border-left: 7px solid purple;

}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>