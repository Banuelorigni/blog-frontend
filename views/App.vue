<template>

  <n-config-provider :theme="theme">
    <body>
    <div id="app">
      <header>
        <n-h1>Blog Name</n-h1>
        <Menu/>
      </header>
      <main>
        <div class="side">
          <n-loading-bar-provider>
            <n-message-provider>
              <n-notification-provider>
                <n-dialog-provider>
                  <AuthorInfo/>
                  <Notice/>
                  <RecentUpdate/>
                </n-dialog-provider>
              </n-notification-provider>
            </n-message-provider>
          </n-loading-bar-provider>
        </div>
        <div class="board">
          <router-view></router-view>
        </div>
      </main>
    </div>
    </body>
  </n-config-provider>
</template>

<script>
import {defineComponent, ref, watch,watchEffect} from "vue";
import {darkTheme, lightTheme} from "naive-ui";
import AuthorInfo from "@/components/sideBar/Author-info.vue";
import Menu from "@/components/header/Menu.vue";
import Notice from "@/components/sideBar/Notice.vue";
import RecentUpdate from "@/components/sideBar/RecentUpdate.vue";
import Home from "./Home.vue";

export default defineComponent({
  name: "app",

  components: {Home, RecentUpdate, Notice, AuthorInfo, Menu},


  setup() {
    const theme = ref(lightTheme);

    const updateTheme = () => {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme.value = darkTheme;
      } else {
        theme.value = lightTheme;
      }
    };

    // 监听系统主题改变
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      updateTheme();
    });

    // 更新主题
    updateTheme();

    watch(theme, (newVal, oldVal) => {
      if (newVal !== oldVal) {
        console.log("theme changed");
      }
    });

    const currentTime = ref(new Date().toLocaleString());
    let timer = null;

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
  margin-right: 15px;
  margin-left: 15px;

}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7%;
  margin-right: 10%;
  margin-left: 10%;
  justify-content: center;
}


.side {
  grid-column: 1;
}

.board {
  grid-column: 2;
}

.card {
  border-radius: 2%;
  align-items: center;
  margin-bottom: 4%;
  width: 350px;
}


</style>
