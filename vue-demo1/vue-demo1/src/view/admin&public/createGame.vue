<template>
  <div class="page1">
    <PageHead/>
    <a-descriptions title="创建比赛" bordered>

      <a-descriptions-item label="项目名称">
        <a-input type="text" class="zoo"  v-model="data.name"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="项目类别">
        <a-input type="text" class="zoo"  v-model="data.gen"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛场次">
        <a-input type="text" class="zoo"  v-model="data.amount"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="参赛人数">
        <a-input type="text" class="zoo"  v-model="data.peoplesum"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="运动员性别">
        <a-input type="text" class="zoo"  v-model="data.sex"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="参赛人群">
        <a-input type="text" class="zoo"  v-model="data.participate"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛描述" :span="3">
        <a-input type="text" class="zoo"  v-model="data.describe"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="场次序号">
        <a-input type="text" class="zoo"  v-model="data.No1"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="名称">
        <a-input type="text" class="zoo"  v-model="data.name1"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="参赛人数">
        <a-input type="text" class="zoo"  v-model="data.all1"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛时间" :span="2">
        <a-input type="text" class="zoo"  v-model="data.time1"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛地点" :span="2">
        <a-input type="text" class="zoo"  v-model="data.place1"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="场次序号">
        <a-input type="text" class="zoo"  v-model="data.No2"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="名称">
        <a-input type="text" class="zoo"  v-model="data.name2"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="参赛人数">
        <a-input type="text" class="zoo"  v-model="data.all2"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛时间" :span="2">
        <a-input type="text" class="zoo"  v-model="data.time2"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛地点" :span="2">
        <a-input type="text" class="zoo"  v-model="data.place2"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="场次序号">
        <a-input type="text" class="zoo"  v-model="data.No3"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="名称">
        <a-input type="text" class="zoo"  v-model="data.name3"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="参赛人数">
        <a-input type="text" class="zoo"  v-model="data.all3"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛时间" :span="2">
        <a-input type="text" class="zoo"  v-model="data.time3"></a-input>
      </a-descriptions-item>
      <a-descriptions-item label="比赛地点" :span="2">
        <a-input type="text" class="zoo"  v-model="data.place3"></a-input>
      </a-descriptions-item>
    </a-descriptions>
    <a-row class="thisbtn">
      <a-button
          size="large"
          type="primary"
          class="but"
          @click="handle"
          block
      >
        <span>创建</span>
      </a-button>
    </a-row>
  </div>
</template>

<script>

import {create} from "@/api/user"
import PageHead from "../../components/PageHead";
export default {
  name: "createGame",
  components: {PageHead},
  data(){
    return{
      data:{
        name:'',
        gen:'',
        amount:'',
        sum:'',
        sex:'',
        participate:'',
        describe:'',
        No1:'',
        name1:'',
        all1:'',
        place1:'',
        time1:'',
        No2:'',
        name2:'',
        all2:'',
        time2:'',
        place2:'',
        No3:'',
        name3:'',
        all3:'',
        time3:'',
        place3:'',
      }
    }
  },
  methods: {
    handle(){
      create.then(res => {
        console.log(res.code)
      })
      console.log(this.data)
    }
  }
}
</script>

<style scoped>
.zoo{
  border: none;
}
.page1{
  min-height: 100vh;
  width: 100%;
  background-size:cover;
  display: flex;
  flex-direction: column;
}
.but{
  width: 15%;
}
</style>
