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
        流程管理
      </a-menu-item>
      <a-menu-item key="2" @click="menu2">
        <a-icon type="solution" />
        人员晋级
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
import Msg from "../Msg";

export default {
  name: "matchmanageleft",
  data(){
    return{
      id:'',
      current:'1',
      theme: 'dark',
    }
  },
  created() {

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
      Msg.$emit("val10","1")
    },
    menu2:function (){
      Msg.$emit("val10","2")
    }
  }
}
</script>

<style scoped>

</style>