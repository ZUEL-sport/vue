<template>
  <div>

    <a-row type="flex"  class="row" style="margin-top: 0px;">
      <a-card class="table">
        <a-table
            rowKey="id"
            :columns="table.columns"
            :dataSource="data"
            :pageination="pagination"
            :scroll = "{x: true, y: 250}"
        >
        </a-table>
      </a-card>
    </a-row>

  </div>
</template>

<script>
import {result} from "@/api/user";
export default {
  name: "match-content",
  created() {
    this.projectId=this.$route.params.id
    let data={game_no:this.projectId}
    result(data).then(res=>{
      this.data=res.data
    })
  },
  methods:{
  },
  data(){
    return{
      projectId:'',
      data:'',
      pagination: {
        total: 0,
        pageSize: 5,
        showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      },
      form: {
        telephone: '',
        password: '',
        id:'',
        name:''
      },
      table: {
        columns: [
          {
            align: 'center',
            width: '15%',
            title: '姓名',
            key: 'name',
            dataIndex: 'name'
          },
          {
            align: 'center',
            width: '15%',
            title: '项目名称',
            key: 'ProjectName',
            dataIndex: 'ProjectName'
          },
          {
            align: 'center',
            width: '10%',
            title: '场次名称',
            key: 'MatchName',
            dataIndex: 'MatchName',
          },
          {
            align: 'center',
            width: '15%',
            title: '成绩',
            key: 'grade',
            dataIndex: 'grade'
          },
          {
            align: 'center',
            width: '45%',
            title: '排名',
            key: 'rank',
            dataIndex: 'rank',
          }
        ],


      },

    }
  },
}
</script>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
}
.row{
  width: 100%;
}
.title, .table{
  width: calc(100% - 100px);
  padding: 10px;
}
.table{
  height: calc(100% - 25px);
}
.title{
  z-index: 999;
  text-align: center;
  color: gainsboro;
  font-size: 28px;
  font-weight: bold;
}
</style>