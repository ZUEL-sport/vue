<template>
  <div class="page">
    <PageHead/>
    <a-card style="width:80% ; margin: auto">
      <a-table
          :columns="columns"
          row-key="user_no"
          :data-source="data"
      >
<!--                 :pagination="pagination"-->
        <template slot="action2" slot-scope="text,record">
<!--          <a slot="action2" href="javacript:;" @click="goToResultRecord(record)">成绩录入</a>-->
          <a slot="action2"  @click="goToResultRecord(record)">成绩录入</a>
        </template>
      </a-table>
    </a-card>

  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {judge} from "@/api/user";
export default {
  name: "teacher_judge",
  components: {PageHead},
  data(){
    return{
      id:'',
      game_no:'',
      turn_no:'',
      data:[],
      // pagination: {
      //   total: 0,
      //   pageSize: 5,
      //   showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      // },
      columns:[
        {
          title:'项目名称',
          //dataIndex:和后端参数同名
          dataIndex:'gameName',
          width:'50%'
        },
        {
          title:'赛程',
          dataIndex: 'turnName',
          width:'30%',
        },
        {
          title:'操作',
          width:'30%',
          scopedSlots:{customRender:'action2'}
        }
      ]
    }
  },
  mounted() {
    this.getName()
  },
  created() {
    this.id=this.$route.params.id
  },
  methods:{
    getName(){
      let data={id:this.id}
      judge(data).then(res=>{
        console.log(res)
        if(res.code===0){
          this.data=res.data
        }else{
          console.log("获取失败")
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    goToResultRecord(record){
      this.game_no=record.gameNo
      this.turn_no=record.turnNo
      // console.log(this.game_no)
      // console.log(this.turn_no)
      this.$router.push({name:'resultRecord',params:{gameNo:this.game_no,turnNo:this.turn_no}})
    }
  }
}
</script>

<style scoped>

</style>