<template>
  <div class="bg-white min-h-screen p-6 text-gray-800">
    <!-- Navigation Tabs -->
    <div class="flex space-x-4 bg-gray-100 p-3 rounded-lg shadow mb-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out"
        :class="activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-blue-500'"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Strategy Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(strategy, index) in strategies"
        :key="index"
        class="bg-white rounded-xl border border-gray-200 shadow-sm p-4 transition hover:shadow-md"
      >
        <!-- Header -->
        <div class="bg-blue-600 text-white text-center py-2 rounded-md font-semibold">
          {{ strategy.type }}
        </div>

        <!-- Strategy Details -->
        <div class="py-4">
          <h2 class="text-lg font-semibold flex items-center">
            <span class="ml-2">{{ strategy.name }}</span>
          </h2>

          <!-- Chart Box -->
          <div class="h-32 mt-3 rounded-md overflow-hidden bg-gray-100 p-2 relative">
            <Line
              v-if="strategy.positions?.length > 0"
              :data="chartData"
              :options="chartOptions"
              class="absolute inset-0"
            />
            <p
              v-else
              class="text-center text-gray-400 h-full flex items-center justify-center"
            >
              No Positions
            </p>
          </div>

          <!-- PNL & Risk Indicator -->
          <div class="flex justify-between items-center mt-4">
            <p class="text-lg font-semibold">
              Total PNL:
              <span class="text-green-600">+0.00</span>
            </p>
            <div class="flex items-center space-x-2">
              <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                HIGH
              </span>
            </div>
          </div>

          <!-- Capital Required -->
          <p class="text-gray-500 text-sm mt-2">
            REQUIRED CAPITAL: ₹15K PER LOT
          </p>
        </div>

        <!-- Actions -->
        <div class="flex justify-between mt-4">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-200"
          >
            Subscribe
          </button>
          <button
            class="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white transition duration-200"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'

import { useStrategyStore } from '@/stores/strats'
import { storeToRefs } from 'pinia'

// Register ChartJS modules
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

// Get store
const strategy = useStrategyStore()
const { activeTab, tabs, strategies } = storeToRefs(strategy)

// Dummy Chart Data (shared for all cards)
const chartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'PNL',
      data: [0, 200, -100, 300, 150],
      borderColor: '#3B82F6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    x: { display: false },
    y: { display: false }
  },
  elements: {
    point: { radius: 0 }
  }
}
</script>
