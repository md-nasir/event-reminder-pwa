<template>
  <div>
    <AppHeader/>
    <div class="content">
      <slot></slot>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default {
  name: 'AppLayout',
  components:{ AppHeader, AppFooter },
}
</script>
<style>
.content{
  min-width:100%;
  min-height:100vh;
}
</style>
