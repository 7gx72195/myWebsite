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
            <div class="cliView">
                <div class="divClass" id="aaa">
                    <div class="divL">

                        <div class="divTitle">
                            <h2>
                                Vue CLI 設定
                            </h2>
                        </div>
                        <div class="divContent">
                            <code>
          <pre>
            <li>於Public資料夾下新增資料夾demo_tools</li>
            <li>於專案根目錄 ( packjson.json 同層 )新增檔案 vue.config.js取代原從@vue/cli-serve/lib/option.js 內改參數的方式</li>
            <li>參考網址 <a href="https://cli.vuejs.org/zh/config">https://cli.vuejs.org/zh/config</a></li>
            <li>vue.config.js內輸入 :
module.exports = {
    productionSourceMap:false,
    indexPath: 'index.html',
    assetsDir: 'tools',
    publicPath : '',
    filenameHashing: false,       //檔名不要出現雜湊值
}

            </li>
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
                name: "Vue CLI 設定",
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
