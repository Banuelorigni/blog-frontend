<template>
  <n-card class="card">
    <n-space justify="center" style="display: flex; align-items: center;" >
      <n-icon size="25"  style="margin-top: 4px">
        <timeIcon />
      </n-icon>
      <n-h2 style="margin-bottom: 0">
        最新文章
      </n-h2>
    </n-space>
    <n-space class="articles" >
      <n-list hoverable clickable >
        <n-list-item v-for="(article, index) in limitedArticles.slice(0,3)" :key="index" >
          <n-thing :title="`${article.title} `" content-style="margin-top: 5px; width: 100%;" >
            <div>{{ stripHtmlTags(article.content) }}</div>
          </n-thing>
        </n-list-item>
      </n-list>
    </n-space>
  </n-card>
</template>


<script>
import {TimerOutline as timeIcon} from "@vicons/ionicons5";
import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  components: {
    timeIcon
  },

  data() {
    return {
      articles: []
    };
  },
  mounted() {
    axios.get('http://localhost:8080/articles/all')
        .then(response => {
          this.articles = response.data.content;
        })
        .catch(error => {
          console.log(error);
        });
  },
  computed: {
    limitedArticles() {
      return this.articles.map(article => {
        const limitedContent = article.content.slice(0, 80);
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

});
</script>

<style>
.n-thing .n-thing-main .n-thing-header{
  justify-content: center;
}

</style>
