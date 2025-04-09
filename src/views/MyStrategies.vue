<template>
  <div class="p-4 sm:p-6 bg-white min-h-screen text-gray-800">
    <div class="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table class="min-w-[800px] w-full bg-white text-gray-800">
        <thead>
          <tr class="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
            <th class="py-2 px-3 text-left">Strategy</th>
            <th class="py-2 px-3 text-left">Broker</th>
            <th class="py-2 px-3 text-center">Lot Size</th>
            <th class="py-2 px-3 text-center">ReEntry</th>
            <th class="py-2 px-3 text-center">Triggered</th>
            <th class="py-2 px-3 text-center">Active</th>
            <th class="py-2 px-3 text-center">Joined At</th>
            <th class="py-2 px-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody class="text-xs sm:text-sm font-light">
          <tr
            v-for="(item, index) in strategies"
            :key="index"
            class="border-b border-gray-200 hover:bg-gray-50 transition"
          >
            <td class="py-2 px-3 text-left whitespace-nowrap">
              {{ item.strategy }}
            </td>
            <td class="py-2 px-3 text-left">{{ item.broker }}</td>
            <td class="py-2 px-3 text-center">{{ item.lotSize }}</td>
            <td class="py-2 px-3 text-center">{{ item.reEntry }}</td>
            <td class="py-2 px-3 text-center">{{ item.reEntryTriggered }}</td>
            <td class="py-2 px-3 text-center">
              <label class="flex justify-center">
                <input
                  type="checkbox"
                  v-model="item.active"
                  class="toggle-switch"
                />
              </label>
            </td>
            <td class="py-2 px-3 text-center whitespace-nowrap">{{ item.joinedAt }}</td>
            <td class="py-2 px-3">
              <div class="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                <button class="text-blue-600 hover:underline text-xs sm:text-sm">Edit</button>
                <button class="text-red-500 hover:underline text-xs sm:text-sm">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script setup>
import { MyStrategies } from '@/stores/MyStrategyStore'
import { storeToRefs } from 'pinia'

const mystrategies = MyStrategies()
const { strategies } = storeToRefs(mystrategies)
</script>

<style>
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
  content: "";
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
