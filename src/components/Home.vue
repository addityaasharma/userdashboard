<template>
  <div class="flex h-screen overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white">

    <!-- Sidebar -->
    <aside
      :class="[ 
        'bg-white text-gray-900 w-64 md:relative md:translate-x-0 fixed top-0 left-0 h-full z-30 transform transition-transform duration-300 ease-in-out shadow-md',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="h-16 flex items-center justify-between border-b border-gray-200 px-4">
        <h1 class="text-lg font-semibold">{{ route.name }}</h1>
        <button class="md:hidden text-gray-600 text-xl" @click="isSidebarOpen = false">✕</button>
      </div>

      <nav class="mt-6 flex flex-col items-center gap-2">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block w-[90%] py-2 text-center rounded-md text-gray-700 hover:bg-gray-200 transition"
          @click="closeSidebarOnMobile"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </aside>

    <!-- Overlay for mobile -->
    <div
      class="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
    ></div>

    <!-- Main content -->
    <div class="flex-1 flex flex-col bg-gradient-to-br from-white via-gray-50 to-white">

      <!-- Header -->
      <header class="flex items-center justify-between bg-white h-16 px-4 border-b border-gray-200 shadow-sm">
        <button class="text-gray-700 md:hidden" @click="isSidebarOpen = !isSidebarOpen">
          ☰
        </button>

        <h2 class="text-gray-900 text-xl font-bold">Hello Aditya</h2>

        <div class="hidden md:flex gap-2">
          <button class="text-gray-700 px-3 py-1 rounded border border-gray-300 hover:border-blue-400">
            Add Broker
          </button>
          <button class="text-gray-700 px-3 py-1 rounded border border-gray-300 hover:border-blue-400">
            🔔
          </button>
          <button class="text-gray-700 px-3 py-1 rounded border border-gray-300 hover:border-blue-400">
            Profile
          </button>
        </div>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-y-auto p-4">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute, RouterLink, RouterView } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isSidebarOpen = ref(false);

const links = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "My Strategies", to: "/mystrategies" },
  { name: "Strategies", to: "/strategies" },
  { name: "Broker", to: "/broker" },
  { name: "Position", to: "/position" },
  { name: "Order", to: "/order" },
  { name: "Videos", to: "/videos" },
  { name: "Login", to: "/login" },
  { name: "Chart", to: "/chart" },
];

const closeSidebarOnMobile = () => {
  if (window.innerWidth < 768) {
    isSidebarOpen.value = false;
  }
};

onMounted(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/login');
  }
});
</script>

<style scoped lang="scss">
main::-webkit-scrollbar {
  display: none;
}
main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
