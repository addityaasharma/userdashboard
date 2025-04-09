<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
      <div class="bg-white text-gray-800 w-full max-w-md rounded-xl p-6 relative shadow-lg">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl">✕</button>
  
        <h2 class="text-xl font-bold mb-4">Broker Info</h2>
  
        <div class="space-y-2">
          <div><strong>Broker:</strong> {{ broker.name }}</div>
          <div><strong>User ID:</strong> {{ broker.userId }}</div>
          <div><strong>Token Date:</strong> {{ broker.tokenDate }}</div>
          <div class="flex items-center gap-2">
            <strong>Active:</strong>
            <input type="checkbox" v-model="broker.active" class="toggle-switch" />
          </div>
        </div>
  
        <div class="mt-6 flex flex-wrap gap-3 justify-end">
          <button class="text-blue-600 hover:underline">✏️ Edit</button>
          <button class="text-indigo-600 hover:underline">📜 Orders/Positions</button>
          <button class="text-red-500 hover:underline">🗑 Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    isOpen: Boolean,
    broker: Object
  })
  const emit = defineEmits(['close'])
  
  function closeModal() {
    emit('close')
  }
  </script>
  
  <style scoped>
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
  