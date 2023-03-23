<template>

  <n-card v-for="(article, index) in limitedArticles" :key="index" class="article">
    <div class="homeInfo">
      <n-avatar :size="200" :src="article.coverUrl" class="cover"></n-avatar>
      <n-space class="otherInfo" vertical>
        <n-h1 class="title">{{ article.title }}</n-h1>
      <n-space class="tag">
        <n-tag v-for="(tag, i) in article.tags" :key="i">{{ tag.name }}</n-tag>
      </n-space>
      <!-- 使用 v-html 指令，将 HTML 字符串转换为 HTML 元素，并渲染到页面 -->
      <div v-html="article.content" class="content"></div>
      </n-space>
    </div>
  </n-card>
</template>

<style scoped>
.homeInfo {
  margin-bottom: 4%;
  display: flex;
  flex-wrap: nowrap;
}

.article {
  width: 800px;
  margin-bottom: 15px;

}

.cover {
  margin-right: 20px;
  box-sizing: border-box;
  width: 200px;
  width: 200px;
}

.title {
  margin: 2px;
}


</style>

<script>
import axios from "axios";

export default {

  name: 'Home',
  data() {
    return {
      articles: []
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
  },
  computed: {
    limitedArticles() {
      return this.articles.map(article => {
        // 对每一篇文章的 content 进行截取
        const limitedContent = article.content.slice(0, 120);
        // 返回一个新的对象，包含截取后的 content
        return {
          ...article,
          content: limitedContent
        };
      });
    }
  },
}
</script>
