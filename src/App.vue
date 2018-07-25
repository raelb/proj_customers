<template>
  <div id="app">

      <div v-for="cust in customers">{{cust.name}}</div>
      <customer></customer>
  </div>
</template>

<script>
import customer from './components/customer.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
      //info: function(){ return this.$store.state.product_list }
      ...mapState({
          customers: 'customers' // must be in quotes!
      })
  },
  components: {
    customer
  }
}
</script>

<style>

</style>
