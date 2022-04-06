import Router from 'vue-router'
import Vue from 'vue'
//显示安装路由器
Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('@/view/user/index')
        },
        {
            path : '/password_change',
            name :'password_change',
            component: () => import('@/view/user/password_change')
        },
        //学生
        {
            path:'/student_register',
            name:'student_register',
            component:()=>import('@/view/user/student_register')
        },
        {
            path:'/student_login',
            name:'student_login',
            component:()=>import('@/view/user/student_login')
        },
        {
            path:'/student_index/:id',
            name:'student_index',
            component: () => import('@/view/user/student_index')
        },
        {
            path:'/student_sport/:id',
            name:'student_sport',
            component: () => import('@/view/student&teacher/student/student_sport')
        },
        {
            path:'/MyProject/:id',
            name:'MyProject',
            component: () => import('@/view/student&teacher/MyProject')
        },
        {
            path:'/appeal/:id',
            name:'appeal',
            component: () => import('@/view/student&teacher/appeal')
        },
        {
            path:'/itemLook/:id',
            name:'itemLook',
            component: () => import('@/view/student&teacher/itemLook')
        },
        {
            path:'/project-information/:id',
            name:'project-information',
            component: () => import('@/view/student&teacher/project-information')
        },
        {
            path:'/itemDetail/:id',
            name:'itemDetail',
            component: () => import('@/view/student&teacher/itemDetail')
        },
        {
            path:'/student_data/:id',
            name:'student_data',
            component: () => import('@/view/student&teacher/student/student_data')
        },
        {
            path:'/dataModify/:id',
            name:'dataModify',
            component: () => import('@/view/student&teacher/student/dataModify')
        },
        {
            path:'/myTeam/:id',
            name:'myTeam',
            component: () =>import('@/view/student&teacher/myTeam')
        },
        {
            path:'/teamData/:id',
            name:'teamData',
            component: () =>import('@/view/student&teacher/teamData')
        },
        //教师
        {
            path:'/teacher_register',
            name:'teacher_register',
            component:()=>import('@/view/user/teacher_register')
        },
        {
            path:'/teacher_login',
            name:'teacher_login',
            component:()=>import('@/view/user/teacher_login')
        },
        {
            path:'/teacher_index/:id',
            name:'teacher_index',
            component: () => import('@/view/user/teacher_index')
        },
        {
            path:'/teacher_data',
            name:'teacher_data',
            component:()=>import('@/view/student&teacher/teacher/teacher_data')
        },
        {
            path:'/teacher_sport/:id',
            name:'teacher_sport',
            component:()=>import('@/view/student&teacher/teacher/teacher_sport')
        },
        {
            path:'/teacher_judge/:id',
            name:'teacher_judge',
            component: () => import('@/view/student&teacher/teacher/teacher_judge')
        },
        {
            path:'/resultRecord',
            name:'resultRecord',
            component:() => import('@/view/student&teacher/teacher/resultRecord')
        },
        //公共账号
        {
            path:'/public_login',
            name:'public_login',
            component:()=>import('@/view/user/public_login')
        },
        {
            path:'/public_index/:id',
            name:'public_index',
            component: () => import('@/view/user/public_index')
        },
        {
            path:'/creatGame',
            name:'createGame',
            component: () => import('@/view/admin&public/createGame')
        },
        {
            path:'/review',
            name:'review',
            component: () => import('@/view/admin&public/public/review')
        },
        {
            path:'/examine',
            name:'examine',
            component: () => import('@/view/admin&public/public/examine')
        },
        {
            path:'/matchManage',
            name:'matchManage',
            component: () => import('@/view/admin&public/matchManage')
        },
        {
            path:'/rise',
            name:'rise',
            component: () => import('@/view/admin&public/rise')
        },
        {
            path:'/rise1',
            name:'rise1',
            component: () => import('@/view/admin&public/rise1')
        },
        //管理员
        {
            path:'/admin_login',
            name:'admin_login',
            component:()=>import('@/view/user/admin_login')
        },
        {
            path:'/admin_index/:id',
            name:'admin_index',
            component: () => import('@/view/user/admin_index')
        },
        {
            path:'/appealHandle',
            name:'appealHandle',
            component: () => import('@/view/admin&public/admin/appealHandle')
        },
        {
            path:'/appealDetail/:id',
            name:'appealDetail',
            component: () => import('@/view/admin&public/admin/appealDetail')
        },
        {
            path:'/sportsItem',
            name:'sportsItem',
            component: () => import('@/view/admin&public/admin/sportsItem')
        },

        {
            path:'/gradeManage',
            name:'gradeManage',
            component:() =>import('@/view/admin&public/gradeManage')
        },
        {
            path:'/gradeInquire',
            name:'gradeInquire',
            component:() =>import('@/view/admin&public/gradeInquire')
        },
        {
            path:'/gradeChange1',
            name:'gradeChange1',
            component:() =>import('@/view/admin&public/gradeChange1')
        },

    ]
})
// 将路由组件暴露出来
export default router