let data =require("./public/mock/mock")
module.exports={
  devServer:{
    before(app){
      app.get("/list",(req,res)=>{
        res.json({
          list:data
        })
      })
      const loginlist=[{
        user:"liushuai",
        pwd:22388
      }]
      app.get("/login",(res,req)=>{
        const {user,pwd} =req.query
        let flag=loginlist.some(val=>{
          val.user===user&&val.pwd==pwd
        })
        if(flag){
          errcode:0,
          localStorage.setItem("token",`bawei_${user}_${pwd}`)
        }else{
          errcode:-1
        }
      })
    }
  }
}