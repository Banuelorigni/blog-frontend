<template>
  <div class="articlesList">
    <n-card class="mainContentPlace" :title="tagName" >
      <n-timeline>
        <n-timeline-item v-for="(article, i) in articles" :key="i" :title="article.title" :time="new Date(article.createdAt).toLocaleString()">
        </n-timeline-item>
      </n-timeline>
    </n-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      tagName:""
    };
  },
  created() {
    const tagId = this.$route.params.tagId;
    this.tagName = this.$route.query.tag || "";
    axios.get(`http://localhost:8080/tags/${tagId}`).then((response) => {
      this.articles = response.data;
    });
  },
};
</script>

<style>
.mainContentPlace {
  border-radius: 5px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
}

.n-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
}



.n-timeline-item {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.mainContentPlace .n-card-header{
  text-align: center;
}

.mainContentPlace .n-card-header__main{
  font-size: 40px;
}
</style>
