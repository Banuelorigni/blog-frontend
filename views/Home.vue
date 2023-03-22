<template>
  <n-config-provider :theme="theme">
    <header>
      <n-h1>Blog Name</n-h1>
      <Menu/>
    </header>

<body>
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

    </main>
</body>
  </n-config-provider>
</template>

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

.side{
  display: block;
  position: relative;
}

</style>

<script>
import { defineComponent, ref, watch } from "vue";
import AuthorInfo from "@/components/sideBar/Author-info.vue";
import Menu from "@/components/header/Menu.vue";
import { darkTheme, lightTheme } from "naive-ui";
import Notice from "@/components/sideBar/Notice.vue";
import RecentUpdate from "@/components/sideBar/RecentUpdate.vue";

export default defineComponent({
  components: {RecentUpdate, Notice, AuthorInfo, Menu },

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
