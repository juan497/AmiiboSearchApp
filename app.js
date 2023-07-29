/* eslint-disable no-undef */
const base_url = "https://amiibo-search-ap.onrender.com";
const { createApp } = Vue;


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
                const response = await fetch(`${base_url}/history`);

                const history = await response.json();
                this.history = history;
                //console.log(history);

            }
          },


        search_by: async function () {
            this.searchTermLocked = this.searchTerm.toLowerCase();

            const response = await fetch(`${base_url}/search/${this.picked}?keyword=${this.searchTermLocked}`);
            const amiibos = await response.json();
            this.amiibos = amiibos.results;
            console.log(this.amiibos);



        },
        get_details: async function (amiibo) {
            this.details_on = true;
            console.log(amiibo.id);

            const response = await fetch(
                `${base_url}/search/${amiibo.id}/details?keyword=${this.searchTermLocked}`
            );
            const details = await response.json();
            console.log(details);
            this.details = details;



        },

        get_history: async function (amiibo) {
            const response = await fetch(`${base_url}/history`);
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
