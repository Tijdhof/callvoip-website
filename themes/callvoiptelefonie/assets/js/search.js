Vue.use(VueResource);

var content = '/ondersteuning/index.json';

var fuseOptions = {
  include: ["score","matches"],
  shouldSort: true,
  threshold: 0.70,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
      "title",
      "content",
      "searchtags",
      "blocks",
      "blocks.title",
      "blocks.content",
      "description",
      "items.title",
      "items.title.value",
      "items.description",
      "items.description.value"
  ]
}

const store = new Vuex.Store({
  modules: {
      i18n: vuexI18n.store
  }
})

new Vue({
  el: '#pagesearch',
  data: {
      fuse: false,
      filter: '',
      resultsOriginal: [],
      results: [],
  },

  computed: {

      filteredPosts () {
          this.results = this.copyObj(this.resultsOriginal)
          let fuseResults = new Fuse(this.results, fuseOptions).search(this.filter)
          let results = []
          Object.values(fuseResults).forEach(result => {
              results.push(result.item)
          })
          return results
      },
      getPosts () {
          this.results = this.copyObj(this.resultsOriginal)
          return (this.filter === '') ? this.results : this.filteredPosts
      }
  },
  created () {
      this.loadData()
  },
  watch: {
    filter: _.debounce(function () {
      if(this.filter.length == 0) {
        return;
      }
    }, 500)
  },
  methods: {
      namespace (object, path) {
          return path.split('.').reduce((value, index) => {
              return value[index]
          }, object)
      },
      setValue (object, path, newValue) {
          let paths = path.split('.')
          let count = 0
          paths.reduce((value, index) => {
              count++
              if (count >= paths.length) {
                  value[index] = newValue
              } else {
                  return value[index]
              }
          }, object)
      },
      copyObj (obj) {
          return JSON.parse(JSON.stringify(obj))
      },
      loadData () {
          this.$http.get(content).then(response => {
              this.results = this.copyObj(response.body)
              this.resultsOriginal = this.copyObj(this.results)
          })
      },


  }
})