<template>
<!-- Container -->
    <div class="flex justify-center items-center w-full h-screen mb-4 p-3" id="rating">
        <div class="w-2/3 md:w-1/4 h-1/2 sm:h-2/3 xl:h-2/5 flex flex-wrap rounded-xl shadow-xl p-3 bg-[#3a4147] " v-show="state == 'rating'">
            <div class="flex flex-col flex-wrap bg-[#3a4147] p-3 pb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 rounded-full p-2 text-orange-500 bg-[#1C1E21]">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex bg-[#3a4147] flex-col text-start justify-center">
                <p class="text-3xl text-white font-bold bg-[#3a4147] p-3 font-sans">How did we do?</p>
                <p class="text-normal text-gray-300 font-bold bg-[#3a4147] p-3 pt-0 font-sans">Please let us know how we did with your support request. All feeback is appreciated to help us improve our offering!</p>
            </div>
            <div class="bg-[#3a4147] my-1 w-full flex justify-between place-items-center px-2">
                <button class="text-gray-300 bg-gray-500 hover:bg-gray-800 active:bg-gray-800 focus:outline-none focus:ring focus:bg-black rounded-full px-3 py-1" @click="rating = 1" :class="{ 'active': rating == 1 }">1</button>
                <button class="text-gray-300 bg-gray-500 rounded-full px-3 py-1 hover:bg-gray-800 active:bg-gray-800 focus:outline-none focus:ring focus:bg-black" @click="rating = 2" :class="{ 'active': rating == 2 }">2</button>
                <button class="text-gray-300 bg-gray-500 rounded-full px-3 py-1 hover:bg-gray-800 active:bg-gray-800 focus:outline-none focus:ring focus:bg-black" @click="rating = 3" :class="{ 'active': rating == 3 }">3</button>
                <button class="text-gray-300 bg-gray-500 rounded-full px-3 py-1 hover:bg-gray-800 active:bg-gray-800 focus:outline-none focus:ring focus:bg-black" @click="rating = 4" :class="{ 'active': rating == 4 }">4</button>
                <button class="text-gray-300 bg-gray-500 rounded-full px-3 py-1 hover:bg-gray-800 active:bg-gray-800 focus:outline-none focus:ring focus:bg-black" @click="rating = 5" :class="{ 'active': rating == 5 }">5</button>
            </div>
     
            <button type="submit" class="bg-orange-500 rounded-xl w-full text-white py-1 my-4 px-2 font-extrabold" @click="ratingSubmit()">Submit</button>
        </div>
    </div>
    <div class="flex justify-center items-center w-screen h-screen p-3 " v-show="state == 'thank you'">
        <div class="w-2/3 md:w-1/4 h-2/3 sm:h-2/3 xl:h-1/2 flex flex-wrap rounded-xl shadow-xl p-3 justify-center items-center bg-[#3a4147]">
            <div class="flex justify-center items-center p-3 pb-2 w-full">
                <img src="@/assets/imagesrating/illustration-thank-you.svg">
            </div>
            <div class="flex bg-[#3a4147] flex-col text-center justify-center">
                <p class="text-sm text-red-600 py-2"> You selected {{ rating }} of 5</p>
                <p class="text-3xl text-white font-bold bg-[#3a4147] p-3 font-sans">Thank you!</p>
                <p class="text-normal text-gray-300 font-bold bg-[#3a4147] p-3 py-0 font-sans">We appreciate you taking the time to give a rating. If you never need more support, don't hestitate do get in touch!</p>
            </div>
            <button type="submit" class="bg-orange-500 rounded-xl w-full text-white py-1 px-2 font-extrabold" @click="reloadPage">Rate again</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            state: 'rating',
            rating: 0
        }
    },
    methods: {
        ratingSubmit() {
            if (this.rating > 0) {
                this.state = 'thank you'
            }
            else if(this.rating == 0){
                window.location.reload();
            }
            document.getElementById("rating").style.display = "none";
        },
        reloadPage() {
            window.location.reload();
        }
        
    }
}
</script>

<style scoped>


</style>