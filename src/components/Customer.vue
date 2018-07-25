
<template>
    <div class=customer>
        {{name}}
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            name: 'John'
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
}
</style>


