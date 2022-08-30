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
            <div class="iconView">
                <div class="divClass">
                    <div class="divL">

                        <div class="divTitle">
                            <h2>
                                VueCli設定
                            </h2>
                        </div>
                        <div class="divContent">
                            <code>
          <pre>
            <li>font Awesome</li>
&lt;script src="https://kit.fontawesome.com/cd51d51391.js" crossorigin="anonymous"&gt;&lt;/script&gt;
<a target="_blank" href=" https://fontawesome.com/"> https://fontawesome.com/</a>
            <li>Material Design Icons  </li>
&lt;link rel="stylesheet" href="//cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css"&gt;
<a target="_blank" href="https://materialdesignicons.com/"> https://materialdesignicons.com/</a>
            <li>Google Fonts</li>
&lt;link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"&gt;
<a target="_blank" href="https://material.io/resources/icons/?search=home&icon=add_to_home_screen&style=baseline">https://material.io/resources/icons/?search=home&icon=add_to_home_screen&style=baseline</a>
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
<style lang="scss">
.iconView {
    li {
        margin-top: 50px !important;
        font-size: 24px;
        color: #82c2fd
    }
}
</style>