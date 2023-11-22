import { defineStore } from "pinia";

export default defineStore("data",{
//需要輸入兩個參數，1自建資料庫名稱，2資料庫內容

//與.vue中 script 預設匯出概念相同，只是名稱不同data
    state(){
        return{
        obja: [],
        objs: [],
        objb: [],
        objc: []
        //請在這裡加入新的陣列更應存取，不要使用重複的陣列，例如新資料b就使用陣列 objb
    }
    },

    getters:{
    },

    actions:{
        getWeather(){
            fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-7B4DB2AF-A0C8-4401-BCFC-9D2BBBF12EDC")
            .then(response => response.json())
            .then(data => {
            this.obja =data
            })
        },
        getPublic(){
            fetch("")
            .then(response => response.json())
            .then(data => {
            this.objc =data
            })
        },
        getWenhua(){
            fetch("")
            .then(response => response.json())
            .then(data => {
            this.objb =data
            })
        },
        getSport(){
            fetch("")
            .then(response => response.json())
            .then(data => {
            this.objs =data
            })
        },
        // ck(x){
        //     cc = x.getAttribute('id')
        //     console.log(cc)
        //     let obj1 = this.obja.records.location.filter(function(x, index, array){
        //       return x.locationName == cc;
        //     });
        //   console.log(obj1[0].locationName)
        //   console.log(obj1[0])
        //   a.innerText = obj1[0].locationName
        //     //=================這是找縣市名稱======================
        //     console.log(obj1[0].weatherElement[0].time[cityTime].parameter.parameterName)
        //     d.innerText = obj1[0].weatherElement[0].time[cityTime].parameter.parameterName
        //     //=================這是天氣型態======================
        //     console.log(obj1[0].weatherElement[1].time[cityTime].parameter.parameterName)
        //     e.innerText = "降雨機率 " + obj1[0].weatherElement[1].time[cityTime].parameter.parameterName + " %"
        //     //=================這是降雨機率======================
        //     console.log(obj1[0].weatherElement[2].time[cityTime].parameter.parameterName)
        //     b.innerText = "最低溫度 " + obj1[0].weatherElement[2].time[cityTime].parameter.parameterName + " ℃"
        //     //=================這是最低溫度======================
        //     console.log(obj1[0].weatherElement[4].time[cityTime].parameter.parameterName)
        //     c.innerText = "最高溫度 " + obj1[0].weatherElement[4].time[cityTime].parameter.parameterName + " ℃"
        //     //=================這是最高溫度======================
        // }
          //要怎麼只透過點擊物件就取得物件的名稱(onclick="ck(this);"使用getAttribute)。
        //請在這邊加入新的資料調取方法，比如說公共設施 getPublic(){}
    }

})