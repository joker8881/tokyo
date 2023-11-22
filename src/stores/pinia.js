import { defineStore } from "pinia";

export default defineStore("data",{
//需要輸入兩個參數，1自建資料庫名稱，2資料庫內容

//與.vue中 script 預設匯出概念相同，只是名稱不同data
    state(){
        return{
        obja: []
        //請在這裡加入新的陣列更應存取，不要使用重複的陣列，例如新資料b就使用陣列 objb
    }
    },

    getters:{
    },

    actions:{
        getData(){
            fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-7B4DB2AF-A0C8-4401-BCFC-9D2BBBF12EDC")
            .then(response => response.json())
            .then(data => {
            this.obja =data
            })
        },
        //請在這邊加入新的資料調取方法，比如說公共設施 getPublic(){}
        getPublic(){
            fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                })
        },
    }

})
