<template>
  <div class="filter-container">
    <div>Types:</div>
    <div>
      <el-button v-for="(item, index) in list" :type="item.selected?'primary':''" :key="index"
        @click="handlefilterlist(index, item.url)">{{item.name}}
      </el-button>
    </div>
  </div>




</template>

<script>
export default {
  name: 'pkFilter',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    handlefilterlist(index, requestUrl) {
      this.list[index].selected = !this.list[index].selected;
      this.filterItems = this.list.filter((item, index) => {
        return item.selected
      })
      this.filterlist(this.filterItems);
      this.$forceUpdate()
    }
  },
  props: ['list', 'filterlist']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.filter-container {
  display: flex;
}

.filter-container div:nth-of-type(1) {
  align-self: flex-start;
  margin: 1rem;
}

button {
  margin: 0.5rem;
}
</style>
