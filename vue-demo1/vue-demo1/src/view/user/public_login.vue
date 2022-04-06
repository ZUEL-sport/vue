<template>
  <div class="page">
    <PageHead/>
    <div class="center">
      <div class="form-card">
        <div class="lift">
          <a-card class="item">
            <img src="../../assets/images/login/back/L&R icon.jpg">
          </a-card>
        </div>
        <div class="right">
          <div class="title">登录</div>
          <a-form-model ref="form" :model="form" :rules="rules" class="form">
            <a-form-model-item prop="user_no">
              <span class="gray">您的帐号</span>
              <a-input
                  v-model="form.user_no"
                  size="large"
                  clearable
                  placeholder="请输入您的帐号"
              >
                <a-icon slot="prefix" type="user" class="gray"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password">
              <span class="gray">您的密码</span>
              <a-input
                  v-model="form.password"
                  clearable
                  size="large"
                  type="password"
                  password
                  placeholder="请输入您的密码"
                  @keyup.enter.native="handleLogin"
              >
                <a-icon slot="prefix" type="lock" class="gray"/>
              </a-input>
            </a-form-model-item>
          </a-form-model>

          <a-row class="btn">
            <a-button
                size="large"
                type="primary"
                @click="handleLogin"
                block
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </a-button>
          </a-row>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import "../../assets/css/common.css";
import {login} from "@/api/user";

export default {
  name: "public_login",
  components: { PageHead },
  data () {
    const validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
        return
      }
      callback()
      return
    }
    return {
      redirect: undefined,
      loading: false,
      form: {
        user_no: '',
        password: ''
      },
      rules: {
        user_no: { required: true, trigger: 'trigger', validator: validateMobile },
        password: [{ required: true, trigger: 'trigger', message: '请输入密码' }]
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          login(this.form).then(res => {
            this.$router.push({name:'public_index',params:{id:this.form.user_no}})
            if (res.code === 0) {
              this.$message.success("登录成功")
            }
          })
          this.loading = false
        }
      })
      },
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 100px);
  left: 24px;
  top: 20px;
  opacity: 0.5;
  border-radius: 8px 0 0 4px;
}
img{
  width: calc(100% - 0px);
  height: calc(100% - 0px);
  left: 281px;
  top: 465px;
}
</style>