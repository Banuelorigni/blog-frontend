<template>
  <n-card class="card">
    <n-h2>
      <n-icon>
        <timeIcon/>
      </n-icon>
      最新文章
    </n-h2>
    <n-space class="articles">
      <n-list hoverable clickable>
        <n-list-item>
          <n-thing title="docker1" content-style="margin-top: 5px;">
            docker<br>
            docker
          </n-thing>
        </n-list-item>
        <n-list-item>
          <n-thing title="docker2" content-style="margin-top: 5px;">
            docker2<br>
            docker2
          </n-thing>
        </n-list-item>
        <n-list-item>
          <n-thing title="docker3" content-style="margin-top: 5px;">
            docker3<br>
            docker3
          </n-thing>
        </n-list-item>
      </n-list>
    </n-space>
  </n-card>
</template>



<script>
import {TimerOutline as timeIcon} from "@vicons/ionicons5";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    timeIcon
  }
});
</script>
