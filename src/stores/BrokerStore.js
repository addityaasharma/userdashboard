import { defineStore } from "pinia";
import { ref } from "vue";
export const useBrokerStore = defineStore('data',()=>{
    const brokers = ref([
          { name: "Angel", userId: "A537412", tokenDate: "2024-08-24 09:57:39", active: false },
          { name: "Iifl", userId: "AB046230", tokenDate: "2024-08-20 16:32:31", active: false },
          { name: "Zerodha", userId: "A5374126123344", tokenDate: "2024-08-13 06:56:59", active: true },
          { name: "Angel", userId: "A537412612", tokenDate: "2024-07-10 10:22:17", active: false },
          { name: "Iifl", userId: "rqwerrwerwer", tokenDate: "2024-08-14 12:39:36", active: false },
          { name: "Mhtrade", userId: "ryerye", tokenDate: "2024-05-02 05:52:53", active: true },
          { name: "Shoonya", userId: "fsdfsdfsd", tokenDate: "2000-01-01 00:00:00", active: false },
          { name: "Dhan", userId: "stertretr", tokenDate: "2000-01-01 00:00:00", active: false },
          { name: "Alice", userId: "HFGR53455", tokenDate: "2000-01-01 00:00:00", active: false },
    ]);
     return{
        brokers
     }
})