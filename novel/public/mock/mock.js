const Mock =require("mockjs")
let arr=[];
for(let i=0;i<=10;i++){
  arr.push({
    "img":Mock.Random.image("100x100",Mock.Random.color()),
    "name":Mock.Random.cname(),
    "describe":Mock.Random.csentence(1,15),
    "id":i,
    "Istrue":Mock.Random.boolean()
  })
}
module.exports = arr