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
            <div class="iconView">
                <div class="divClass">
                    <div class="divL">

                        <div class="divContent">

                            <vue_chart></vue_chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import vue_chart from "../components/vue-chart.vue"
export default {
    components: { vue_chart },
    data: () => ({
        display: false,
        menu: [
            {
                name: "vue-chart",
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