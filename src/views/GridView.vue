<template>
  <!-- Global container - centering -->
  <div class="flex justify-center items-center bg-gray-500 min-h-screen p-3">
    <!-- Container in container just to group everything -->
    <div class="bg-white p-6 space-y-8 shadow-2xl rounded-2xl min-w-full">
      <!-- Menu - navbar -->
      <div class="flex md:flex-row flex-col md:justify-end md:items-center justify-center items-center md:space-x-5">
        <div class="group">
          <a href="#">Vector</a>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
        </div>
        <div class="group">
          <a href="#">Illustrations</a>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
        </div>
        <div class="group">
          <a href="#">Images</a>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
        </div>
        <div class="group">
          <a href="#">Icons</a>
          <div class="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
        </div>
      </div>
      <div class="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        <div class="flex justify-between border-b">
          <input type="text" class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none shadow rounded" placeholder="Search">
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'GridView',
}
</script>
