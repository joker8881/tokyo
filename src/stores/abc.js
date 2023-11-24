import { defineStore } from "pinia";

export default defineStore("data",{
//需要輸入兩個參數，1自建資料庫名稱，2資料庫內容

//與.vue中 script 預設匯出概念相同，只是名稱不同data
    state(){
        return{
        objs: [],
        objb: [],
        objc: [],
//以下是天氣資料用的
        objw1:[], //千代田區
        objw2:[], //練馬區
        objw3:[], 
        objw4:[],
        objw5:[],
        objw6:[],
        objw7:[],
        objw8:[],
        objw9:[],
        objw10:[],
        objw11:[],
        objw12:[],
        objw13:[],
        objw14:[],
        objw15:[],
        objw16:[],
        objw17:[],
        objw18:[],
        objw19:[],
        objw20:[],
        objw21:[],
        objw22:[],
        objw23:[],
        //請在這裡加入新的陣列更應存取，不要使用重複的陣列，例如新資料b就使用陣列 objb
        x:"",
    }
    },

    getters:{
    },

    actions:{
        getWeather(){
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.684884&lon=139.753708&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw1 =data
            })
            //千代田區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.737289&lon=139.653920&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw2 =data
            })
            //練馬區
            fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
            .then(response => response.json())
            .then(data => {
            this.objw3 =data
            })
            // //練馬區
        },
        getPublic(){
            fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
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
        },
    }

})