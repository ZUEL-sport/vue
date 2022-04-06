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
        <a-icon type="calendar" />
        我的项目
      </a-menu-item>
      <a-menu-item @click="menu2">
        <a-icon type="user" />
        我的成绩
      </a-menu-item>
      <a-menu-item @click="menu3">
        <a-icon type="team" />
        团队成绩
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
import Msg from "../Msg";

export default {
  name: "MyProject-left",
  data(){
    return{
      id:'',
      current:'1',
      theme: 'dark',
    }
  },
  created() {
    this.id=this.$route.params.id
  },
  methods:{
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light';
    },
    handleClick(e) {
      console.log('click ', e);
      this.current = e.key;
    },
    menu1: function (){
      Msg.$emit("MailForMyProject1","1")
    },
    menu2:function (){
      Msg.$emit("MailForMyProject1","2")
    },
    menu3:function (){
      Msg.$emit("MailForMyProject1","3")
    }
  }
}


</script>

<style scoped>

</style>