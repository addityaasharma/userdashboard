<template>
  <div class="bg-white min-h-screen p-4 sm:p-6 text-gray-800">
    <!-- Add New Broker Button -->
    <div class="mb-4 flex justify-between items-center flex-wrap gap-4">
      <h1 class="text-lg sm:text-xl font-semibold">Brokers</h1>
      <button
        class="bg-blue-600 text-white px-4 py-2 text-sm sm:text-base rounded-lg shadow hover:bg-blue-700 transition">
        Add New Broker
      </button>
    </div>

    <!-- Brokers Table -->
    <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table class="min-w-full bg-white text-gray-800 hidden md:table">
        <thead>
          <tr class="bg-gray-100 uppercase text-xs sm:text-sm">
            <th class="py-3 px-4 text-left">Broker</th>
            <th class="py-3 px-4 text-left">Broker UserId</th>
            <th class="py-3 px-4 text-left">Token Date</th>
            <th class="py-3 px-4 text-center">Active</th>
            <th class="py-3 px-4 text-center">Connect</th>
            <th class="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr v-for="(broker, index) in brokers" :key="index"
            class="border-b border-gray-200 hover:bg-gray-50 transition">
            <td class="py-3 px-4 text-left flex items-center">
              <span class="ml-2 font-medium">{{ broker.name }}</span>
            </td>
            <td class="py-3 px-4 text-left">{{ broker.userId }}</td>
            <td class="py-3 px-4 text-left">{{ broker.tokenDate }}</td>
            <td class="py-3 px-4 text-center">
              <label class="flex justify-center cursor-pointer">
                <input type="checkbox" v-model="broker.active" class="toggle-switch" />
              </label>
            </td>
            <td class="py-3 px-4 text-center">
              <button class="text-blue-600 hover:underline">🔗 Connect</button>
            </td>
            <td class="py-3 px-4 text-center flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center">
              <button class="text-blue-600 hover:underline">✏️ Edit</button>
              <button class="text-indigo-600 hover:underline">
                📜 Orders/Positions
              </button>
              <button class="text-red-500 hover:underline">🗑 Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Mobile Responsive Card Layout -->
      <div class="md:hidden space-y-4">
        <div v-for="(broker, index) in brokers" :key="index" class="border border-gray-200 rounded-lg p-4 shadow-sm">
          <div class="mb-2">
            <strong>Broker:</strong> {{ broker.name }}
          </div>
          <div class="mb-2">
            <strong>User ID:</strong> {{ broker.userId }}
          </div>
          <div class="mb-2">
            <strong>Token Date:</strong> {{ broker.tokenDate }}
          </div>
          <div class="mb-2 flex items-center gap-2">
            <strong>Active:</strong>
            <input type="checkbox" v-model="broker.active" class="toggle-switch" />
          </div>
          <div class="mb-2">
            <button class="text-blue-600 hover:underline">🔗 Connect</button>
          </div>
          <div class="flex flex-col sm:flex-row gap-2 mt-2">
            <button class="text-blue-600 hover:underline">✏️ Edit</button>
            <button class="text-indigo-600 hover:underline">
              📜 Orders/Positions
            </button>
            <button class="text-red-500 hover:underline">🗑 Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBrokerStore } from '@/stores/BrokerStore'
import { storeToRefs } from 'pinia'

const broker = useBrokerStore()
const { brokers } = storeToRefs(broker)
</script>
<style>
/* Toggle Switch */
.toggle-switch {
  appearance: none;
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 999px;
  position: relative;
  transition: background 0.3s;
}
.toggle-switch:checked {
  background: #2563eb;
}
.toggle-switch::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: transform 0.3s;
}
.toggle-switch:checked::before {
  transform: translateX(20px);
}
</style>
