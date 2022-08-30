<template>
  <div class="home all">
    <div class="vue-menu">
      <transition name="fade">
        <div class="menu-items" v-show="display">
          <div v-for="(item, i) in menu" :key="i" class="menu-item" @click="toWhere(item.bookmark)">
            <div class="menu-text" >
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
                取得現在日期
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
var now=new Date().toLocaleString()
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                取集合
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
var setA = [1,1,2,3,3];
var setB = [...new Set(setA)];

==> setB = [1,2,3];
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="bbb">
          <div class="divL">

            <div class="divTitle">
              <h2>
                檢查是否為空物件
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
    return false;
  }
  return true;
}
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                刪除字串中的 "."
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
var x = "我.我.我.我.我.我.我";
x.replace(/[.]/g,"");

=>我我我我我我我
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="ccc">
          <div class="divL">

            <div class="divTitle">
              <h2>
                回傳符合條件的元素，得到一個新陣列。
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
var arr = [1,2,3,4,5];
arr.filter(function(value) {
  return value > 3;
});

=>[4,5]
              
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                陣列打平
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];
[].concat(...myArray);

=>[1, 2, 3, 4, 5, 6, 7, 8, 9]
          </pre>
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="ddd">
          <div class="divL">

            <div class="divTitle">
              <h2>
                是否為本基測試
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
 if (location.hostname == "localhost") {
               
} else {
                 
}
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>
                字串是否包含某字串
              </h2>
            </div>
            <div class="divContent">
              <code>

            <li>indexOf() 方法可返回某個指定的字串值在字串中首次出現的位置。如果要檢索的字串值沒有出現，則該方法返回 -1。
            </li>
var str = "123";
console.log(str.indexOf("3") != -1 );  // true
            <li>search() 方法用於檢索字串中指定的子字串，或檢索與正則表示式相匹配的子字串。如果沒有找到任何匹配的子串，則返回 -1。。
            </li>
var str = "123";
console.log(str.search("3") != -1 );  // true
        </code>
            </div>
          </div>

        </div>
        <div class="divClass" id="eee">
          <div class="divL">

            <div class="divTitle">
              <h2>
                async 與 await
              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>
function asyncFunc1(url) {
  return new Promise((resolve, reject) => {
     resolve(someValue);         // 完成
     reject("failure reason");   // 拒絕
  });
};

function asyncFunc2(url) {
  return new Promise((resolve, reject) => {
    // resolve() or reject()
  });
};

const asyncCall = async () => {
  const result1 = await asyncFunc1();
  const result2 = await asyncFunc2();
};
          </pre>
        </code>
            </div>
          </div>
          <div class="divR">
            <div class="divTitle">
              <h2>

              </h2>
            </div>
            <div class="divContent">
              <code>
          <pre>

          </pre>
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
        name: "取得現在日期",
        bookmark: "aaa"
      },
      {
        name: "取集合",
        bookmark: "aaa"
      },
      {
        name: "檢查是否為空物件",
        bookmark: "bbb"
      },
      {
        name: "刪除字串中的 '.' ",
        bookmark: "bbb"
      },
      {
        name: "回傳符合條件的元素",
        bookmark: "ccc"
      },
      {
        name: "陣列打平",
        bookmark: "ccc"
      },
      {
        name: "是否為本基測試",
        bookmark: "ddd"
      },
      {
        name: "字串是否包含某字串",
        bookmark: "ddd"
      },
      {
        name: "async 與 await",
        bookmark: "eee"
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