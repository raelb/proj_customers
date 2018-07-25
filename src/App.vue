<template>
  <div id="app">

      <div class="header">
        <button v-on:click="add_customer" class="button is-link" >Add a customer</button>
      </div>
      

      <customer v-for="i in customers.length" v-bind:index="i-1" :key="i" ></customer>

      <!-- <div v-for="i in 10" :key="i" >{{i}}</div> -->
      
      <!-- <customer index=0 ></customer>
      <customer index=1 ></customer>
      <customer index=2 ></customer>
      <customer index=3 ></customer> -->
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
  },
  methods: {
    add_customer(){
      this.customers.push({name: 'Pete'})
    }
  }
}
</script>

<style>
  .header {
    margin: 10px;
    margin-top: 20px;
  }
</style>
