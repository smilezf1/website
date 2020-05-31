<template>
    <div class="headerspace">
        <!-- 导航开始 -->
        <div class="navigation">
            <div class="navigationContent">
                <div class="navigationContentLeft">
                    <img src="../assets/logo2.png">
                </div>
                <ul class="navigationContentMiddle">
                    <li :class="{select:currentIndex==index}" v-for='(item,index) in navData' :key="item.id"
                      @mouseover="changeColor(index)" @mouseout="regainColor()"><a href="javascript:;">{{item.name}}</a></li>
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
                    { id: 2, name: "安全产品" },
                    { id: 3, name: "安全服务" },
                    { id: 4, name: "关于我们" },
                    {id:5,name:"联系我们"}
                ],
                currentIndex:-1
            }
        },
        methods: {
           changeColor:function(index) {
               this.currentIndex=index;
            },
            regainColor:function(){
                this.currentIndex=-1;
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
        background:rgba(0,0,0,0.2);
    }

    .navigationContent {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;

    }
    .navigationContentLeft {
        height: 100%;
    }
    .navigationContentLeft img{
        width:200px;
        margin-top:-67px;
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
      .navigationContentMiddle .select{
          color:skyblue;
      }

    .navigationContentMiddle li a {
        color: inherit;
        font-weight: 400;
        font-size:14px;
    }
</style>