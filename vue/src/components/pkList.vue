<template>
  <div>
    <div class="count-bar">{{count}} results found.</div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" v-for="(item, index) in page_list">
        <div class="img">
          <img :src="item.imgUrl" alt="" v-show="item.imgUrl" />
        </div>
        <div>{{item.name}}</div>
      </el-col>
    </el-row>
    <div class="btn-wrapper">
      <el-button type="primary" :disabled="page_index==0" @click="toPrev">Prev</el-button>
      <el-button type="primary" :disabled="page_index == (page_total-1)" @click="toNext">Next</el-button>
    </div>
  </div>




</template>

<script>
export default {
  name: 'pkList',
  data() {
    return {
      page_size: 48,
      page_index: 0,
      page_total: 0,
      page_list: [],
      count: 0,


    }
  },
  mounted() {

  },
  watch: {
    "total_list": {
      handler(val, oldValue) {
        val = val || []
        this.count = val.length;
        this.page_index = 0;
        this.page_total = Math.ceil(this.count / this.page_size) || 1;
        this.refreshList()
      },
    },

  },
  methods: {
    async refreshList() {
      this.page_list = [];
      for (let i = 0; i < this.total_list.length; i++) {
        if ((i >= this.page_index * this.page_size) && (i < this.page_size * (this.page_index + 1))) {
          //let { name, sprites } = await this.$parent.fetchListItems(this.total_list[i].name, this.total_list[i].url)
          this.page_list.push({ name: this.total_list[i].name, imgUrl: '' })
          this.$parent.fetchListItems(this.total_list[i].name, this.total_list[i].url).then(({ name, sprites }) => {
            let item = this.page_list.filter((item) => {
              return item.name == this.total_list[i].name
            })
            item[0].imgUrl = sprites.other['official-artwork'].front_default;
          })

        }
      }

    },
    toPrev() {
      if (this.page_index == 0) return;
      this.page_index--;
      this.refreshList()

    },
    toNext() {
      if (this.page_index == this.page_total - 1) return;
      this.page_index++;
      this.refreshList()
    }
  },
  props: ['total_list']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
}

.img img {
  max-width: 100%;
}



.el-col {
  text-align: center;
  padding: 1rem;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
}
</style>
