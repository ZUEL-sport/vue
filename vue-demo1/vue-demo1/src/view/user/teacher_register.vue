<template>
  <div class="page">
    <PageHead />
    <div class="center">
      <div class="form-card">
        <div class="lift">
            <a-card class="item">
              <img src="../../assets/images/login/back/L&R icon.jpg">
            </a-card>

        </div>
        <div class="right">
          <a-form-model ref="form" :model="form" :rules="rules" class="form">
<!--          <a-row :gutter="12">-->

<!--            <a-col class="col2" :span="12">-->
              <div class="title" style="top: 155px;height: 67px;color: rgba(51, 51, 51, 100);
              font-size: 18px;text-align: center;">注册</div>

              <a-form-model-item  prop="user_no">
                <a-input
                    v-model="form.user_no"
                    size="large"
                    clearable
                    placeholder="工号"/>
              </a-form-model-item>

              <a-form-model-item prop="name">
                <a-input
                    v-model="form.name"
                    size="large"
                    clearable
                    placeholder="姓名" />
              </a-form-model-item>

              <a-form-model-item  prop="password">
                <a-input
                    v-model="form.password"
                    size="large"
                    type="password"
                    password
                    clearable
                    placeholder="设置密码"/>
              </a-form-model-item>

              <a-form-model-item prop="school_no">
                <a-select
                    placeholder="所属学院"
                    v-model="form.school_no"

                >
                  <a-select-option  v-for="item in schoolList" :key="item.id">{{item.name}}</a-select-option>
                </a-select>
              </a-form-model-item>

              <a-form-model-item prop="phone">
                <a-input
                    v-model="form.phone"
                    size="large"
                    clearable
                    placeholder="手机号码"/>
              </a-form-model-item>

              <a-form-model-item prop="sex">
                <a-radio-group v-model="form.sex" style="text-align: center">
                  <a-radio :value="1">
                    男
                  </a-radio>
                  <a-radio :value="2">
                    女
                  </a-radio>
                </a-radio-group>
              </a-form-model-item>

              <a-form-model-item class="btn1">
                <a-button
                    size="large"
                    type="primary"
                    @click="handleRegister"
                    block
                >
                  <span v-if="!loading">注册</span>
                  <span v-else>注册中...</span>
                </a-button>
              </a-form-model-item>
<!--            </a-col>-->
<!--          </a-row>-->
        </a-form-model>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {register} from "@/api/user";
import PageHead from "@/components/PageHead";
import {validMobile, validPassword} from "@/utils/validate";
import cloneDeep from "lodash.clonedeep";
import MD5 from "md5";
//import storage from "store";
export default {
  name: "teacher_register",
  components: { PageHead },

  data () {
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
      loading: false,
      schoolList:[
        {id: 1, name:'法学院'},
        {id: 2, name:'会计学院'},
        {id: 3, name:'信息与安全工程学院'}
      ],
      form:{
        user_no:'',name:'',password:'',school_no:'',phone:'',sex:1
      },
      rules: {
        user_no:[{required:true, message:'请输入工号', trigger:'blur'}],
        name:[{required:true, message:'请输入姓名', trigger:'blur'}],
        password: [{required:true, validator:validatePassword, trigger:'blur'}],
        school_no: [{required:true, message:'请选择所属学院',trigger:'blur' }],
        phone: { required: true, trigger: 'blur', validator: validateMobile },
        sex: [{ required: true, trigger: 'blur', message: '请选择性别' }],
      }
    }
  },
  methods: {
    handleRegister () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          const parameter = cloneDeep(this.form)
          //MD5 解密
          parameter["password"] = MD5(this.form.password)
          register(parameter).then(res => {
            console.log(res)
            if(res.code === 0) {
              this.$message.success("注册成功")
              this.$router.push({ path: '/login' })
            } else {
              this.$message.error("注册失败")
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
.form-card {
  left: 240px;
  top: 300px;
  width: 900px;
  height: 595px;
  line-height: 20px;
  border-radius: 15px 15px 15px 15px;
  color: rgba(16, 16, 16, 100);
  font-size: 14px;
  text-align: center;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 100px);
  left: 24px;
  top: 155px;
  opacity: 0.5;
  border-radius: 8px 0 0 4px;
}
img{
  width: calc(100% - 0px);
  height: calc(100% - 0px);
  left: 281px;
  top: 465px;
}

.col1{
  left: -106px;
  top: 25px;
  width: 486px;
  height: 595px;
  opacity: 0.65;
  border-radius: 8px 0 0 4px;
  background-color: rgba(23, 127, 219, 100);
}
.col2{
  left: 500px;
  top: -542px;
  width: 335px;
  height: 50px;
}
.btn1{
  line-height: 23px;
  border-radius: 28px;
  background-color: rgba(3, 187, 122, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 16px;
  text-align: center;
}

</style>