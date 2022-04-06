 <template>
    <div class="team-home">
      <PageHead />
      <a-row type="flex" justify="space-around" class="intro-row" :gutter="12">
        <a-col class="intro-col" :span="8">
          <a-card class="item" hoverable @click="goToMyItem">
            <img src="../../../assets/images/icon/login.png">
            <div class="title">我的项目</div>
          </a-card>
        </a-col>
        <a-col class="intro-col" :span="8">
          <a-card class="item" hoverable @click="goToItemLook">
            <img src="../../../assets/images/icon/register.png">
            <div class="title">查看项目</div>
          </a-card>
        </a-col>
        <a-col class="intro-col" :span="8">
          <a-card class="item" hoverable @click="goToAppeal">
            <img src="../../../assets/images/icon/team.png">
            <div class="title">申诉</div>
          </a-card>
        </a-col>

      </a-row>
    </div>
 </template>

 <script>
    import PageHead from "@/components/PageHead";
    export default {
      name: "student_sport",
      components: { PageHead },
      data(){
        return{
          id:''
        }
      },
      created() {
        this.id=this.$route.params.id
      },
      methods: {
        goToMyItem () {
          this.$router.push({name:'MyProject',params:{id:this.id}})
        },
        goToAppeal () {
          this.$router.push({name:'appeal',params:{id:this.id}})
        },
        goToItemLook () {
          this.$router.push({name:'itemLook',params:{id:this.id}})
        }
      }
    }
 </script>

 <style lang="less" scoped>
 .team-home {
      height: 100vh;
      background: url("../../../assets/images/背景1.jpg") no-repeat center;
      background-size: cover;
      width: 100%;

      .intro-row{
        padding: 10px;
        width: 100%;
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .intro-col{
          display: flex;
          justify-content: center;

          .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: calc(100% - 100px);
            height: calc(100% - 100px);
            img{
              width: calc(100% - 0px);
              height: calc(100% - 0px);
            }

            .title{
              font-family: 幼圆;
              font-size: 24px;
              margin-top: 10px;
              text-align: center;
              color: #2979FF;
              font-weight: bold;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
              overflow: hidden;
            }
          }
        }
      }
    }
 </style>