<template>
  <div class="page">
    <PageHead/>
    <div class="center">
      <div class="form-card">
        <div class="lift"></div>
        <div class="right">
          <div class="title">修改密码</div>
          <a-form-model ref="form" :model="form" :rules="rules" class="form">
            <a-form-model-item prop="password">
              <span class="gray">新密码</span>
              <a-input
                  v-model="form.telephone"
                  size="large"
                  clearable
                  placeholder="请输入您密码"
              >
                <a-icon slot="prefix" type="user" class="gray"/>
              </a-input>
            </a-form-model-item>
            <a-form-model-item prop="password1">
              <span class="gray">确认密码</span>
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
              <span v-if="!loading">确认</span>
              <span v-else>确认中...</span>
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
import {change} from "@/api/user";
import storage from "store";
import cloneDeep from "lodash.clonedeep";
import MD5 from "md5";
export default {
  name: "password-change",
  components: { PageHead },
  data () {
    const validateMobile = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
        return
      }
      callback()
      return
    }
    return {
      redirect: undefined,
      loading: false,
      form: {
        password: '',
        password1: ''
      },
      rules: {
        passwoed: { required: true, trigger: 'trigger', validator: validateMobile },
        password1: [{ required: true, trigger: 'trigger', message: '请输入确认密码' }]
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
      console.log(this.$refs.form)
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          const parameter = cloneDeep(this.form)
          this.form.password = MD5(this.form.password)
          parameter["password"] = MD5(this.form.password)
          change(this.form).then(res => {
            console.log(res)
            console.log("刚刚输的在这里")
            console.log(res.data)
            console.log("刚刚输的在这里")
            if (res.code === 0) {
              this.$message.success("登录成功")
              storage.set('access_token', res.data["accessToken"])
              this.$router.push({ path: this.redirect || '/' })
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

</style>