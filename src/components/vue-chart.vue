<template>
    <div class="home all">
        <div class="vue-menu">

        </div>
        <div class="vue-content">
            <div class="iconView">
                <div class="divClass">
                    <div class="divL">
                        <div class="divTitle">
                            <h1>
                                vue-chart
                            </h1>
                            <div style="margin-top:50px ; display:flex">
                                <v-radio-group v-model="inline" inline>
                                    <v-radio label="長條圖" value="1"></v-radio>
                                    <v-radio label="折線圖" value="2"></v-radio>
                                    <v-radio label="圓餅圖" value="3"></v-radio>
                                </v-radio-group>
                                <div style="font-size:32px">
                                    <i class="fa-solid fa-image" onclick="canvas()"></i>
                                    <i class="fa-solid fa-file-excel" style="margin:0 20px"></i>
                                </div>
                            </div>
                        </div>
                        <div class="specific">
                            <Bar v-if="inline == 1" :chart-options="longSet.chartOptions"
                                :chart-data="longSet.chartData" :chart-id="longSet.chartId" :width="longSet.width"
                                :height="longSet.height" />

                            <Line v-if="inline == 2" :chart-options="longSet.chartOptions"
                                :chart-data="longSet.chartData" :chart-id="longSet.chartId" :width="longSet.width"
                                :height="longSet.height" />
                            <Pie style="width:500px" v-if="inline == 3" :chart-options="PieSet.chartOptions"
                                :chart-data="PieSet.chartData" :chart-id="PieSet.chartId" :width="PieSet.width"
                                :height="PieSet.height" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
import { Bar, Line, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'

import html2canvas from "html2canvas"

ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale, LineElement, PointElement)
export default {
    name: 'BarChart',
    components: { Bar, Line, Pie },
    data: () => ({
        inline: "1",
        display: false,
        longSet: {
            chartId: {
                type: String,
                default: 'bar-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: 100
            },
            height: 600,
            chartData: {
                labels: ['January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'],
                datasets: [
                    {
                        label: 'girl',
                        backgroundColor: '#f87979',
                        borderColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    },
                    {
                        label: 'boy',
                        backgroundColor: '#0971F1',
                        borderColor: '#0971F1',
                        data: [20, 30, 11, 50, 5, 30, 45, 90, 60, 10, 10, 19]
                    }
                ]
            },
            chartOptions: {
                responsive: true
            }
        },
        PieSet: {
            chartId: {
                type: String,
                default: 'bar-chart'
            },
            datasetIdKey: {
                type: String,
                default: 'label'
            },
            width: {
                type: Number,
                default: "80"
            },
            height: {
                type: Number,
                default: 100
            },
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: {
                responsive: true
            }
        },
        menu: [
            {
                name: "vue-chart",
                bookmark: "aaa"
            }
        ],

    }),
    methods: {
        canvasDownload() {
            console.log(111);
            html2canvas(document.querySelector('.specific'), {
                onrendered: function (canvas) {
                    // document.body.appendChild(canvas);
                    return Canvas2Image.saveAsPNG(canvas);
                }
            });
            console.log(222);
        }
    },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
.iconView {
    li {
        margin-top: 50px !important;
        font-size: 24px;
        color: #82c2fd
    }
}

.divClass .divTitle {
    color: #EDB2AE;
    max-width: 100%;
}

.divClass {
    border-bottom: 0px solid #363636;
    padding: 10px;
    display: flex;
    font-size: 18px;
    flex-wrap: wrap;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  background-color: #fff;
  padding-left: 15px;
}
.specific {
    padding:20px;
  background-color: #fff;
}
</style>