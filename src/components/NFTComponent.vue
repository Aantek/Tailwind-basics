<template>
  <!-- Container -->
  <div class="class w-screen h-screen flex justify-center items-center bg-[#0d192b]">
    <div class="rounded-xl shadow-xl p-4 bg-[#14253d] flex flex-col justify-center items-centerc">
        <div class="relative group">
          <img src="@/assets/imgNFT/image-equilibrium.jpg" class="m-4 mb-0 rounded-xl shadow-xl w-80 h-80">
              <div class="absolute top-4 rounded-xl left-4 right-0 w-80 h-80 opacity-0 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-50 flex justify-center items-center">
                <div class="text-white h-10 w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>   
              </div>
        </div>
        <div class="flex w-80 justify-start flex-col flex-wrap my-3 px-4">
          <p class="text-white text-xl font-bold my-2 hover:text-blue-400">Equilibrium #3429</p>
          <p class="text-gray-400">Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div class="flex justify-between w-80">
          <div class="flex justify-start items-center px-4">
            <img src="@/assets/imgNFT/icon-ethereum.svg" alt="etherium-icon" class="w-3 h-5">
            <p class="px-2 text-gray-400 font-black text-lg"> 0.041 ETH</p>
          </div>
          <div class="flex justify-end items-center">
            <img src="@/assets/imgNFT/icon-clock.svg" alt="clock"  class="w-5 h-5">
            <p class="px-2 text-gray-400 font-black text-lg"> 3 days left</p> 
          </div>
        </div>
        <hr class="h-px w-80 my-5 bg-gray-200 mx-4">
        <div class="flex justify-start w-80 pb-1 px-4">
          <img src="@/assets/imgNFT/image-avatar.png" class="w-8 h-8 rounded-2xl" id="avatar">
          <p class="text-gray-400 flex justify-center items-center pl-2">Creation of </p>
          <p class="flex justify-center items-center pl-1 text-white  hover:text-blue-400 font-bold ">Jules Wyvern</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cube:hover{
  color: gray;
  filter: grayscale(1); 
  transition: all .8s ease-in-out;  
}
.cube {
  filter: none;
  filter: grayscale(0);
}
#avatar{
  border: 1px solid white;
}

</style>