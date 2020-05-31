<template>
    <div class="index">
    <!--  <Headerspace></Headerspace> -->
     <Banner></Banner>
    </div>
</template>
<script>
    import Headerspace from '@/components/Headerspace.vue'
    import Banner from '@/components/Banner.vue'
    export default{
        name:"Index",
        components:{Headerspace,Banner}
    }
</script>
<style>
    .index{
        width:100%;
    }
    
</style>