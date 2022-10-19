<template>
    <div class="pokemon-list">
        <pk-filter :list="filter_list_data" :filterlist="handlefilterlist" />
        <pk-list :total_list="list_data" />
    </div>
</template>
  
<script>
import pkFilter from '@/components/pkFilter.vue'
import pkList from '@/components/pkList.vue'
export default {
    name: 'pokemonlist',
    data() {
        return {
            limit: 1200,
            filter_list_data: [],
            list_data: [],
            cache_item_data: {},
            cache_list_data: {},

        }
    },
    components: {
        pkFilter,
        pkList,
    },
    mounted() {
        this.fetchTypeList();
        this.fetchList();
    },
    methods: {
        async fetchTypeList() {
            let { results } = await this.$req.getPokemonTypeList()
            this.filter_list_data = results
            for (let i = 0; i < this.filter_list_data.length; i++) {
                await this.fetchListByType(this.filter_list_data[i]['url'])
            }
        },
        async fetchList() {
            let { results } = await this.$req.getPokemonList({
                "limit": this.limit
            })
            this.list_data = results
            //cache the default list
            this.cache_list_data.default = this.list_data;
        },
        async fetchListByType(requestUrl) {
            let { name, pokemon } = await this.$req.getPokemonListByType(requestUrl)
            let results = pokemon.map((item, idx) => {
                return item.pokemon
            })
            //cache the result list
            this.cache_list_data[name] = results
        },
        async fetchListItems(name, requestUrl) {
            let temp_item;
            if (this.cache_item_data[name]) {
                //item in cache
                temp_item = this.cache_item_data[name]
            } else {
                //fetch data online 
                temp_item = await this.$req.getPokemonItem(requestUrl)
                this.cache_item_data[name] = temp_item
            }
            return temp_item
        },
        async handlefilterlist(filterItems) {
            if (!filterItems.length) {
                //no filter item , show default list
                this.list_data = this.cache_list_data.default
                return;
            }
            let temp_lists = [];

            for (let i = 0; i < filterItems.length; i++) {
                if (this.cache_list_data[filterItems[i]['name']]) {
                    //list in cache
                    temp_lists.push(this.cache_list_data[filterItems[i]['name']])
                } else {
                    // fetch data online 
                    let results = await this.fetchListByType(filterItems[i]['url'])
                    temp_lists.push(results)
                }
            }

            this.list_data = this.getInter(temp_lists)

        },
        getInter(list) {
            let intersection = list[0]
            list.forEach((item, index) => {
                if (index >= 1)
                    intersection = [...item].filter(x => [...intersection].some(y => y.name === x.name))
            })
            return intersection;

        },
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  