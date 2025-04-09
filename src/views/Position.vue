<template>
  <div class="bg-white min-h-screen p-4 sm:p-6 text-gray-900">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Positions</h1>
      <p class="text-lg font-semibold mt-1">
        Today's Profit:
        <span :class="totalProfit >= 0 ? 'text-green-600' : 'text-red-500'">
          {{ totalProfit >= 0 ? '+' : '' }}{{ totalProfit.toFixed(2) }}
        </span>
      </p>
    </div>

    <!-- Responsive Table -->
    <div class="overflow-x-auto rounded-lg shadow border border-gray-200">
      <table class="min-w-[900px] w-full text-sm sm:text-base bg-white">
        <thead>
          <tr class="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
            <th class="py-3 px-4 text-left whitespace-nowrap">Strategy</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Broker</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Script</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Product</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Side</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Quantity</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Buy Price</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Sell Price</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Status</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">P&L</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(position, index) in positions"
            :key="index"
            class="border-b border-gray-200 hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4">{{ position.strategy }}</td>
            <td class="py-3 px-4">{{ position.broker }}</td>
            <td class="py-3 px-4">{{ position.script }}</td>
            <td class="py-3 px-4">{{ position.product }}</td>
            <td class="py-3 px-4">{{ position.side }}</td>
            <td class="py-3 px-4">{{ position.quantity }}</td>
            <td class="py-3 px-4 whitespace-nowrap">{{ position.buyPrice }}</td>
            <td class="py-3 px-4 whitespace-nowrap">{{ position.sellPrice }}</td>
            <td
              class="py-3 px-4 font-semibold whitespace-nowrap"
              :class="getStatusColor(position.status)"
            >
              {{ position.status }}
            </td>
            <td
              class="py-3 px-4 font-semibold whitespace-nowrap"
              :class="position.pnl >= 0 ? 'text-green-600' : 'text-red-500'"
            >
              {{ position.pnl >= 0 ? '+' : '' }}{{ position.pnl }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { usePositionsStore } from '@/stores/PositionStore'
import { storeToRefs } from 'pinia'

const position = usePositionsStore()
const { positions, totalProfit } = storeToRefs(position)

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'text-yellow-500'
    case 'closed':
      return 'text-blue-500'
    case 'pending':
      return 'text-purple-500'
    default:
      return 'text-gray-600'
  }
}
</script>

<style>
/* Optional enhancements or transitions can go here */
</style>
