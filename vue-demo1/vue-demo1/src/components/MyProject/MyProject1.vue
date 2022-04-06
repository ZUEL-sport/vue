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
import {MyProtect} from "@/api/user";

const columns = [
  {
    title: '参赛者',
    dataIndex: 'userName',
    width: 150,
  },
  {
    title: '项目名称',
    dataIndex: 'gameName',
    width: 150,
  },
  {
    title: '场次名称',
    dataIndex: 'turnName',
    width: 150,
  },
  {
    title: '比赛时间',
    dataIndex: 'time',
    width: 150,
  },
  {
    title: '比赛场地',
    dataIndex: 'place',
    width: 150,
  },
];

export default {
  name: "MyProject1",
  data() {
    return {
      id:'',
      data:'',
      columns,
    };
  },
  created() {
    let data={user_no:this.$route.params.id}
    MyProtect(data).then(res=>{
      this.data=res.data;
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>