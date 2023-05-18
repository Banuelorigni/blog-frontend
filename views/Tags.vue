<template>
  <n-card class="mainContentPlace" title="Tags">
    <n-space>
      <n-tag v-for="(tags, index) of tags" :key="index" @click="getArticlesByTag(tags.id,tags.name)">{{ tags.name }}</n-tag>
    </n-space>
  </n-card>
</template>

<script>
import axios from "axios";
import {defineComponent} from "vue";

export default defineComponent({

  data() {
    return {
      tags: [],
      articles:[]
    };
  },
  mounted() {
    axios.get('http://localhost:8080/tags/all')
        .then(response => {
          this.tags = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  },
  methods: {
    getArticlesByTag(tagId,tagName) {
      this.$router.push({
        name:"TagArticles",
        path:`/tags/${tagId}`,
        params:{tagId},
        query: {tag: tagName},
      })
    },
  },
});

</script>

<style>
.mainContentPlace .n-card-header {
  text-align: center;
}

.mainContentPlace .n-card-header__main {
  font-size: 40px;
  font-weight: bolder;
}
</style>
