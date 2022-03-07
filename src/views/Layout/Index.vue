<template>
  <div class="layout">
    <div class="layout-sidebar">
      <Sidebar />
    </div>
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
  },
};
</script>

<style scoped lang="scss">
</style>