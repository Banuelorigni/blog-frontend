<template>
  <n-card class="card">
    <n-space class="photo">
      <n-avatar
          round
          :size="80"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-space>
      <n-h1>Author Name</n-h1>
      <n-h3>slogan/slogan/slogan/slogan/slogan</n-h3>
    <n-space class="link">
      <a href="https://www.runoob.com/">文章</a>
      <a href="https://www.runoob.com/">文章</a>
      <a href="https://www.runoob.com/">文章</a>
    </n-space>
    <n-button type="primary" color="#8a2be2" class="button">
      <template #icon>
        <n-icon >
          <LogoGithub/>
        </n-icon>
      </template>
      Follow me
    </n-button>
    <n-space class="icon-link">
      <a href="https://github.com/an9827">
        <n-icon size="25">
          <LogoGithub/>
        </n-icon>
      </a>
      <a href="https://github.com/an9827">
        <n-icon size="25">
          <Mail/>
        </n-icon>
      </a>
      <a href="https://github.com/an9827">
        <n-icon size="25">
          <LogoStackoverflow/>
        </n-icon>
      </a>
      <a href="https://github.com/an9827">
        <n-icon size="25">
          <LogoTwitter/>
        </n-icon>
      </a>
    </n-space>
  </n-card>
</template>

<script>
import {LogoGithub,Mail,LogoStackoverflow,LogoTwitter} from "@vicons/ionicons5";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    LogoGithub,Mail,LogoStackoverflow,LogoTwitter
  }
});
</script>

<style>
.card {
  border-radius: 2%;
  align-items: center;
  margin-bottom: 4%;
}

.button{
  width: 100%;
}
.link{
  justify-content: space-between;
  align-items: center;

  width: 100%;
}

.icon-link{
  width: 100%;
}

</style>
