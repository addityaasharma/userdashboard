import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePositionsStore = defineStore('positions', () => {
  const positions = ref([
    { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2420000PE(NFO)", product: "INTRADAY", side: "SELL", quantity: 500, buyPrice: "09:13:54@ 0", sellPrice: "09:13:54@ 0", status: "CLOSED", pnl: 0 },
    { strategy: "DOMAIN PRICE ACTION(BANKNIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2422000CE(NFO)", product: "INTRADAY", side: "BUY", quantity: 500, buyPrice: "09:13:54@ 0", sellPrice: "09:13:54@ 7", status: "CLOSED", pnl: 0 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2420000PE(NFO)", product: "INTRADAY", side: "SELL", quantity: 551, buyPrice: "-", sellPrice: "09:13:54@ 5", status: "OPEN", pnl: 1653 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB242000000PE(NFO)", product: "INTRADAY", side: "BUY", quantity: 51, buyPrice: "09:13:54@ 1.2", sellPrice: "-", status: "OPEN", pnl: 0 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 10, buyPrice: "09:13:54@ 800", sellPrice: "-", status: "OPEN", pnl: 0 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 10, buyPrice: "09:13:54@ 810.95", sellPrice: "09:13:54@ 800", status: "CLOSED", pnl: -109.5 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 813.25", sellPrice: "-", status: "OPEN", pnl: 0 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 812.1", sellPrice: "09:13:54@ 0", status: "CLOSING", pnl: 0 },
    { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "MIS", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 802.75", sellPrice: "09:13:54@ 802.1", status: "CLOSED", pnl: -0.65 },
  ]);

  // Computed property to get total profit/loss
  const totalProfit = computed(() => {
    return positions.value.reduce((sum, trade) => sum + trade.pnl, 0);
  });

  return {
    positions,
    totalProfit,
  };
});
