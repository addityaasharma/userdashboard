import { defineStore } from "pinia";
import { ref } from "vue";

export const useStrategyStore = defineStore("strategyStore", () => {
  const activeTab = ref("Elite");
  const tabs = ref([
    "Essential Nifty",
    "Essential Banknifty",
    "Monthly",
    "Half Yearly",
    "Testpa",
    "Elite",
    "Example Plan",
    "New Plan",
  ]);

  const strategies = ref([
    { type: "NIFTY", name: "kuldeepmnwe we" },
    { type: "BANKNIFTY", name: "Example Strategy" },
    { type: "BANKNIFTY", name: "Example Strategy" },
    { type: "BANKNIFTY", name: "DOMAIN OCILLATOR" },
    { type: "BANKNIFTY", name: "DOMAIN RANGE BREAKOUT" },
    { type: "NIFTY", name: "DOMAIN RANGE BREAKOUT" },
  ]);

  return { activeTab, tabs, strategies };
});
