<template>
  <nav>
    <router-link to="/">常用CSS</router-link>
    <router-link to="/JS">常用js</router-link>
    <router-link to="/CLI">VUE 設定</router-link>
    <router-link to="/AXIOS">axios</router-link>
    <router-link to="/icon">icon</router-link>
    <router-link to="/jquery">jquery</router-link>
    <router-link to="/TEXTPIC">文字照片</router-link>
  </nav>
  <transition>
    <router-view />
  </transition>

</template>
<script>
export default {
  data: () => ({
    a: 11113
  })
}
</script>
<style lang="scss">
* {
  // background-color: #000000;


  a {
    color: #7488e0;
  }

}

body {
  background: linear-gradient(to right, black, rgb(31, 31, 31));
}

ul {
  margin: 0;
}
ol{
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #FFFFFF;
    font-size: 30px;
    margin-right: 50px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0DA990;

    }
  }
}

.all {
  display: flex;
  flex-wrap: wrap;

  .vue-menu {
    display: flex;
    position: fixed;
    top: 120px;
    right: 10px;
    color: black;

    .menu-items {
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      min-width: 200px;
      border-radius: 5px;

      .menu-item {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;

        .menu-text {
          margin-left: 20px;
        }

        &:hover {
          background-color: #000000;
          color: #FFFFFF;
        }
      }

    }

  }

  .vue-content {

    width: 100%;

  }
}

.divClass {
  border-bottom: 1px solid #363636;
  padding: 10px;
  display: flex;
  font-size: 18px;
  flex-wrap: wrap;

  .divTitle {
    color: #EDB2AE;
    max-width: 70%
  }

  .divR {
    flex: 1;

  }

  .divL {
    flex: 1;

  }
}

@media only screen and (max-width: 1000px) {
  .divClass {
    flex-direction: column;
  }
}

// .v-enter-active{
//   transition: opacity .3s;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }

// .v-enter-to,
// .v-leave-from {
//   opacity: .5;
// }

.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
