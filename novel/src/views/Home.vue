<template>
  <div class="home">
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="tab">
      <ul>
        <li v-for="(item,index) in tabarr" :key="index">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <p>编辑力荐</p>
      <ul v-for="(item,index) in list" :key="index">
        <li>
          <img :src="item.img" alt  @click="imgclick(item)"/>
        </li>
        <li>
          <p>{{item.name}}</p>
          <p>{{item.describe}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      tabarr: [
        {
          name: "男生精选",
          index: 0
        },
        {
          name: "女生优选",
          index: 1
        }
      ],
      images: [
        "https://static.zongheng.com/upload/recommend/de/4e/de4e421dda82d12372ad01f8871eb9da.jpeg",
        "https://static.zongheng.com/upload/recommend/16/8b/168b0b73d01ea1b70d8d3d8cc0fbb9a4.jpeg",
        "https://static.zongheng.com/upload/recommend/da/cc/dacc7595a0bacefdce69c8ad69f60111.jpeg",
        "https://static.zongheng.com/upload/recommend/44/0e/440e976ad47e5b56e60581cdaefa3d3a.jpeg"
      ]
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http.get("/list").then(res => {
        this.list = res.data.list;
      });
    },
    imgclick(item){
      this.$router.push({
        path:`/detail:${item.id}`,
        query:item
      })
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
.swiper {
  width: 100%;
  height: 200px;
  margin-top: 10px;
  .van-swipe {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.tab {
  width: 100%;
  height: 55px;
  margin-top: 20px;
  border-bottom: 1px solid black;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    li:nth-child(1) {
      flex: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        width: 150px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        background: #8bb7f5;
      }
    }
    li:nth-child(2) {
      flex: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        width: 150px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        background: #d4b8d6;
      }
    }
  }
}
.content {
  width: 90%;
  height: 100%;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  p {
    width: 100px;
    height: 30px;
    font-size: 20px;
    margin-left: 30px;
  }
  ul {
    width: 100%;
    height: 150px;
    display: flex;
    margin-top: 10px;
    li {
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>