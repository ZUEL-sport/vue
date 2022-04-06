<template>

  <div class="page">
    <PageHead/>
    <a-table class="table"
        :columns="columns"
        :row-key="turn_no"
        :data-source="data"
    >
<!--      <template  v-for="col in ['grade','rank']"
                 :slot="col"
                 slot-scope="text, record" >
        <div :key="col">
          <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
          </span>
        </div>
      </template>-->
    </a-table>
    <a-row class="thisbtn">
      <a-button
          size="large"
          type="primary"
          @click="handle"
          block
      >
        <span>提交</span>
      </a-button>
    </a-row>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {record} from "@/api/user";
import {submit1} from "../../../api/user";
export default {
  name: "resultRecord",
  components: {PageHead},
  created(){
    this.game_no=this.$route.params.gameNo
    this.turn_no=this.$route.params.turnNo
    let data={game_no:this.game_no,turn_no:this.turn_no}
    console.log(data)
    //  获取详细信息
    record(data).then(res =>{
      console.log(res)
      this.data=res.data
    })
  },
  data(){
    return{
      id:'',
      game_no:'',
      turn_no:'',
      data:'',
      editingKey:'',
      columns:[
        {
          title:'项目名称',
          dataIndex:'gameName',
          width:'25%'
        },
        {
          title:'场次名称',
          dataIndex: 'turnName',
          width:'25%'
        },
        {
          title:'姓名',
          dataIndex: 'userName',
          width:'25%'
        },
        {
          title:'成绩',
          width:'20%',
          scopedSlots:{customRender:'grade'}
        },
        {
          title:'排名',
          width:'20%',
          scopedSlots:{customRender:'rank'}
        },
      ]
    }
  },
  methods:{
    handle(){
      submit1(this.data).then(res=>{
        console.log(res.data)
        this.$message.success("提交成功" )
        this.$router.push('//teacher_judge')
      })
    },
    handleChange(value , key, column){
      const newData =[...this.data]
      const target = newData.find(item => key ===item.key)
      if(target){
        target[column] = value;
        this.data =newData
      }
    },
    edit(key){
      const newData =[...this.data]
      const target = newData.find(item => key === item.key)
      this.editingKey =key
      if(target){
        target.editable =true
        this.data =newData;
      }
    },
    save(key){
      const newData =[...this.data]
      const newCacheData =[...this.cacheData]
      const target = newData.find(item =>key === item.key)
      const targetCache = newCacheData.find(item => key === item.key)
      if(target && targetCache){
        delete target.editable
        this.data =newData
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = '';
      console.log(this.data)
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.find(item => key === item.key);
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.find(item => key === item.key));
        delete target.editable;
        this.data = newData;
      }
    },
  }
}
</script>

<style scoped>
.table{
  background-color: white;
}

</style>
