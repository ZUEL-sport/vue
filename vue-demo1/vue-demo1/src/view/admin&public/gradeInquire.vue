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
    dataIndex: 'participants',
    width: 150,
  },
  {
    title: '项目名称',
    dataIndex: 'protect-name',
    width: 150,
  },
  {
    title: '场次名称',
    dataIndex: 'match-name',
    width: 150,
  },
  {
    title: '比赛场地',
    dataIndex: 'match-place',
    width: 150,
  },
];

export default {
  name: "gradeinquire",
  data() {
    return {
      id:'',
      data:'',
      columns,
    };
  },
  created() {
    this.id=this.$route.params.id
    MyProtect(this.id).then(res=>{
      this.data=res.data;
    })

  }
}
</script>

<style scoped>

</style>