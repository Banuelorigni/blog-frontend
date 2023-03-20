<template>
  <n-card class="card">
    <n-space class="photo">
      <n-avatar
          round
          :size="80"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </n-space>
      <h1>Author Name</h1>
      <h3>slogan</h3>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: auto;

}

.button{
  width: 80%;
  align-self: center;
}
.link{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-link{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
