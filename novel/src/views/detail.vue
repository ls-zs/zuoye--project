<template>
  <div class="detail">
    <ul v-for="(item,index) in detailarr" :key="index">
        <li>
          <img :src="item.img" alt=""/>
        </li>
        <li>
          <p>{{item.name}}</p>
          <p>{{item.describe}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
      return{
        detailarr:[]
      }
    },

  created(){
    console.log(this.$router.history.current.query)
    this.detailarr.push(this.$router.history.current.query)
    console.log(this.detailarr)
  }
}
</script>

<style lang="scss">
.detail {
  width: 90%;
  height: 100%;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    height: 150px;
    display: flex;
    margin-top: 10px;
    li {
      flex: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      p:nth-child(1){
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>