/* eslint-disable no-undef */
const { createApp } = Vue;

const fun = async() => {
    //this is to dynamically load the search names from api
    const set = new Set();
    set.add("hi");
    set.add("zi");
    set.add("ai");

    //const response = await fetch("https://amiiboapi.com/api/character/");
    //console.log(response.json());
 
    
    //console.log(set);
    const arr = Array.from(set);
    arr.sort();
    console.log(arr);

    return arr

};

createApp({
    data() {
        return {
            //balls: fun(),
            details_on:false,
            history:{},
            search_mode: true,
            button_mode: "show history",
            picked:"character",
            searchTerm: "",
            searchTermLocked:"",
            amiibos: {},
            isPlaying: false,
            isLoadedImage: true,
            details:{}
        };
    },
    methods: {


        change_button_mode: async function () {
            console.log(this.balls);
            this.search_mode = ! this.search_mode;
            this.button_mode = this.button_mode === "show history" ? "search" : "show history";


            if (this.search_mode === false){
                const response = await fetch(`http://localhost:8888/history`);

                const history = await response.json();
                this.history = history;
                //console.log(history);

            }
          },


        search_by: async function () {
            this.searchTermLocked = this.searchTerm.toLowerCase();

            const response = await fetch(`http://localhost:8888/search/${this.picked}?keyword=${this.searchTermLocked}`);
            const amiibos = await response.json();
            this.amiibos = amiibos.results;
            console.log(this.amiibos);



        },
        get_details: async function (amiibo) {
            this.details_on = true;
            console.log(amiibo.id);

            const response = await fetch(
                `http://localhost:8888/search/${amiibo.id}/details?keyword=${this.searchTermLocked}`
            );
            const details = await response.json();
            console.log(details);
            this.details = details;



        },

        get_history: async function (amiibo) {
            const response = await fetch(`http://localhost:8888/history`);
            const history = await response.json();
            this.history = history;
            console.log(history);

            // this.history = amiibos.results;
            // console.log(this.amiibos);

        },
        onImageLoad() {
            this.isLoadedImage = true;
        }
    }
}).mount('#app');
