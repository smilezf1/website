<template>
    <div class="headerspace">
        <!-- 导航开始 -->
        <div class="navigation">
            <div class="navigationContent">
                <div class="navigationContentLeft">
                    <img src="../assets/logo1.png">
                </div>
                <ul class="navigationContentMiddle">
                    <li :class="{active:currentIndex===index}" v-for='(item,index) in navData' :key="item.id"
                        v-on:mouseover="change(index)"><a href="javascript:;">{{item.name}}</a></li>
                </ul>
                <div class="navigationContentRight">

                </div>
            </div>
        </div>
        <!-- 导航结束 -->
    </div>
</template>
<script>
    export default {
        name: "Headerspace",
        data() {
            return {
                theme1: 'light',
                navData: [
                    { id: 1, name: "首页" },
                    { id: 2, name: "产品与服务" },
                    { id: 3, name: "关于我们" },
                    { id: 4, name: "联系我们" }
                ],
                currentIndex: 0
            }
        },
        methods: {
            change: function (index) {
                this.currentIndex = index;
            }
        }
    }
</script>
<style>
    .navigation {
        width:100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        height: 64px;
        padding:20px 0;
        box-sizing:border-box;
        background:#00b4db linear-gradient(to right, #00b4db, #0083b0);
    }

    .navigationContent {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

    }
   /*  50 24 */

    .navigationContentLeft {
        height: 100%;
    }
    .navigationContentLeft img{
        width:60px;
    }

    .navigationContentMiddle {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .navigationContentMiddle li {
        color: #fff;
        margin: 0 20px;
    }

    .navigationContentMiddle .active {
        /* color: #002BAD !important; */
    }

    .navigationContentMiddle li a {
        color: inherit;
        font-weight: 400;
        font-size: 20px;
    }
</style>