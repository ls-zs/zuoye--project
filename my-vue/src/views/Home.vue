<template>
  <div class="home">
    <div class="tab">
      <div class="tab1">
        <p v-for="(item,index) in tablist" :key="index" @click="itemClick(index)" :class="{active1:aaa==index}">{{item.name}}</p>
      </div>
    </div>
    <div class="content">
        <ul v-for="(item,index) in list" :key="index">
          <li>
            <span>12fg15df4wf5</span>
            <span>待审批</span>
          </li>
          <li>
            <span>申请人</span> <h5>{}</h5>
          </li>
          <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: "",
      newarr: [],
      tablist: [
        {
          name: "加班",
          index: 0
        },
        {
          name: "休假",
          index: 1
        }
      ]
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http.get("/list").then(res => {
        this.newarr = res.data.list;
        console.log(this.newarr)
      });
    },
    itemClick(i) {
      this.aaa = i;
    console.log(this.newarr[i])
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.tab {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  .tab1 {
    width: 250px;
    height: 40px;
    border: 1px solid rgb(53, 128, 11);
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    p {
      flex: 5;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.active1 {
  background: rgb(53, 128, 11);
  color: #fff;
}
</style>