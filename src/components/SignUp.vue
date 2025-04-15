<template>
    <div class="min-h-screen bg-gradient-to-r from-orange-100 via-yellow-200 to-amber-100 flex items-center justify-center px-4 py-10">
      <div class="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-amber-200 relative">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account 📝</h2>
  
        <form @submit.prevent="handleSignup" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              v-model="signupData.name"
              placeholder="John Doe"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              v-model="signupData.email"
              placeholder="you@example.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              v-model="signupData.phone"
              placeholder="9876543210"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              v-model="signupData.password"
              placeholder="••••••••"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
  
          <button
            type="submit"
            class="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
  
        <p class="text-sm text-gray-500 text-center mt-6">
          Already have an account?
          <router-link to="/login" class="text-amber-600 hover:underline">Login here</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const signupData = ref({
    name: '',
    email: '',
    phone: '',
    password: ''
  })
  
  const router = useRouter()
  
  const handleSignup = () => {
    console.log(signupData.value)
  
    // You can connect this to your backend or store
    localStorage.setItem('token', 'signup-token')
  
    // Clear the form
    signupData.value = {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  
    // Redirect to home or login
    router.push('/')
  }
  </script>
  
