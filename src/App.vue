<template>
  <div>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout';
export default {
  components: {AppLayout},
  data() {
    return {};
  },
  computed: {
    layout() {
      return AppLayout;
    }
  },
};
</script>

<style lang="scss">

</style>
