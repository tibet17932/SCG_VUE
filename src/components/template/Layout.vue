<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Footer></Footer>
      <ContentWrap></ContentWrap>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer'
import ContentWrap from './ContentWrap'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    'Header': Header,
    'Footer': Footer,
    'ContentWrap': ContentWrap,
  }
}
</script>

<style>

</style>
