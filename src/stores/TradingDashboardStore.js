import { ref } from "vue";

// const { defineStore } = require("pinia");
import { defineStore } from "pinia";

export const tradingDashboard = defineStore('tests',()=>{
  // Trade Summary Cards
  const tradeSummary = ref([
    { label: "Total Orders", value: "65" },
    { label: "Total Profit", value: "+1542.00" },
    { label: "Broker Connected", value: "0/10" },
    { label: "Strategy Deployed", value: "05" },
  ]);
  
  // Trade Positions
  const tradePositions = ref([
    { name: "Domain Price Action", amount: "21332" },
    { name: "Domain Trend", amount: "21332" },
  ]);
  
  // Trade List Data
  const tradeList = ref([
    { name: "Domain Price Action", qty: "21332", type: "MIS", pnl: 1532 },
    { name: "Domain Trend", qty: "12321", type: "MIS", pnl: -542 },
    { name: "Scalping Strategy", qty: "4312", type: "INTRADAY", pnl: 734 },
    { name: "Breakout Strategy", qty: "10000", type: "INTRADAY", pnl: -102 },
  ]);
  return {tradeSummary,tradePositions,tradeList}
}
)