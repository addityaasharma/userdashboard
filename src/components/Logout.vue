<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-amber-100 to-yellow-100">
      <div class="bg-white p-8 rounded-xl shadow-xl text-center w-full max-w-md border border-amber-200">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">You’ve been logged out 🚪</h2>
        <p class="text-gray-600 mb-6">Thanks for using our platform. See you again soon!</p>
        <router-link
          to="/login"
          class="inline-block bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
        >
          Login Again
        </router-link>
       <div class=" hover:bg-white/60 text-black font-semibold px-6 py-2 rounded-lg transition duration-300 mt-4">
            <RouterLink to="/frontpage">Return to Home Page</RouterLink>
       </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  onMounted(() => {
    // Clear all user session data
    localStorage.removeItem('token')
    localStorage.removeItem('user') // if you stored user info
  })
  </script>
  