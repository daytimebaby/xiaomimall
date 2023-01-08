<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      phoneList: []
    }
  },
  mounted() {
    this.axios.get('/products', {
      params: {
        categoryId: 100012,
        pageSize: 14
      }
    }).then((res) => {
      res.list = res.list.slice(6, 14);
      this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
    })
  },
}
</script>

<style lang="scss">
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
</style>
