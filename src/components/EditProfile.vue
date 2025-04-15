<template>
    <div class="max-w-xl mx-auto p-6">
      <!-- Profile Image -->
      <div class="flex justify-center mb-6">
        <div class="h-[100px] w-[100px] relative">
          <img :src="profile.avatar" alt="Avatar" class="h-full w-full rounded-full border-4 border-pink-600 shadow-md object-cover" />
        </div>
      </div>
  
      <!-- Profile Edit Form -->
      <div class="bg-white rounded-2xl shadow-xl p-6 backdrop-blur-2xl border border-amber-100 space-y-4">
        <h2 class="text-2xl font-semibold text-center text-pink-800 mb-4">Edit Profile</h2>
  
        <!-- Username -->
        <div>
          <label class="text-sm font-medium">Username</label>
          <input v-model="profile.name" type="text" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your name" />
        </div>
  
        <!-- Email -->
        <div>
          <label class="text-sm font-medium">Email</label>
          <input v-model="profile.email" type="email" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter your email" />
        </div>
  
        <!-- Password -->
        <div>
          <label class="text-sm font-medium">Change Password</label>
          <input v-model="profile.password" type="password" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="New password" />
        </div>
  
        <!-- Phone Number -->
        <div>
          <label class="text-sm font-medium">Phone Number</label>
          <input v-model="profile.phone" type="tel" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Enter phone number" />
        </div>
  
        <!-- Date of Birth -->
        <div>
          <label class="text-sm font-medium">Date of Birth</label>
          <input v-model="profile.dob" type="date" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
  
        <!-- Gender -->
        <div>
          <label class="text-sm font-medium">Gender</label>
          <select v-model="profile.gender" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option value="" disabled>Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
  
        <!-- Bio -->
        <div>
          <label class="text-sm font-medium">Bio</label>
          <textarea v-model="profile.bio" rows="3" class="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Tell us about yourself..."></textarea>
        </div>
  
        <!-- Save Button -->
        <div class="text-center pt-4">
          <button @click="saveProfile" class="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const profile = ref({
    avatar: 'https://i.pravatar.cc/150?img=8',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',
    phone: '',
    dob: '',
    gender: '',
    bio: ''
  })
  
  const saveProfile = () => {
    alert('Changes have been saved')
    // You can later connect this to an API call to update the profile in your backend
  }
  </script>
  
