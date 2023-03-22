<template>

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
import { defineComponent } from "vue";
import AuthorInfo from "@/components/sideBar/Author-info.vue";
import Menu from "@/components/header/Menu.vue";
import Notice from "@/components/sideBar/Notice.vue";
import RecentUpdate from "@/components/sideBar/RecentUpdate.vue";

export default defineComponent({
  components: {RecentUpdate, Notice, AuthorInfo, Menu },

});
</script>
