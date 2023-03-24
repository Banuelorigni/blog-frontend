<template>

  <n-card v-for="(article, index) in limitedArticles" :key="index" :content-style="{padding:0}" class="mainContentPlace">
    <div class="homeInfo">
      <n-image height="270" width="450" :src="article.coverUrl" class="cover"></n-image>
      <n-space class="otherInfo" vertical>
        <n-h1 class="title">{{ article.title }}</n-h1>
        <n-space class="tag">
          <n-tag v-for="(tag, i) in article.tags" :key="i">{{ tag.name }}</n-tag>
        </n-space>
        <div>{{ stripHtmlTags(article.content) }}</div>

      </n-space>
    </div>
  </n-card>
  <n-pagination v-model:page="page" :page-count="totalPages"  @page-change="(newPage) => page = newPage" />
</template>

<style scoped>
.homeInfo {
  display: flex;
  flex-wrap: nowrap;
}

.mainContentPlace {
  width: 1000px;
  margin-bottom: 15px;
}

.cover {
  margin-right: 20px;
  box-sizing: border-box;
}

.title {
  margin-top: 5px;
  margin-bottom: 0;
}

.content{
  margin-right: 8px;
}

.otherInfo{
  padding: 15px;
}
</style>

<script>
import axios from "axios";
import {ref, watch} from "vue";

export default {
  name: 'Home',

  setup() {
    const articles = ref([]);
    const totalPages = ref(0);
    const pageNumber = ref(0);
    const page = ref(1);
    const loading = ref(false);

    function getPage(newPage) {
      loading.value = true;
      axios.get(`http://localhost:8080/articles?page=${newPage - 1}`)
          .then(response => {
            articles.value = response.data.content;
            totalPages.value = response.data.totalPages;
            pageNumber.value = response.data.number + 1;
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            loading.value = false;
          });
    }

    getPage(page.value);

    watch(page, newPage => {
      if (!loading.value) {
        getPage(newPage);
      }
    });

    return { articles, totalPages, pageNumber, page };
  },

  computed: {
    limitedArticles() {
      return this.articles.map(article => {
        const limitedContent = article.content.slice(0, 120);
        return {
          ...article,
          content: limitedContent
        };
      });
    }
  },

  methods: {
    stripHtmlTags(html) {
      const regex = /<[^>]*>/g;
      return html.replace(regex, '');
    }
  }

}
</script>
