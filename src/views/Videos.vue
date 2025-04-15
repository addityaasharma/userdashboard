<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">

        <!-- Content Section -->
        <main class="container mx-auto px-4 py-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Learn Trading with These Videos</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(video, index) in videos" :key="index"
                    class="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img :src="video.thumbnail" alt="Video thumbnail" class="w-full h-40 object-cover" />
                    <div class="p-4">
                        <h3 class="text-xl font-semibold text-gray-800">{{ video.title }}</h3>
                        <p class="text-gray-600 mt-2">{{ video.description }}</p>
                        <button @click="openVideo(video.url)"
                            class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                            Watch Now
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <!-- Video Modal -->
        <div v-if="isVideoModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-4 rounded-lg max-w-4xl w-full">
                <button @click="closeVideo" class="text-red-500 absolute top-2 right-2 text-xl">✕</button>
                <iframe :src="currentVideoUrl" width="100%" height="400" frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const videos = [
    {
        title: 'Introduction to Trading',
        description: 'Learn the basics of trading in financial markets.',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrzFuA9zp435K2-Cko6EjlC1Y5fpB5DSTOA&s',
        url: 'https://www.youtube.com/embed/your_video_id_1',
    },
    {
        title: 'Understanding Stock Charts',
        description: 'Learn how to read and analyze stock charts.',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoITPv5dgPsrxnDSKPiTjCVoI3CvNUVE-aw&s',
        url: 'https://www.youtube.com/embed/your_video_id_2',
    },
    {
        title: 'Risk Management in Trading',
        description: 'Learn how to manage risk while trading.',
        thumbnail: "https://assets.everspringpartners.com/dims4/default/9dd8b51/2147483647/strip/true/crop/1600x504+0+0/resize/800x252!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fda%2Fe3%2Fd30288474603a45953204778dbd3%2Fadobestock-177498669-1600x504.jpg",
        url: 'https://www.youtube.com/embed/your_video_id_3',
    },
];

const isVideoModalOpen = ref(false);
const currentVideoUrl = ref('');

function openVideo(url) {
    currentVideoUrl.value = url;
    isVideoModalOpen.value = true;
}

function closeVideo() {
    isVideoModalOpen.value = false;
    currentVideoUrl.value = '';
}
</script>

<style scoped>
/* Add custom styling here */
</style>
