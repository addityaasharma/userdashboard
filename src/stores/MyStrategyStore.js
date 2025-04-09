import { defineStore } from "pinia";
import { ref } from "vue";

export const MyStrategies = defineStore('myStrategy',()=>{
    const strategies = ref([
        {
            strategy: "DOMAIN RANGE BREAKOUT(NIFTY)",
            broker: "iifl (A53456474126)",
            lotSize: 1,
            reEntry: 1,
            reEntryTriggered: 0,
            active: false,
            joinedAt: "2024-08-30 09:13:54",
          },
          {
            strategy: "Example Strategy(BANKNIFTY)",
            broker: "angel (A537412)",
            lotSize: 2,
            reEntry: 2,
            reEntryTriggered: 0,
            active: true,
            joinedAt: "2024-08-30 09:13:54",
          },
    ]);
    return {strategies}
})