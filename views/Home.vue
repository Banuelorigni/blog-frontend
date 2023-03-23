<template>

<body>
    <main>
      <div class="homeInfo">
        <n-card v-for="(article, index) in articles" :key="index" class="article">
          <!-- 使用 v-html 指令，将 HTML 字符串转换为 HTML 元素，并渲染到页面 -->
          <div v-html="article.content"></div>
        </n-card>
      </div>
    </main>
</body>
</template>

<style scoped>
.homeInfo{
  margin-bottom: 4%;
  top: 60px;

}

</style>

<script>
import axios from "axios";
export default {

  name: 'Home',
  data() {
    return {
      articles: [], // 定义一个数组，用于存储文章列表
    };
  },
  mounted() {
    axios.get('http://localhost:8080/articles')
        .then(response => {
          // 将获取到的文章数据存储到组件的数据中
          this.articles = response.data.content;
        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>
