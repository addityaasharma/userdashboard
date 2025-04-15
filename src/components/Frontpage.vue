<template>
    <div
        class="min-h-screen bg-gradient-to-tr from-yellow-50 to-amber-100 flex flex-col items-center justify-center px-4 py-8">

        <!-- Header -->
        <header class="text-center mb-12">
            <h1
                class="text-5xl sm:text-6xl font-extrabold text-amber-600 drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
                Welcome to <span class="text-gray-900">TradeCraft</span>
            </h1>
            <p class="text-lg text-gray-600 mt-4 max-w-md mx-auto animate__animated animate__fadeIn animate__delay-2s">
                A powerful platform to manage your trading strategies, brokers, and insights — all in one place.
            </p>
        </header>

        <!-- CTA Buttons -->
        <div class="flex gap-6 flex-wrap justify-center mb-10">
            <router-link to="/login"
                class="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg shadow-xl transition duration-300 transform hover:scale-105">
                Login
            </router-link>
            <router-link to="/signup"
                class="border border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white font-medium px-6 py-3 rounded-lg shadow-xl transition duration-300 transform hover:scale-105">
                Sign Up
            </router-link>
        </div>

    </div>

    <!-- About Section -->
    <section
        class="bg-gradient-to-tr from-amber-100 to-yellow-50 py-20 px-6 animate__animated animate__fadeIn animate__delay-3s">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <!-- Left: Image -->
            <div class="flex justify-center">
                <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" alt="About Us Image"
                    class="rounded-2xl shadow-lg transition duration-300 transform hover:scale-105" />
            </div>

            <!-- Right: Text Content -->
            <div>
                <h2 class="text-4xl font-extrabold text-amber-600 mb-4">Who We Are</h2>
                <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    At <span class="font-semibold text-orange-500">Space</span>, we're passionate technologists focused
                    on innovation. From AI-driven tools to secure web platforms, we empower businesses with future-ready
                    solutions.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        class="bg-amber-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 class="text-lg font-bold text-orange-600">🚀 Vision</h3>
                        <p class="text-sm text-gray-700">To lead the next generation of smart, scalable digital
                            products.</p>
                    </div>
                    <div
                        class="bg-amber-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 class="text-lg font-bold text-orange-600">💡 Innovation</h3>
                        <p class="text-sm text-gray-700">We never stop exploring ideas that challenge the norm.</p>
                    </div>
                    <div
                        class="bg-amber-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 class="text-lg font-bold text-orange-600">🤝 Trust</h3>
                        <p class="text-sm text-gray-700">Transparent processes and dedicated support you can rely on.
                        </p>
                    </div>
                    <div
                        class="bg-amber-100 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 class="text-lg font-bold text-orange-600">🌍 Impact</h3>
                        <p class="text-sm text-gray-700">We build solutions that create real-world value for people and
                            businesses.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section
        class="bg-gradient-to-br from-yellow-100 to-orange-100 py-24 px-6 animate__animated animate__fadeIn animate__delay-4s">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-orange-600 mb-6">Features</h2>
            <p class="text-lg text-gray-700 mb-12">
                Our platform offers a variety of features that help businesses stay ahead in a competitive market.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">Real-Time Analytics</h3>
                    <p class="text-gray-700">
                        Get instant insights with our real-time analytics that help you make data-driven decisions.
                    </p>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">Custom Solutions</h3>
                    <p class="text-gray-700">
                        Tailor your solutions to your specific needs with our flexible, customizable platform.
                    </p>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">24/7 Support</h3>
                    <p class="text-gray-700">
                        We offer round-the-clock customer support to assist you whenever you need it.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section
        class="py-24 px-6 bg-gradient-to-br from-yellow-100 to-orange-100 animate__animated animate__fadeIn animate__delay-5s">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-orange-600 mb-6">Pricing</h2>
            <p class="text-lg text-gray-700 mb-12">
                Our pricing plans are designed to suit businesses of all sizes, from startups to enterprises.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">Starter</h3>
                    <p class="text-gray-700 mb-4">For small businesses looking to scale quickly.</p>
                    <p class="text-2xl font-bold text-orange-600 mb-4">₹199/month</p>
                    <button
                        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">Business</h3>
                    <p class="text-gray-700 mb-4">For growing companies with expanding needs.</p>
                    <p class="text-2xl font-bold text-orange-600 mb-4">₹499/month</p>
                    <button
                        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <h3 class="text-xl font-bold text-orange-500 mb-4">Enterprise</h3>
                    <p class="text-gray-700 mb-4">For large organizations with complex requirements.</p>
                    <p class="text-2xl font-bold text-orange-600 mb-4">₹999/month</p>
                    <button
                        class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section
        class="bg-gradient-to-br from-yellow-100 to-orange-100 py-24 px-6 animate__animated animate__fadeIn animate__delay-6s">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-orange-600 mb-6">What Our Clients Say</h2>
            <p class="text-lg text-gray-700 mb-12">
                Hear from some of our satisfied clients who have experienced the transformation with our solutions.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <p class="text-gray-700 italic mb-4">"Space helped us streamline our operations, saving us time and
                        resources. The team is amazing to work with!"</p>
                    <p class="text-orange-600 font-bold">John Doe</p>
                    <p class="text-gray-600">CEO, TechCorp</p>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <p class="text-gray-700 italic mb-4">"The custom solutions provided were exactly what we needed to
                        scale our business to the next level."</p>
                    <p class="text-orange-600 font-bold">Jane Smith</p>
                    <p class="text-gray-600">Founder, InnovateX</p>
                </div>
                <div
                    class="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
                    <p class="text-gray-700 italic mb-4">"Working with Space was a game-changer for us. Their tech
                        support team is second to none."</p>
                    <p class="text-orange-600 font-bold">Michael Brown</p>
                    <p class="text-gray-600">COO, FutureTech</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Brand Partner Section -->
    <section
        class="bg-gradient-to-br from-yellow-100 to-orange-100 py-24 px-6 animate__animated animate__fadeIn animate__delay-7s">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold text-orange-600 mb-6">Partner With Us</h2>
            <p class="text-lg text-gray-700 mb-12">
                Join forces with Space and leverage our innovative solutions to take your business to the next level.
            </p>
            <button
                class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                Become a Partner
            </button>
        </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-amber-200 py-12 text-black text-center flex sm:flex-none justify-evenly shadow-lg">
        <p class="text-lg mb-4">&copy; 2025 Space. All Rights Reserved.</p>
        <div class="flex justify-center space-x-6">
            <a href="#" class="hover:text-orange-500 font-bold transition duration-300">Privacy Policy</a>
            <a href="#" class="hover:text-orange-500 font-bold transition duration-300">Terms of Service</a>
            <a href="#" class="hover:text-orange-500 font-bold transition duration-300">Contact Us</a>
        </div>
    </footer>
</template>

<script setup>
// Add data fetching or any necessary functionality here later if needed
</script>

<style scoped>
body::-webkit-scrollbar{
    display: none;
}
</style>