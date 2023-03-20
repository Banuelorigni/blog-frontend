<script setup>
import AuthorInfo from "@/components/Author-info.vue";
import Menu from "@/components/header/Menu.vue";</script>

<template>
  <p>当前时间：{{ currentTime }}</p>
  <n-config-provider :theme="theme">
    <header>
      <h1>Blog Name</h1>
      <Menu/>
    </header>


    <main>
      <div class="side">
        <n-loading-bar-provider>
          <n-message-provider>
            <n-notification-provider>
              <n-dialog-provider>
                <AuthorInfo/>
              </n-dialog-provider>
            </n-notification-provider>
          </n-message-provider>
        </n-loading-bar-provider>
      </div>
      <h1>qq</h1>
      <!--    <div class="wrapper">-->
      <!--      <HelloWorld msg="You did it!"/>-->
      <!--    </div>-->
    </main>
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
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 5px;
}

main {
  display: block;
  justify-content: space-between;

}
.side{
  width: 25%;
  position: fixed;
  top: 80px;  /* 或者适当的值，以保证 header 不会遮挡 side */
  bottom: 0;
  left: 0;
  margin: auto;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import { darkTheme, lightTheme } from "naive-ui";

export default defineComponent({
  setup() {
    const theme = ref(lightTheme);

    const now = new Date();
    if (now.getHours() >= 20 || now.getHours() < 6) {
      theme.value = darkTheme;
    }

    return {
      theme,
    };
  },

  data() {
    return {
      currentTime: new Date().toLocaleString(),
    };
  },

  mounted() {
    this.timer = setInterval(() => {
      this.currentTime = new Date().toLocaleString();

      // 在每次时间更新时检查当前时间是否需要更换主题
      const now = new Date();
      if (now.getHours() >= 20 || now.getHours() < 6) {
        this.theme = darkTheme;
      } else {
        this.theme = lightTheme;
      }
    }, 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },
});
</script>
