<template>
  <n-card v-if="article" :title="article.title" class="article">
    <n-space class="articleInfo" style="justify-content: center">
      <n-h5>本篇字数：{{ article.wordNumbers }}</n-h5>
      <n-h5>发表于：{{ formatDate(article.createdAt) }}</n-h5>
    </n-space>
    <n-divider/>
    <div v-html="article.content"></div>
  </n-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      article: []
    };
  },
  created() {
    const articleId = this.$route.params.articleId;
    axios.get(`http://localhost:8080/articles/${articleId}`).then((response) => {
      this.article = response.data;
    });
  },
  methods: {
    formatDate(timeStamp) {
      const date = new Date(timeStamp );
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hour = ("0" + date.getHours()).slice(-2);
      const minute = ("0" + date.getMinutes()).slice(-2);
      const second = ("0" + date.getSeconds()).slice(-2);
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }
  }
};
</script>

<style>
.article {
  border-radius: 5px;
  padding: 1.5rem;
}

.article .n-card-header {
  text-align: center;
  padding: 0;
}

.article .n-card-header__main {
  font-size: 40px;
}


</style>
