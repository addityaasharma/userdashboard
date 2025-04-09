<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div class="bg-zinc-900 text-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
      <button @click="emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-white">
        <XIcon class="w-5 h-5" />
      </button>

      <div class="flex items-center space-x-4 mb-6">
        <img :src="profile.avatar" alt="Avatar" class="w-16 h-16 rounded-full border-2 border-purple-500" />
        <div>
          <h2 class="text-xl font-semibold">{{ profile.name }}</h2>
          <p class="text-sm text-gray-400">{{ profile.email }}</p>
        </div>
      </div>

      <div class="space-y-4">
        <div>
          <label class="text-sm text-gray-400">Full Name</label>
          <input v-model="profile.name" class="w-full mt-1 bg-zinc-800 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
        </div>

        <div>
          <label class="text-sm text-gray-400">Email</label>
          <input v-model="profile.email" class="w-full mt-1 bg-zinc-800 text-white p-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>

      <div class="mt-6 flex justify-end space-x-4">
        <button @click="emit('close')" class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">Cancel</button>
        <button @click="saveProfile" class="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-semibold">Save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XIcon } from 'lucide-vue-next' // Make sure it's installed: npm i lucide-vue-next

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const profile = ref({
  avatar: 'https://i.pravatar.cc/150?img=8',
  name: 'John Doe',
  email: 'john.doe@example.com',
})

function saveProfile() {
  console.log('Profile saved:', profile.value)
  emit('close')
}
</script>
