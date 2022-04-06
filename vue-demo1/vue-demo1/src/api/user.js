import {post} from './api'
const baseURL ='/user'

//抛出方法

/*
* 登录
 */
export function login(data){
    return post(baseURL+'/login',data)
}

/*
*注册
 */
export function register(data){
    return post(baseURL+'/register',data)
}

/*
*密码重置
 */
export function change(data){
    return post(baseURL+'/password-change',data)
}

/*
*查看项目
 */
export function  itemLook(data){
    return post('/game/listGame',data)
}

// 查看项目下的项目详情
export function more(game_no){
    return post('/game/gameDetail',game_no)
}

// 查看项目下的项目结果
export function result(data){
    return post('/game/listGameResults',data)
}
//查看项目下不同赛程的结果
export function MatchResult(data){
    return post(baseURL+'/',data)
}

//项目详情的报名
export function SignUp(data){
    return post(baseURL+'/',data)
}
//提交申诉
export function AppealSignUp(data){
    return post(baseURL+'/commitComplaint',data)
}

//申诉结果
export function AppealResult(data){
    return post(baseURL+'/showComplaintDetail',data)
}

export function MyProtect(data){
    return post(baseURL+'/myGame',data)
}

export function gradecontent(data){
    return post(baseURL+'/',data)
}

export function gradesave(data){
    return post(baseURL+'/',data)
}

export function MatchManageFindForName(data){
    return post('/game/listGameProcess',data)
}

export function risecontent(data){
    return post(baseURL+'/',data)
}

export function risesave(data){
    return post(baseURL+'/',data)
}

export function examinecontent(data){
    return post(baseURL+'/',data)
}

export function examinesave(data){
    return post(baseURL+'/',data)
}

export  function  creategame(data){
    return post(baseURL+'/',data)
}

export function create(data){
    return post(baseURL+'/',data)
}

/*
教师裁判
 */
export function judge(data){
    return post(baseURL+'/showScoreInput',data)
}
/*
录入成绩
 */
export function record(data){
    return post(baseURL+'/showInputMembers',data)
}
/*
个人信息的信息显示
 */
export function persondata(data){
    return post(baseURL+'/userDetail',data)
}

/*
个人信息的修改信息
 */
export function datamodify(data){
    return post(baseURL+'/changeUserDetail',data)
}
/*
我的团队
 */
export function myteam(data){
    return post(baseURL+'/myTeamDetail',data)
}
// /*
// 我的团队的显示成员信息
//  */
// export function teammate(teamId){
//     return post(baseURL+'myTeamDetail',teamId)
// }
/*
报名审核
 */
export function review(data){
    return post('/game/listGame',data)
}
/*
显示申诉信息
*/
export function appealDetail(appeal_no){
    return post(baseURL+'/showComplaint',appeal_no)
}
/*
提交通过的报名审核信息
 */
export function submitto(data){
    return post('',data)
}
/*
分配裁判的项目界面
 */
export function  sportitem(data){
    return post('/game/showNeedReferee',data)
}
//裁判提交成绩
export function submit1(data){
    return post(baseURL+'/inputScore',data)
}