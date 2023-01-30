<template>
  <div class="flex items-center justify-center bg-rose-50 min-h-screen">
    <div class="relative flex flex-col margin-6 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:m-0">
      <!-- Left side -->
      <div class="p-6 md:p-20">
        <h2 class="font-mono mb-5 text-4xl font-bold">
          Log In
        </h2>
        <p class="max-w-sm text-gray-600 font-sans mb-12">
          Log in to your account to upload or download pictures, video or music
        </p>
        <input type="email" placeholder="Enter your e-mail address" class="w-full p-6 border-2 border-gray-300 rounded-xl">
        <div class="flex justify-between flex-col items-center mt-6 space-y-6 md:flex-row md:space-y-0 mb-6">
           <p class="font-thin text-gray-400">Forgot password</p>
           <button class="rounded-xl shadow-xl bg-cyan-700 p-6 md:w-32 text-white text-lg flex md:justify-between justify-center items-center w-full">
            <p class="pr-2 md:pr-1">Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
           </button>
        </div>
        <hr class="h-px my-8 border-1 border-gray-300">
        <p class="text-thin text-gray-400 flex justify-center items-center mb-8">or log in with</p>
        <div class="flex justify-around items-center space-x-4">
          <button class="p-4 rounded-xl shadow-xl w-full flex flex-row justify-center items-center border-gray-300 border-2">
            <img src="@/assets/images2/google.png" class="w-6 h-6">
            <p class="p-4 text-xl">Gmail</p></button>
          <button class="p-4 rounded-xl shadow-xl w-full flex flex-row justify-center items-center border-gray-300 border-2">
            <img src="@/assets/images2/facebook.png" class="w-6 h-6">
            <p class="p-4 text-lg">Facebook</p></button>
        </div>
      </div>
      <!-- Right side-->
      <img src="@/assets/images2/image.jpg" alt="image" class="w-[430px] hidden md:block">
      <!-- Close button -->
      <div class="absolute group -top-5 right-2 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black group-hover:text-gray-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>


</style>