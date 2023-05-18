<template>
  <n-card class="mainContentPlace" title="时间轴" >
    <n-timeline>
      <n-timeline-item v-for="(article, i) in articles" :key="i" :title="article.title" :time="new Date(article.createdAt).toLocaleString()">
      </n-timeline-item>
    </n-timeline>
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
    axios.get('http://35.76.37.16:8080/articles/all?size=999')
        .then(response => {
          this.articles = response.data.content;
        })
        .catch(error => {
          console.log(error);
        });
  }

});
</script>

<style>
.mainContentPlace {
  border-radius: 5px;

  width: 1000px;
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
