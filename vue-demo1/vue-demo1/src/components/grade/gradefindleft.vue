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
        成绩查询
      </a-menu-item>
      <a-menu-item @click="menu2">
        <a-icon type="solution" />
        成绩修改
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
import Msg from "../Msg";

export default {
  name: "gradefindleft",
  data(){
    return{
      current:'1',
      theme: 'dark',
    }
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
      Msg.$emit("gradeval1","1")
    },
    menu2:function (){
      Msg.$emit("gradeval1","2")
    }
  }
}
</script>

<style scoped>

</style>