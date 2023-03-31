<template>
  <n-card v-if="article" :title="article.title" class="article">
    <n-space class="articleInfo" style="justify-content: center">
      <n-h5>本篇字数：{{ article.wordNumbers }}</n-h5>
      <n-h5>发表于：{{ formatDate(article.createdAt) }}</n-h5>
    </n-space>
    <n-divider/>
    <div v-html="article.content" style="margin-bottom: 1.5rem"></div>
    <n-divider/>
    <n-h2 style="font-size: 35px;">评论</n-h2>
    <n-card v-for="(comment,index) in comments" :key="index" class="comment">
      <n-h4 >{{ comment.userName }}</n-h4>
      {{ comment.content }}
    </n-card>
    <n-pagination v-model:page="page" :page-count="totalPages" @page-change="(newPage) => page = newPage"/>
  </n-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      article: [],
      comments:[],
      totalPages:0,
      pageNumber:0,
      page:1,
      loading:false
    };
  },
  created() {
    const articleId = this.$route.params.articleId;
    axios.get(`http://localhost:8080/articles/${articleId}`)
        .then(response => {
          this.article = response.data;
        });
    const getPage = (newPage) => {
      this.loading = true;
      axios.get(`http://localhost:8080/comments/${articleId}?page=${newPage - 1}`)
          .then(response => {
            this.comments = response.data.content;
            this.totalPages = response.data.totalPages;
            this.pageNumber = response.data.number + 1;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
          });
    }
    getPage(this.page);
    this.$watch('page', newPage => {
      if (!this.loading) {
        getPage(newPage);
      }
    });
  },

  methods: {
    formatDate(timeStamp) {
      const date = new Date(timeStamp);
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

.comment {
  margin: 5px 0;
}

</style>
