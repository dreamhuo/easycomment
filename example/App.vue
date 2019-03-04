<template>
  <div id="app">
    <div v-if="showLanguage">222222222222221112222222</div>
    <button @click="toggleLanguage">切换显示</button>
    <easyComment :data="dataBase"></easyComment>
  </div>
</template>

<script type="text/ecmascript-6">
  import easyComment from '../src/index';
  export default {
    data() {
      return {
        showLanguage: true,
        dataBase: {
          name: '这是一个姓名'
        }
      }
    },
    components: {
      easyComment
    },
    computed: {
    },
    methods: {
      toggleLanguage() {
        this.showLanguage = !this.showLanguage
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">

</style>
