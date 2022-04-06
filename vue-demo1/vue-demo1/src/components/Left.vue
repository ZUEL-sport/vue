<template>
  <div>
    <a-switch
        default-checked
        checked-children="dark"
        un-checked-children="light"
        @change="changeTheme"
    />
    <a-menu
        style="width: 34vh"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        :theme="theme"
        :selected-keys="[current]"
        @click="handleClick"
    >
      <a-menu-item key="1" @click="menu1">
        <a-icon type="mail" />
        项目详情
      </a-menu-item>
      <a-sub-menu key="sub1" @click="projectresult">
        <span slot="title"><a-icon type="appstore" /><span>项目结果</span></span>

        <a-menu-item v-for="(value,index) in match"  :key="index" @click="choose(index,value)" >{{value}}</a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>

</template>
<script>
import Msg from "./Msg";
// import {more, result} from "@/api/user";

// import {MatchResult} from "@/api/user";

export default {
  name: "Left",
  created() {
    this.projectId=this.$route.params.id
  },
  data() {
    return {
      match:['初赛','复赛','决赛'],
      current: '1',
      theme: 'dark',
      data:undefined,
      projectId:''
    }

  },
  prop:['id'],
  methods: {
    handleClick(e) {
      console.log('click ', e);
      this.current = e.key;
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
    menu1: function (){
      this.$emit('transfermatch',this.match)
      Msg.$emit("val","1");
      // let data={projectId:this.projectId}
      // more(data).then(res=>{
      //   console.log(res)
      //   console.log(res.data)
      //   const data1=res.data
      //   this.$emit('tranferdata1',data1)
      // })
    },
    choose:function (index,value){
      const i=index+2
      Msg.$emit("val",i)
      console.log(value)
      // MatchResult(value).then(res=>{
      //   console.log(res)
      //   console.log(res.data)
      //   this.data=res.data
      //   this.$emit('tranferdata',this.data)
      //
      //
      // })

    },
    // projectresult:function (){
    //   result(this.id).then(res=>{
    //     console.log(res)
    //     console.log(res.data)
    //     this.match=res.data
    //   })
    //
    //
    // },



  },
};
</script>
