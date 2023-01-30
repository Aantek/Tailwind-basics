<template>
  <!-- Global container - centering -->
  <div class="flex justify-center items-center bg-gray-500 min-h-screen p-3">
    <!-- Container in container just to group everything -->
    <div class="bg-white p-6 space-y-8 shadow-2xl rounded-2xl min-w-full">
      <!-- Menu - navbar -->
      <div class="flex md:flex-row flex-col md:justify-end md:items-center justify-center items-center md:space-x-5 text-xl">
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
      <div class="flex flex-col justify-between space-y-6 md:flex-row md:space-y-0">
        <div class="flex justify-between border-b">
          <input type="text" class="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none shadow roundedv text-xl" placeholder="Search">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <button class="hover:bg-white hover:text-black p-3 pl-6 pr-6 bg-black text-white font-bold rounded outline outline-offset-1 outline-black mt-5 md:mt-4 text-xl">
          Upload
        </button>
      </div>
      <div class="flex lg:justify-between">
        <div class="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div class="relative group">
            <img src="@/assets/images/image1.jpg" alt="image-1" class="w-50 h-50">
              <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
          <div class="relative group">
            <img src="@/assets/images/image2.jpg" alt="image-2" class="w-50 h-50">
              <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
          <div class="relative group">
            <img src="@/assets/images/image3.jpg" alt="image-3" class="w-50 h-50">
            <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
          <div class="relative group">
            <img src="@/assets/images/image4.jpg" alt="image-4" class="w-50 h-50">
            <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
          <div class="relative group">
            <img src="@/assets/images/image5.jpg" alt="image-5" class="w-50 h-50">
              <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
          <div class="relative group">
            <img src="@/assets/images/image6.jpg" alt="image-6" class="w-50 h-50">
              <div class="absolute bottom-0 left-0 right-0 opacity-0 p-2 px-4 text-white duration-500 bg-black group-hover:opacity-100 bg-opacity-40">
                <div class="flex justify-between w-full ">
                  <div class="text-normal">
                    <p>Abstract Painting</p>
                    <p>195 likes - 20 shares</p>
                  </div>
                  <div class="flex justify-center items-center"> 
                    <img src="@/assets/images/bookmark.svg" alt="bookmark">
                  </div>
                </div>
              </div>
          </div>
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
