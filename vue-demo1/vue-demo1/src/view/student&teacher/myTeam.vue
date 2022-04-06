<template>
  <div class="page">
    <PageHead/>
    <div style="width:256px">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          :theme=theme
          :inline-collapsed="collapsed"
      >
        <a-menu-item key="1" @click="goToStudentData">
          <a-icon type="mail" />
          <span>个人信息</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="calendar" />
          <span>我的团队</span>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="card" >
      <a-card title="我的团队" :bordered="true" style="background:	#F0FFFF;width: 300px;padding:30px ;margin:50px;
    position: relative;left:230px; top:-150px; " size:default body-style="font-size:larger">
<!--        <template slot-scope="team">-->

          <span v-for="(value,index) in data" :key="index" >
            <a slot="team" @click="goToTeamData(value)">{{value.teamName}}</a>
          </span>

<!--        </template>-->
<!--        <p @click="goToTeamData(data)">长跑队</p>-->
      </a-card>
    </div>


  </div>

</template>

<script>
import PageHead from "@/components/PageHead";
import {myteam} from "@/api/user";
export default {

  name: "myTeam",
  components: {PageHead},
  data() {
    return {
      teamid:'',
      data:'',
      collapsed: false,
      theme:'light',
      id:'',
    };
  },
  mounted() {
    this.fetch()
  },
  created() {
    this.id=this.$route.params.id
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    goToStudentData(){
      this.$router.push({name:'student_data',params:{id:this.id}})
    },
    fetch(){
      myteam(this.id).then(res=>{
        console.log(res)
        if(res.code===0){
          this.data=res.data
        }else{
          console.log("获取失败")
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    goToTeamData(value){
      console.log("你需要注意这里")
      console.log(value.teamNo)
      this.$router.push({name:'teamData',params:{id:value.teamNo}})
      // this.$router.push('teamData'+e.id);
    }
  },
}
</script>

<style scoped>
a-card{

}
</style>