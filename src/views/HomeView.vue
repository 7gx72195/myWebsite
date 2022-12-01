<template>
  <div class="home all">
    <div class="vue-menu">
      <transition name="fade">
        <div class="menu-items" v-show="display">
          <div v-for="(item, i) in menu" :key="i" class="menu-item" @click="toWhere(item.bookmark)">
            <div class="menu-text">
              {{ item.name }}
            </div>

          </div>
        </div>
      </transition>

      <i class="fa-solid fa-bars" style="cursor: pointer;font-size:30px;color:#FFFFFF;margin-left: 10px;"
        @click="displayToggle"></i>
    </div>
    <div class="vue-content">
      <div class="jsView">
        <div class="divClass" id="aaa">
          <div class="divL">

            <div class="divTitle">
              <h2>
                scss rwd
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
@media only screen and (max-width: 1000px) {
  display: flex;
}
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                填滿撐開父框架
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
overflow : hidden
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="bbb">
          <div class="divL">

            <div class="divTitle">
              <h2>
                字太長變 ......
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
overflow : hidden;            //字太長隱藏
text-overflow : ellipsis;     //有......
white-space : nowrap;         //不換行
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                background
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
background-image:url(...)
background-repeat:no-repeat;  //不重複
background-size : contain     //盡可能大
background-size : cover       //切邊塞滿
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="ccc">
          <div class="divL">

            <div class="divTitle">
              <h2>
                元素排列
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
.class : first-child    //父元素裡第一個子元素
.class : last-child     //父元素裡最後一個元素

=>[4,5]
              
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                微軟正黑體
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
font-family: Microsoft JhengHei;
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="ddd">
          <div class="divL">

            <div class="divTitle">
              <h2>
                隱藏超連結底線
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
text-decoration:none;
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                Hover 手指
              </h2>
            </div>
            <div class="divContent">
              <code>
cursor: pointer; 
              </code>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data: () => ({
    display: false,
    menu: [
      {
        name: "scss rwd",
        bookmark: "aaa"
      },
      {
        name: "填滿撐開父框架",
        bookmark: "aaa"
      },
      {
        name: "字太長變 ......",
        bookmark: "bbb"
      },
      {
        name: "background",
        bookmark: "bbb"
      },
      {
        name: "元素排列",
        bookmark: "ccc"
      },
      {
        name: "微軟正黑體",
        bookmark: "ccc"
      },
      {
        name: "隱藏超連結底線",
        bookmark: "ddd"
      },
      {
        name: "Hover 手指",
        bookmark: "ddd"
      }
    ]
  }),
  methods: {
    displayToggle() {
      var self = this;
      self.display = !self.display;
    },
    toWhere(da) {
      $("html,body").animate(
        {
          scrollTop: $("#" + da).offset().top
        },
        "show"
      );
      return false;
    }
  },
}
</script>
<style lang="scss" scoped>
li {
  margin-top: 50px !important;
}
</style>