<template>
  <n-card class="card">
    <n-space class="photo" justify="space-evenly">
      <n-avatar
          round
          :size="150"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-space >
    <n-space class="info" justify="space-around">
      <n-h1 class="name">Author Name</n-h1>
      <n-h3 class="slogan">slogan/slogan/slogan/slogan/slogan</n-h3>
    </n-space>
    <n-space class="link" justify="space-evenly">
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
    <n-space class="icon-link" justify="space-evenly">
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

.button{
  width: 100%;
}
.link{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
.name{
  margin: 0;

}
.slogan{
  margin: 0;
}

.icon-link{
  margin: 10px;

}


</style>
