<template>
    <div class="Banner">
        <Carousel autoplay>
            <Carousel-item>
                <div><img src="../assets/banner1.jpg"></div>
            </Carousel-item>
            <Carousel-item>
                <div><img src="../assets/banner1.jpg"></div>
            </Carousel-item>
            <Carousel-item>
                <div><img src="../assets/banner1.jpg"></div>
            </Carousel-item>
        </Carousel>
    </div>
</template>
<script>
    export default {
        name: "Banner",
        data() {
            return {
                /*  bannerData: [{ id: 1, src: "../assets/banner1.jpg" }, { id: 2, src: "../assets/banner2.jpg" }, { id: 3, src: "../assets/banner3.jpg" }] */
            }
        }
    }
</script>
<style>
    .Banner img {
        width: 100%;
    }
</style>