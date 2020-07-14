<template>
    <div class="index">
     <headerSpace></headerSpace>
     <Banner></Banner>
     <homePage></homePage>
     <footerSpace></footerSpace>
    </div>
</template>
<script>
    import headerSpace from '@/components/common/Headerspace.vue'
    import Banner from '@/components/Banner.vue'
    import homePage from '@/components/homePage.vue'
    import footerSpace from '@/components/common/Footerspace.vue'
    export default{
        name:"Index",
        components:{headerSpace,Banner,homePage,footerSpace}
    }
</script>
<style>
    .index{
        width:100%;
    }
    
</style>