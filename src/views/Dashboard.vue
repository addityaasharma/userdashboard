<template>
  <!-- Top Summary Boxes -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
    <div class="bg-yellow-100 text-gray-800 p-4 rounded-2xl shadow flex items-center justify-between">
      <div>
        <h3 class="text-lg font-semibold">Brokers Added</h3>
        <p class="text-2xl font-bold">3</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 8h10M7 12h6m-6 4h10M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>

    <div class="bg-green-100 text-gray-800 p-4 rounded-2xl shadow flex items-center justify-between">
      <div>
        <h3 class="text-lg font-semibold">Total Profit</h3>
        <p class="text-2xl font-bold">₹ 9,850</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 8c1.657 0 3 1.567 3 3.5S13.657 15 12 15s-3-1.567-3-3.5S10.343 8 12 8zm0 0V4m0 0a4 4 0 00-4 4v1h8V8a4 4 0 00-4-4z" />
      </svg>
    </div>

    <div class="bg-purple-100 text-gray-800 p-4 rounded-2xl shadow flex items-center justify-between">
      <div>
        <h3 class="text-lg font-semibold">Strategies</h3>
        <p class="text-2xl font-bold">7</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 6h16M4 10h16m-7 4h7m-7 4h7M4 14h3m0 4h3" />
      </svg>
    </div>
  </div>

  <div class="min-h-screen bg-white text-gray-800 p-4 sm:p-6">
    <div class="flex flex-col lg:flex-row gap-4">
      <!-- Left: Portfolio -->
      <div class="w-full lg:w-2/3">
        <div class="bg-gray-100 p-4 rounded-2xl shadow">
          <h2 class="text-xl font-bold mb-4">Portfolio</h2>
          <canvas ref="portfolioChart" class="w-full h-64"></canvas>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div class="bg-green-100 p-4 rounded-2xl shadow">
            <h3 class="text-lg font-semibold">Profit</h3>
            <canvas ref="profitChart" class="w-full h-32"></canvas>
          </div>
          <div class="bg-purple-100 p-4 rounded-2xl shadow">
            <h3 class="text-lg font-semibold">Win Rate</h3>
            <canvas ref="winrateChart" class="w-full h-32"></canvas>
          </div>
        </div>
      </div>

      <!-- Right: Trade Selection -->
      <div class="w-full lg:w-1/3">
        <div class="bg-gray-100 p-4 rounded-2xl shadow">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Trade Selection</h2>
            <button class="bg-yellow-400 text-white px-3 py-1 rounded shadow">
              Filter
            </button>
          </div>
          <div class="flex justify-center gap-2 mb-4">
            <button :class="isLive ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'" @click="isLive = true"
              class="px-4 py-1 rounded">
              Live
            </button>
            <button :class="!isLive ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-800'" @click="isLive = false"
              class="px-4 py-1 rounded">
              Paper
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="bg-gray-200">
                <tr>
                  <th class="px-4 py-2 text-left">Strategy</th>
                  <th class="px-4 py-2 text-left">PNL</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(trade, index) in trades" :key="index" class="border-t border-gray-300">
                  <td class="px-4 py-2">{{ trade.strategy }}</td>
                  <td class="px-4 py-2 font-medium" :class="trade.pnl >= 0 ? 'text-green-600' : 'text-red-500'">
                    ₹{{ trade.pnl }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Additional Trade Data Table -->
        <div class="bg-gray-100 p-4 rounded-2xl shadow mt-4">
          <h2 class="text-xl font-bold mb-4">Trade Summary</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead class="bg-gray-200">
                <tr>
                  <th class="px-4 py-2 text-left">Strategy Name</th>
                  <th class="px-4 py-2 text-left">PNL</th>
                  <th class="px-4 py-2 text-left">Qty</th>
                  <th class="px-4 py-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-300">
                  <td class="px-4 py-2">Breakout</td>
                  <td class="px-4 py-2 text-green-600 font-medium">₹1200</td>
                  <td class="px-4 py-2">30</td>
                  <td class="px-4 py-2">Intraday</td>
                </tr>
                <tr class="border-t border-gray-300">
                  <td class="px-4 py-2">Reversal</td>
                  <td class="px-4 py-2 text-red-500 font-medium">-₹450</td>
                  <td class="px-4 py-2">15</td>
                  <td class="px-4 py-2">Swing</td>
                </tr>
                <tr class="border-t border-gray-300">
                  <td class="px-4 py-2">Gap-Up</td>
                  <td class="px-4 py-2 text-green-600 font-medium">₹900</td>
                  <td class="px-4 py-2">20</td>
                  <td class="px-4 py-2">Positional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Blog Reading Section -->
        <div class="bg-gray-100 p-4 rounded-2xl shadow mt-4">
          <h2 class="text-xl font-bold mb-4">Blog Reading</h2>
          <div class="rounded-xl overflow-hidden mb-4">
            <img src="https://cdn.pixabay.com/photo/2023/08/23/06/29/forex-8207730_1280.jpg" alt="Blog Banner"
              class="w-full h-48 object-cover rounded-xl" />
          </div>
          <ul class="space-y-3">
            <li class="bg-white p-3 rounded-xl shadow hover:bg-yellow-100 transition">
              <h3 class="font-semibold">Top 5 Trading Strategies That Work in 2025</h3>
              <p class="text-sm text-gray-600">Learn how professional traders stay consistent with these proven methods.
              </p>
            </li>
            <li class="bg-white p-3 rounded-xl shadow hover:bg-yellow-100 transition">
              <h3 class="font-semibold">How to Manage Risk Like a Pro</h3>
              <p class="text-sm text-gray-600">Master the psychology and mathematics of effective risk control.</p>
            </li>
            <li class="bg-white p-3 rounded-xl shadow hover:bg-yellow-100 transition">
              <h3 class="font-semibold">Why Paper Trading Builds Confidence</h3>
              <p class="text-sm text-gray-600">Discover the importance of practice in your trading journey.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- const int  -->
<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data() {
    return {
      isLive: true,
      trades: [
        { strategy: 'Scalping', pnl: 500 },
        { strategy: 'Swing', pnl: -250 },
        { strategy: 'Breakout', pnl: 700 },
        { strategy: 'Reversal', pnl: 150 },
      ],
    }
  },
  mounted() {
    this.createPortfolioChart()
    this.createProfitChart()
    this.createWinrateChart()
  },
  methods: {
    createPortfolioChart() {
      new Chart(this.$refs.portfolioChart.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['AAPL', 'TSLA', 'GOOGL', 'AMZN', 'MSFT'],
          datasets: [
            {
              label: 'Value ₹',
              data: [30000, 24000, 18000, 22000, 28000],
              backgroundColor: '#6366f1'
            }
          ]
        },
        options: {
          scales: {
            y: { beginAtZero: true, ticks: { color: '#111' } },
            x: { ticks: { color: '#111' } }
          },
          plugins: {
            legend: {
              labels: { color: '#111' }
            }
          }
        }
      })
    },
    createProfitChart() {
      new Chart(this.$refs.profitChart.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [
            {
              label: 'Profit ₹',
              data: [1200, 1500, 1300, 1600, 1800],
              borderColor: '#16a34a',
              backgroundColor: 'rgba(22, 163, 74, 0.2)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { ticks: { color: '#111' } },
            x: { ticks: { color: '#111' } }
          }
        }
      })
    },
    createWinrateChart() {
      new Chart(this.$refs.winrateChart.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Wins', 'Losses'],
          datasets: [{
            label: 'Win Rate',
            data: [75, 25],
            backgroundColor: ['#8b5cf6', '#e5e7eb'],
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            legend: {
              labels: { color: '#111' }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes colorChange {

  0%,
  100% {
    background-color: rgba(59, 130, 246, 0.4);
    border-color: #3b82f6;
  }

  50% {
    background-color: rgba(248, 113, 113, 0.4);
    border-color: #f87171;
  }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}

.animated-box {
  border-width: 1px;
  border-radius: 0.5rem;
  backdrop-filter: blur(20px);
  width: 200px;
  height: 60px;
  animation: colorChange 1s infinite alternate;
}
</style>
