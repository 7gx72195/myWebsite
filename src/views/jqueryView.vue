<template>
  <div class="home all">
    <div class="vue-menu">
      <transition name="fade">
        <div class="menu-items" v-show="display">
          <div v-for="(item, i) in menu" :key="i" class="menu-item"  @click="toWhere(item.bookmark)">
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
      <div class="divClass" id="aaa">
        <div class="divL">

          <div class="divTitle">
            <h2>
              CDN
              
            </h2>
          </div>
          <div class="divContent">
            <code>
          <pre>
https://releases.jquery.com/
          </pre>
        </code>
          </div>
        </div>
        <div class="divR">
          <div class="divTitle">
            <h2>
              動畫書籤
            </h2>
          </div>
          <div class="divContent">
            <code>
          <pre>
toWhere(da){
    $("html,body").animate(
        {
            scrollTop: $(da).offset().top
        },"show"
    );
    return false;
}

-------------------._.------------------------

使用toWhere('#AAA')呼叫
#AAA 為 div id="AAA"
          </pre>
        </code>
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
        name: "CDN",
        bookmark: "aaa"
      },
      {
        name: "動畫書籤",
        bookmark: "aaa"
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


