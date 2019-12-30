<template>
  <div id="app">
    <div class="header">
      <span>加班/休假</span>
    </div>
    <div class="nav">
      <ul>
        <router-link v-for="(item,index) in navlist" :key="index" :to="item.path" tag="li" exact-active-class="active">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="main">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      navlist:[{
        name:"待处理",
        path:"/home"
      },{
        name:"已发起",
        path:"/about"
      },{
        name:"已处理",
        path:"/mine"
      }]
    }
  },
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
#app,html,body{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 20px;
  font-weight: bold;
}
.nav{
  width: 100%;
  height: 45px;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    li{
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.main{
  flex: 1;
  overflow: auto;
}
.active{
  color: rgb(53, 128, 11);
  font-size: 20px;
}
</style>
