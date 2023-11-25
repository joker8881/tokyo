import { defineStore } from "pinia";

export default defineStore("data",{
//需要輸入兩個參數，1自建資料庫名稱，2資料庫內容

//與.vue中 script 預設匯出概念相同，只是名稱不同data
    state(){
        return{
        obja: [],
        objs: [],
        objb: [],
        objc: [],
        x:"",
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
            fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
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
        ck(){
            const idarr = document.querySelectorAll("path[name='area']")
            // console.dir(idarr)
            idarr.forEach(item=>{
                item.addEventListener("click",()=>{
                    // console.dir(item)
                    console.log(item.id)
                    this.x = item.id
                })
            })
        }
    }
    }
)