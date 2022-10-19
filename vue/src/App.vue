<template>
  <div id="app">
    <div class="container app-container">
      <div class="main">
        <div class="main-wrapper">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import pgHeader from './components/header.vue'
// import pgAside from './components/navigation.vue'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
  },
  mounted() {

  },
  methods: {


  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;

}

html,
body {
  width: 100%;
}

#app {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.app-container {}

.main {
  height: -webkit-calc(100% - 60px);
  display: flex;
  clear: both;
}

.main-wrapper {
  width: -webkit-calc(100vw - 250px);
  height: 100%;
  padding: 0 20px;
  flex: 1;
  box-sizing: border-box;
}
</style>
