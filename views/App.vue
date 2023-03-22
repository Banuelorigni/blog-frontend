<template>
  <n-config-provider :theme="theme">
  <div id="app">
    <header>
      <n-h1>Blog Name</n-h1>
      <Menu/>
    </header>
    <router-view></router-view>
  </div>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { darkTheme, lightTheme } from "naive-ui";

import Menu from "@/components/header/Menu.vue";



export default defineComponent({
  name: 'app',
  components: {Menu},

  setup() {
    const theme = ref(lightTheme);
    const currentTime = ref(new Date().toLocaleString());
    let timer = null;

    const changeTheme = () => {
      const now = new Date();
      if (now.getHours() >= 20 || now.getHours() < 6) {
        theme.value = darkTheme;
      }
    };
    changeTheme();

    watch(theme, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        console.log("theme changed");
      }
    });

    const updateCurrentTime = () => {
      currentTime.value = new Date().toLocaleString();
    };
    updateCurrentTime();
    timer = setInterval(updateCurrentTime, 1000);

    return { theme, currentTime, timer };
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
});

</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  margin-right: 5px;
  margin-left: 5px;

}
main{
  padding-left: 10%;
  padding-right: 10%;
  top: 60px;

}


</style>
