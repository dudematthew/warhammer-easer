<script>
  import Navbar from './navbar/navbar.vue';
  import Tabs from './tabs/tabs.vue'

  export default {
    name: "App",
    components: { Navbar, Tabs },
  };
</script>

<template>

  <Navbar />

  <Tabs />

</template>