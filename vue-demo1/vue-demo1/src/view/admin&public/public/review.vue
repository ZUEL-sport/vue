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
          <a slot="action" href="javacript:;" @click="goToDetail(record)">更多信息</a>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {review} from "@/api/user";
export default {
  name: "review",
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
          title:'项目',
          //dataIndex:和后端参数同名
          dataIndex:'name',
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
  methods: {
    fetch() {
      review().then(res => {
        console.log(res)
        if (res.code === 0) {
          this.data = res.data
        } else {
          console.log("获取失败")
        }
      }).catch(error => {
        console.log(error)
      })
    },
    goToDetail(){
      this.$router.push('/examine',this.data.game_no)
    }
  }

}
</script>

<style scoped>
.title {
  top: -42px;
  /*width: 246px;*/
  /*height: 71px;*/
  color: rgba(51, 51, 51, 100);
  font-size: 36px;
  text-align: center;
}
</style>