<template>
  <div class="flex items-center justify-center h-screen custom-font m-3">
        <div class="grid grid-cols-1 md:grid-cols-2 h-64">
            <div class="p-4 flex items-center justify-center flex-col background-left rounded-xl w-80 bg-gradient bg-gradient-to-b from-[#7857FF] to-[#2E2BE9]">
                <p class="p-3 pt-0 text-[#ccc1ff] font-bold text-sm flex ">Your result</p>
                <div class="p-9 text-white flex items-center justify-center relative mt-6 mb-8 bg-gradient-to-t rounded-full from-[#615f9e] to-[#3312b8]">
                  <span class="text-4xl font-bold">76</span>
                  <p class="absolute bottom-5 right-10 text-xs m-0 p-0 text-[#ccc1ff]">of 100</p>
                </div>
                <p class="p-2 text-xl text-white font-bold mb-3">Great</p>
                <span class="text-center text-[#ccc1ff] text-xs">You scored higher than 65% of<p> the people who have taken </p><p>these tests.</p></span>
            </div>
            <div class="bg-slate-200 rounded-xl w-80 h-80 flex items-center content-center flex-col">
                <p class="p-3 px-0 pt-0 text-[#ccc1ff] font-bold text-sm mt-3 w-64 text-left">Summary</p>
                  <div class="flex items-center flex-col h-48 justify-around">
                    <div class="flex flex-row justify-between w-64">
                      <p class="text-[#FF5757] flex flex-row"><img src="@/assets/resultsummary/icon-reaction.svg" class="px-2">Reaction</p>
                      <p><span class="text-[#351d44] font-bold"> 80 </span>  / 100</p>
                    </div>
                    <div class="flex flex-row justify-between w-64">
                      <p class="text-[#FFB01F] flex flex-row"><img src="@/assets/resultsummary/icon-memory.svg" class="px-2">Memory </p>
                      <p><span class="text-[#351d44] font-bold"> 92 </span> / 100</p>
                    </div>
                    <div class="flex flex-row justify-between w-64">
                      <p class="text-[#00BD91] flex flex-row"><img src="@/assets/resultsummary/icon-verbal.svg" class="px-2">Verbal </p>
                      <p><span class="text-[#351d44] font-bold"> 61 </span>  / 100</p>
                    </div>
                    <div class="flex flex-row justify-between w-64">
                      <p class="text-[#1125D4] flex flex-row"><img src="@/assets/resultsummary/icon-visual.svg" class="px-2">Visual </p>
                      <p> <span class="text-[#351d44] font-bold"> 72 </span> / 100</p>
                    </div>
                  </div>
                  <button class="rounded-full mt-10  w-64 py-2 bg-[#351d44] text-white">Continue</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>

@import '@/assets/fonts/fonts.css';

.custom-font {
  font-family: 'HankenGrotesk', sans-serif; /* Use the name you defined in the @font-face rule */
}

.backgroud-left{
  background: linear-gradient(180deg, var(--gradient-light-slate-blue) -30%, var(--gradient-light-royal-blue));
}
svg{
  display: flex;
}



</style>