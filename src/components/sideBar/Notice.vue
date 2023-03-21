<template>
  <n-card class="card">
    <n-h2>
      <n-icon color="red">
        <noticeIcon/>
      </n-icon>
      公告
    </n-h2>
    <n-h4>infoinfoinfo</n-h4>
  </n-card>
</template>



<script>
import {MegaphoneOutline as noticeIcon} from "@vicons/ionicons5";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    noticeIcon
  }
});
</script>
