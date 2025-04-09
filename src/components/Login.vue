<script setup>
// import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const id= ref({
    mail:"",
    name:"",
    number:""
});
const router = useRouter();
const handleSubmit = () =>{
    console.log(id.value);
    id.value={
        mail:"",
        name:"",
        number:""
    }
    localStorage.setItem('token','123456')

    router.push('/dashboard')
}
</script>

<template>
    <div class="form h-72 w-lg border-2 border-black rounded-lg relative left-[50%] top-4 translate-x-[-50%] bg-amber-50">
        <form action="" @submit.prevent="handleSubmit">
            <input 
            type="text" 
            v-model="id.name"
            placeholder="Enter Your Name"
            class="w-[95%] h-8 border-1 border-black mt-2 ml-[2%] text-black rounded-t-md">

            <input 
            type="text" 
            v-model="id.mail"
            placeholder="Enter Your email"
            class="w-[95%] h-8 border-1 border-black ml-[2%] text-black">

            <input 
            type="text" 
            v-model="id.number"
            placeholder="Enter Your Number"
            class="w-[95%] h-8 border-1 border-black ml-[2%] text-black rounded-b-md">

            <button 
            type="submit" 
            class="bg-amber-300 border-2 border-amber-500 relative left-[50%] top-4 translate-x-[-50%]">Submit</button>
        </form>
    </div>
</template>


<style lang="scss" scoped>

</style>