<template>
  <div>
    <a-table :columns="columns" :data-source="data" bordered>
      <template
          v-for="col in ['state']"
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
import {examinecontent} from "@/api/user";
import {examinesave} from "@/api/user";
const columns = [
  {
    title: '学号',
    dataIndex: 'number',
    width: '30%',
    scopedSlots: { customRender: 'number' },
  },
  {
    title: '名字',
    dataIndex: 'name',
    width: '30%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '审核状况',
    dataIndex: 'state',
    width: '30%',
    scopedSlots: { customRender: 'state' },
  },
];
export default {
  name: "examine",
  data() {
    // this.cacheData = data.map(item => ({ ...item }));
    return {
      id:'',
      data:'',
      columns,
      editingKey: '',
    };
  },
  created() {
    this.id=this.$route.params.id;
    examinecontent(this.id).then(res=>{
      this.data=res.data;
    })
  },
  methods: {
    handle(){
      examinesave(this.data).then(res=>{
        console.log(res.code);
      })
    },
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