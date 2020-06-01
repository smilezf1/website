<template>
    <div class="index">
     <Headerspace></Headerspace>
     <Banner></Banner>
     <Main></Main>
    </div>
</template>
<script>
    import Headerspace from '@/components/Headerspace.vue'
    import Banner from '@/components/Banner.vue'
    import Main from '@/components/Main.vue'
    export default{
        name:"Index",
        components:{Headerspace,Banner,Main}
    }
</script>
<style>
    .index{
        width:100%;
    }
    
</style>