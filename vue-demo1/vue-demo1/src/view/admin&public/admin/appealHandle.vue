`<template>
  <div class="page">
    <PageHead/>
    <a-card style="width:80% ; margin: auto">
      <a-table
          :columns="columns"
          row-key="id"
          :data-source="data"
          :pagination="pagination"
      >
        <!--      text就是dataIndex,就是对应的数据，record是整行数据-->
        <template slot="action" slot-scope="text,record">
          <a slot="action" href="javacript:;" @click="goToAppealDetail(record)">详情</a>
        </template>
      </a-table>
    </a-card>


  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {appealDetail} from "@/api/user";

export default {
  name: "appealHandle",
  components: {PageHead},
  data(){
    return {
      no:'',
      data:[],
      pagination: {
        total: 0,
        pageSize: 5,
        showTotal: total => `共有 ${total} 条数据`,  //分页中显示总的数据
      },
      columns:[
        {
          title:'申诉类型',
          dataIndex: 'category',
          width:'30%'
        },
        {
          title:'申诉时间',
          //dataIndex:和后端参数同名
          dataIndex:'createdTime',
          width:'30%'
        },
        {
          title:'申诉人',
          dataIndex: 'name',
          width: '30%'
        },
        {
          title:'查看',
          width:'30%',
          scopedSlots:{customRender:'action'}
        }
      ]
    }
  },
  created() {
    appealDetail().then(res=>{
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
  methods:{

    /*goToAppealDetail(record){
      console.log(record.id)
      this.$router.push({name:'appealDetail',params:{id:record.id}})
    }*/
  }
}
</script>

<style scoped>

</style>