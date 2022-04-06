<template>
  <div>
    <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 10 }"
        :scroll="{ y: 240 }"
    />
  </div>
</template>

<script>
import {MatchManageFindForName} from "@/api/user";
const columns = [
  {
    title: '比赛项目',
    dataIndex: 'gameName',
    width: 300,
  },
  {
    title: '当前流程',
    dataIndex: 'processName',
    width: 300,
  },
];
export default {
  name: "matchmanage1",
  data(){
    return{
      columns,
      data:'',
    }
  },
  created() {
    MatchManageFindForName().then(res=>{
      this.data=res.data;
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>