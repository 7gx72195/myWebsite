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
            <div class="axiosView">
                <div class="divClass" id="aaa">
                    <div class="divL">

                        <div class="divTitle">
                            <h2>
                                VueCli設定
                            </h2>
                        </div>
                        <div class="divContent">
                            <code>
          <pre>
<ol>
    <li> NPM : npm install axios --save </li>
    <li> CDN : &lt;script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"&gt;&lt;/script&gt; </li>
    <li>main.js內加入 :　window.axios = require('axios');</li>
</ol>
<ul>
<li>語法 :</li>
</ul>
    axi() {
        axios({
            method: "get",
            baseURL: "",
            url: "test1.php",
            "Content-Type": "application/json"
        })
        .then(result => {
            console.log(result.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
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
                name: "VueCli設定",
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
