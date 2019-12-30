<template>
  <div class="logoin">
    <div class="login">
      账户：
      <input type="text" v-model="user" />
      <br />密码：
      <input type="text" v-model="pwd" />
      <button @click="loginclick()">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    loginclick() {
      this.$http.get("/login", {
          params: {
            user: this.user,
            pwd: this.pwd
          }
        })
        .then(res => {
          console.log(res.data);
        });
    }
  }
};
</script>

<style lang="scss">
.logoin {
  width: 100%;
  height: 100%;
  background: #ccc;
  .login {
    width: 100%;
    height: 300px;
    position: fixed;
    left: 0;
    top: 150px;
    background: #fff;
    display: flex;
    flex-direction: column;
    input {
      width: 300px;
      height: 30px;
      border: 1px solid black;
    }
    button {
      width: 100px;
      height: 40px;
      margin-left: 123px;
      margin-top: 49px;
    }
  }
}
</style>