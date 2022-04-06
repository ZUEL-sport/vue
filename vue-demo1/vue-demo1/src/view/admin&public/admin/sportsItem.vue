<template>
  <div class="page">
    <PageHead/>
    <a-card style="width:80% ; margin: auto ;top:20px">
      <a-table
          :columns="columns"
          row-key="id"
          :data-source="data"
          :pagination="pagination"
      >
        <!--      text就是dataIndex,就是对应的数据，record是整行数据-->
        <template slot="action" slot-scope="text,record">
          <a slot="action" href="javacript:;" @click="goToAssignJudge(record)">更多信息</a>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {sportitem} from "@/api/user";
export default {
  name: "sportsItem",
  components: {PageHead},
  data(){
    return {
      data:[],
      pagination: {
        total: 0,
        pageSize: 5,
        showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      },
      columns:[
        {
          title:'项目名称',
          //dataIndex:和后端参数同名
          dataIndex:'gameName',
          width:'30%'
        },
        {
          title:'场次名称',
          //dataIndex:和后端参数同名
          dataIndex:'turnName',
          width:'30%'
        },
        {
          title:'',
          width:'30%',
          scopedSlots:{customRender:'action'}
        }
      ]
    }
  },
  mounted() {
    this.fetch()
  },
  methods:{
    fetch(){
      sportitem().then(res=>{
        console.log(res)
        if(res.code===0){
          this.data=res.data
        }else{
          console.log("获取失败")
        }
      }).catch(error => {
        console.log(error)
      })
    },
    goToAssignJudge(record){
      this.game_no=record.gameNo
      this.turn_no=record.turnNo
      console.log(this.game_no)
      this.$router.push({name:'assignJudge',params:{gameNo:this.game_no,turnNo:this.turn_no}})
    }

  }
}
</script>

<style scoped>

</style>