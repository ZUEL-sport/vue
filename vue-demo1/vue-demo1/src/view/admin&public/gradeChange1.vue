<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template
        v-for="col in ['grade','rank']"
        :slot="col"
        slot-scope="text, record"
    >
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
    </template>
    <template slot="operation" slot-scope="text, record">
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
    </template>
  </a-table>
</template>

<script>
import {gradecontent} from "@/api/user";
import {gradesave} from "@/api/user";
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: '15%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '项目名称',
    dataIndex: 'projectname',
    width: '15%',
    scopedSlots: { customRender: 'projectname' },
  },
  {
    title: '场次名称',
    dataIndex: 'matchname',
    width: '15%',
    scopedSlots: { customRender: 'matchname' },
  },
  {
    title: '成绩',
    dataIndex: 'grade',
    width: '15%',
    scopedSlots: { customRender: 'grade' },
  } ,
  {
    title: '排名',
    dataIndex: 'rank',
    width: '15%',
    scopedSlots: { customRender: 'rank' },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    projectname: `zz ${i}`,
    matchname: `London Park no. ${i}`,
    grade:`${i}`,
    rank:`${i}`,
  });
}
export default {
  name: "gradechange1",
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      id:'',
      data,
      columns,
      editingKey: '',
    };
  },
  created() {
    this.id=this.$route.params.id;
    gradecontent(this.id).then(res=>{
      this.data=res.data;
    })
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.find(item => key === item.key);
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.find(item => key === item.key);
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.find(item => key === item.key);
      const targetCache = newCacheData.find(item => key === item.key);
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = '';
      console.log(this.data)
      gradesave(this.data).then(res=>{
        console.log(res.code);
      })
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
  },
}
</script>

<style scoped>

</style>