
<template>
    <div class=customer>
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
}
</style>


