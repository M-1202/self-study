<template>
    <div class="demo">
        <h1>学校名称:{{ name }}</h1>
        <h1>学校地址:{{ address }}</h1>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return{
                name:'河师大',
                address:'New York'
            }
        }
    }
</script>

<style>

</style>