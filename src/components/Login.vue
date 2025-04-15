<template>
    <div class="min-h-screen bg-gradient-to-r from-amber-100 via-yellow-200 to-orange-100 flex items-center justify-center px-4 py-10">
      <div class="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-amber-200 relative">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back 👋</h2>
        
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              v-model="id.name"
              placeholder="John Doe"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              v-model="id.mail"
              placeholder="you@example.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              v-model="id.number"
              placeholder="9876543210"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
  
        <p class="text-sm text-gray-500 text-center mt-6">
          Don't have an account?
          <router-link to="/signup" class="text-amber-600 hover:underline">SignUp here</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const id = ref({
    mail: '',
    name: '',
    number: ''
  })
  
  const router = useRouter()
  
  const handleSubmit = () => {
    console.log(id.value)
  
    // Mock login
    localStorage.setItem('token', '123456')
    router.push('/')
  
    // Reset form
    id.value = {
      mail: '',
      name: '',
      number: ''
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  
