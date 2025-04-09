<template>
    <div class="tradingview-widget-container">
      <div id="tradingview_chart"></div>
    </div>
  </template>
  
  <script>
  export default{
    name: "TradingViewChart",
    mounted() {
      this.loadTradingViewChart();
    },
    methods: {
      loadTradingViewChart() 
      {
        if (window.TradingView) {
          new window.TradingView.widget({
            container_id: "tradingview_chart",
            width: "100%",
            height:"100%",
            symbol: "NASDAQ:AAPL", // Change this to the desired stock symbol
            interval: "D",
            theme: "dark", // Changed to dark theme for black background
            style: "1",
            locale: "en",
            toolbar_bg: "#ffffff", // Black toolbar background
            enable_publishing: false,
            hide_top_toolbar: false,
            hide_legend: false,
            allow_symbol_change: true,
            studies: ["MACD@tv-basicstudies"],
          });
        } else {
          const script = document.createElement("script");
          script.src = "https://s3.tradingview.com/tv.js";
          script.async = true;
          script.onload = () => this.loadTradingViewChart();
          document.body.appendChild(script);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .tradingview-widget-container {
    width: 100%;
    height: 500px;
    background-color: white; /* Set background color to black */
  }
  </style>