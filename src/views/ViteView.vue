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
            <div class="cliView">
                <div class="divClass" id="aaa">
                    <div class="divL">

                        <div class="divTitle">
                            <h2>
                                Vue Vite 設定
                            </h2>
                        </div>
                        <div class="divContent">

                            <div style="margin-left:20px">
                                <ol>
                                    <li>npm init vite</li>
                                    <li>[project name]</li>
                                    <li>cd [project name]</li>
                                    <li>npm install</li>
                                    <li>npm run dev</li>
                                </ol>
                            </div>

                            <code>
            <pre>
            <li>vite.config.js內輸入 :
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
	base:''
})


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
                name: "Vue Vite 設定",
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
