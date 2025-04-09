<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen p-6 text-gray-800 dark:text-gray-100">
    <!-- Navigation Tabs -->
    <div class="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow mb-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="px-4 py-2 text-sm font-semibold transition duration-200 ease-in-out"
        :class="activeTab === tab
          ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400'
          : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'"
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
        class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-4 transition hover:shadow-md"
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

          <!-- PNL Chart Placeholder or Status -->
          <div class="h-32 bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-400 mt-3 rounded-md">
            {{ strategy.positions?.length > 0 ? 'Chart Placeholder' : 'No Positions' }}
          </div>

          <!-- PNL & Risk Indicator -->
          <div class="flex justify-between items-center mt-4">
            <p class="text-lg font-semibold">
              Total PNL:
              <span
                :class="0 >= 0 ? 'text-green-600' : 'text-red-500'"
              >
                {{ 0 >= 0 ? '+' : '' }}0.00
              </span>
            </p>
            <div class="flex items-center space-x-2">
              <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                HIGH
              </span>
            </div>
          </div>

          <!-- Capital Required -->
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">
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
import { useStrategyStore } from '@/stores/strats'
import { storeToRefs } from 'pinia'

const strategy = useStrategyStore()
const { activeTab, tabs, strategies } = storeToRefs(strategy)
</script>

<style>
/* Add any optional transition or hover effects here */
</style>
