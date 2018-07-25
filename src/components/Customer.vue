
<template>
    <div class=customer>
        <div class="close-button" v-on:click="close_click" >
            X
        </div>
        {{customers[index].name}}
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data: function(){
        return {
            
        }
    },
    props: ['index'],
    computed: {
        customers: function(){ return this.$store.state.customers },

        // ...mapState({
        //     customers: 'customers' // must be in quotes!
        // })
    },
    methods: {
        close_click(){
            this.$store.commit('removeItem', this.index)
        }
    }
}
</script>

<style scoped>
.customer {
    display: inline-block;
    width: 150px;
    height: 100px;
    background-color: lightpink;
    text-align: center;
    line-height: 100px;
    margin: 10px;
    position: relative;
}
.close-button {
    position: absolute;
    right: 0px;
    top: 0px;
    margin-right: 5px;
    padding: 5px;
    line-height: 20px;
    /* background-color: rebeccapurple; */
}
.close-button:hover {
    color: red;
    cursor: pointer;
}
</style>


