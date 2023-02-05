<template>
  <div class="flex justify-center items-center w-screen h-screen bg-red-300">
    <div class="w-80 bg-slate-200 rounded-xl shadow-xl p-3">
      <img src="@/assets/imagesqr/image-qr-code.png" class="rounded-xl">
      <div class="flex flex-col flew-wrap justify-center items-center p-3">
        <p class="text-black font-black text-xl text-center my-1">Improve your front-end skills by building projects</p>
        <p class="text-center my-1 text-teal-500 text-sm"> Scan the QR code to visit Frontend Mentor and take tour coding skills to the next level</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QRView',
}
</script>

<style scoped>

</style>