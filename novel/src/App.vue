<template>
  <div id="app">
      <div class="header" v-show="$route.name!=='logoin'&&$route.name!=='detail'">
        <h1>纵横中文网</h1>
      </div>
      <div class="nav" v-show="$route.name!=='logoin'&&$route.name!=='detail'">
        <router-link
          tag="span"
          v-for="(item,index) in navlist"
          :key="index"
          :to="item.path"
          exact-active-class="active"
        >{{item.name}}</router-link>
      </div>
       <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      navlist: [
        {
          name: "首页",
          path: "/home"
        },
        {
          name: "分类",
          path: "/classify"
        },
        {
          name: "排行",
          path: "/about"
        },
        {
          name: "书架",
          path: "/mine"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.active {
  font-size: 20px;
  color: rgb(218, 214, 214);
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.nav {
  width: 100%;
  height: 45px;
  background: rgb(97, 94, 94);
  display: flex;
  span {
    flex: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
}
.main {
  flex: 1;
  overflow: auto;
}
</style>
