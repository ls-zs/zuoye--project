const Mock =require("mockjs")
let arr=[];
for(let i=0;i<=5;i++){
  arr.push({
      name:Mock.Random.cname(),
      index:0,
      data:Mock.Random.date('yyyy/MM/dd'),
      time:Mock.Random.natural(1, 10),
      Istrue:Mock.Random.boolean()
  })
}

module.exports=arr