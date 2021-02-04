<template>
  <div class="container-fluid">
      <AppHeader/>
      <ejemplo-post/>
      <AppFooter/>
  </div>
</template>

<script>
import EjemploPost from './components/Post'
import AppHeader from './components/Header'
import AppFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    EjemploPost,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>
