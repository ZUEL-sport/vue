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
        提交申诉
      </a-menu-item>
      <a-menu-item @click="menu2">
        <a-icon type="solution" />
        申诉结果
      </a-menu-item>


    </a-menu>
  </div>
</template>

<script>
import Msg from "../Msg";

export default {
  name: "appeal-left",
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
      Msg.$emit("val1","1")
    },
    menu2:function (){
      Msg.$emit("val1","2")
    }
  }
}
</script>

<style scoped>

</style>