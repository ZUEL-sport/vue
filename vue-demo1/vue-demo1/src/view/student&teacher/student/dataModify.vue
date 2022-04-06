<template>
  <div class="page">
    <PageHead/>
    <div style="width:256px">
      <a-button type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          :theme=theme
          :inline-collapsed="collapsed"
      >
        <a-menu-item key="1" >
          <a-icon type="mail" />
          <span>个人信息</span>
        </a-menu-item>
<!--        <a-menu-item key="2" @click="goToMyTeam">-->
<!--          <a-icon type="calendar" />-->
<!--          <span>我的团队</span>-->
<!--        </a-menu-item>-->
      </a-menu>
    </div>
    <div class="form" >
      <a-form-model ref="form" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item   prop="user_no" label="学号">
          <a-input v-model="form.user_no" />
        </a-form-model-item>
        <a-form-model-item   prop="school_no" label="学院">
          <a-select
              placeholder="所属学院"
              v-model="form.school_no"
          >
            <a-select-option  v-for="item in schoolList" :key="item.id">{{item.name}}</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item   prop="name" label="姓名">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item   prop="phone" label="手机号">
          <a-input v-model="form.phone" />
        </a-form-model-item>
        <a-form-model-item   prop="password" label="密码">
          <a-input v-model="form.password" />
        </a-form-model-item>
        <a-form-model-item   prop="sex" label="性别">
          <a-radio-group v-model="form.sex" style="text-align: center">
            <a-radio :value="1">
              男
            </a-radio>
            <a-radio :value="2">
              女
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 15, offset: 4 }">
          <a-button type="primary" @click="onSubmit">
            提交
          </a-button>
        </a-form-model-item>

      </a-form-model>
    </div>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import {validMobile, validPassword} from "@/utils/validate";
import {datamodify} from "@/api/user";

export default {
  name: "dataModify",
  components: {PageHead},
  created() {
    this.form.user_no=this.$route.params.id
  },
  data() {
    const validatePassword=(rule,value,callback)=>{
      if(!value){
        callback(new Error("请输入密码"))
        return
      }else{
        if(!validPassword(value)){
          callback(new Error("请输入正确的格式"))
          return
        }else{
          callback()
          return
        }
      }
    }
    const validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系方式'))
        return
      }
      if (!validMobile(value)) {
        callback(new Error('请输入正确的联系方式'))
        return
      }
      callback()
      return
    }
    return {

      collapsed: false,
      theme:'light',
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
      schoolList:[
        {id: 1, name:'法学院'},
        {id: 2, name:'会计学院'},
        {id: 3, name:'信息与安全工程学院'}
      ],
      form: {
        user_no: '',
        school_no:undefined,
        name:'',
        phone:'',
        password:'',
        sex:undefined
      },
      rules: {
        user_no:[{required:true, message:'请输入学号', trigger:'blur'}],
        school_no: [{required:true, message:'请选择所属学院',trigger:'blur' }],
        name:[{required:true, message:'请输入姓名', trigger:'blur'}],
        phone: { required: true, trigger: 'blur', validator: validateMobile },
        password: [{required:true, validator:validatePassword,trigger:'blur'}],
        sex: [{ required: true, trigger: 'blur', message: '请选择性别' }],
      }
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    goToMyTeam(){
      this.$router.push({name:'myTeam',params:{id:this.form.user_no}})
    },
    onSubmit(){
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          datamodify(this.form).then(res => {
            console.log(res)
            if(res.code === 0) {
              this.$message.success("修改成功")
              this.$router.push({name:'student_data',params:{id:this.form.user_no}})
            } else {
                this.$message.error("修改失败")
            }
          })
            this.loading = false
        }
      })
    }
  }
}
</script>

<style scoped>
form{
  /*border:2px solid;*/
  width:50%;
  position:relative;
  left:350px;
  top:-70px;
}
</style>