import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore('orderStore', () => {
  const orders = ref([
    { broker: "Angel (A537412)", strategy: "DOMAIN PRICE ACTION (BANKNIFTY)", script: "NIFTY15FEB24C21000 (NFO)", quantity: 502, price: 0, status: "REJECTED @ SELL", productType: "MIS" },
    { broker: "-", strategy: "DOMAIN TREND (NIFTY)", script: "NIFTY15FEB24P21150 (NFO)", quantity: 500, price: 0, status: "COMPLETE @ SELL", productType: "MIS" },
    { broker: "Iifl (AB046230)", strategy: "DOMAIN TREND (BANKNIFTY)", script: "NIFTY15FEB24P21150 (NFO)", quantity: 500, price: 0, status: "COMPLETE @ BUY", productType: "MIS" },
    { broker: "Iifl (AB046230)", strategy: "DOMAIN RANGE BREAKOUT (NIFTY)", script: "NIFTY15FEB24P20000 (NFO)", quantity: 50, price: 1.2, status: "COMPLETE @ BUY", productType: "MIS" },
    { broker: "Iifl (AB046230)", strategy: "DOMAIN RANGE BREAKOUT (BANKNIFTY)", script: "NIFTY15FEB24C22000 (NFO)", quantity: 50, price: 0, status: "REJECTED @ SELL", productType: "MIS" },
    { broker: "Iifl (AB046230)", strategy: "kuldeepsawrd (BANKNIFTY)", script: "FDGTVDSAA (NFO)", quantity: 1, price: 1, status: "SUCCESS @ BUY", productType: "MARKET" },
    { broker: "Angel (A537412)", strategy: "DOMAIN TREND (NIFTY)", script: "hfdh (fhdfh)", quantity: 2, price: 2, status: "OPEN @ dhfgdhfd", productType: "hrty" },
    { broker: "Iifl (AB046230)", strategy: "DOMAIN PRICE ACTION (BANKNIFTY)", script: "SBILIFE24JUNFUT (NFO)", quantity: 2, price: 2, status: "PENDING @ BUY", productType: "MIS" },
    { broker: "Angel (A537412612)", strategy: "DOMAIN RANGE BREAKOUT (BANKNIFTY)", script: "hfdh (fhdfh)", quantity: 2, price: 2, status: "CLOSE @ dhfgdhfd", productType: "hrty" },
  ]);

  // Function to get status class (for UI styling)
  const getStatusClass = (status) => {
    if (status.includes("COMPLETE")) return "text-green-500";
    if (status.includes("REJECTED")) return "text-red-500";
    if (status.includes("SUCCESS")) return "text-blue-500";
    if (status.includes("PENDING")) return "text-yellow-500";
    return "text-gray-700";
  };
  return { orders, getStatusClass };
});
