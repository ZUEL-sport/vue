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
    <template >
      <a-descriptions class="team-data" title="团队成员信息" bordered >
        <a-descriptions-item label="队长" span="4">
          <span v-if="userRanks==='1'">{{list.userName}}</span>
        </a-descriptions-item>
        <a-descriptions-item label="成员">
          <p v-if="userRanks==='2'">
            <span v-for="item in list" :key="item.index">{{item.userName}}</span>
          </p>
        </a-descriptions-item>
      </a-descriptions>
    </template>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {myteam} from "@/api/user";
export default {
  name: "teamData",
  components: {PageHead},
  data(){
    return {
      teamNo:'',
      collapsed: false,
      theme:'light',
    };
  },
  created(){
    //获取队伍编号
    this.teamNo=this.$route.params.id;
  //  得到队伍里面成员的信息
    myteam(this.teamNo).then(res=>{
      this.list=res.data
    })
  },
  methods:{
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  }
}
</script>

<style scoped>
.team-data{
  padding: 50px;
  position: relative;
  width:50%;
  height:200px;
  left:350px;
  top:-100px;
}
</style>