<template>

<body>
    <main>
      <div class="homeInfo">
        <n-card>
          <ul>
            <li v-for="(title, index) in info" :key="index">{{ title }}</li>
          </ul>
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
      info: ''
    }
  },
  mounted() {
    axios
        .get('https://fakestoreapi.com/products')
        .then(response => (
            this.info = response.data.map(product => product.description))

  )
  }
}
</script>
