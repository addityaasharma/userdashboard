<template>
  <div class="bg-white min-h-screen p-4 sm:p-6 text-gray-900">
    <!-- Orders Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Orders</h1>
      <p class="text-lg font-semibold mt-1">{{ orders.length }} Orders</p>
    </div>

    <!-- Responsive Table -->
    <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table class="min-w-[800px] w-full text-sm sm:text-base bg-white text-gray-800">
        <thead>
          <tr class="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
            <th class="py-3 px-4 text-left whitespace-nowrap">Time</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Broker</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Strategy</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Script</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Quantity</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Price</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Status</th>
            <th class="py-3 px-4 text-left whitespace-nowrap">Product Type</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(order, index) in orders"
            :key="index"
            class="border-b border-gray-200 hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4 whitespace-nowrap">09:13:54</td>
            <td class="py-3 px-4">{{ order.broker }}</td>
            <td class="py-3 px-4">{{ order.strategy }}</td>
            <td class="py-3 px-4">{{ order.script }}</td>
            <td class="py-3 px-4">{{ order.quantity }}</td>
            <td class="py-3 px-4">{{ order.price }}</td>
            <td
              class="py-3 px-4 font-semibold whitespace-nowrap"
              :class="getStatusClass(order.status)"
            >
              {{ order.status }}
            </td>
            <td class="py-3 px-4 whitespace-nowrap">{{ order.productType }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { useOrderStore } from '@/stores/Order'
import { storeToRefs } from 'pinia'

const order = useOrderStore()
const { orders } = storeToRefs(order)
const getStatusClass = order.getStatusClass
</script>

<style>
.success {
  color: #16a34a; /* Tailwind green-600 */
}
.pending {
  color: #f59e0b; /* Tailwind amber-500 */
}
.failed {
  color: #dc2626; /* Tailwind red-600 */
}
</style>
