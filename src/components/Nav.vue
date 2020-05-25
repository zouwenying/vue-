<template>
   <div class="navtop">
       <div class="title">后台管理系统</div>
       <div class="operation">
           <span>{{username}}</span>
           <span @click="logout">{{$t("languages.logout")}}</span>
       </div>
   </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    data(){
        return {

        }
    },
    methods:{
        logout(){
            localStorage.removeItem("token");
            this.$router.push('/login');
        }
    },
    computed:{
        ...mapState({
           username: state => state.username,
        })
    }

}

</script>

<style lang="scss" scoped>
.navtop{
    width: 100%;
    height: 60px;
    background-color: rgb(84, 92, 100);
    line-height: 60px;
    color:#ffffff;
    font-size: 16px;
    .title{
        float: left;
        margin-left:15px;
    }
    .operation{
        float:right;
        margin-right: 15px;
        span{
            margin:0 5px;
        }
    }
}

</style>