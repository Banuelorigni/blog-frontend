<template>
  <router-link to="/about">
  <n-button>click here</n-button>
  </router-link>
</template>

<script>
import Menu from "@/components/header/Menu.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {Menu}
})

</script>
