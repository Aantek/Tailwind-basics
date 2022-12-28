<template>
  <ProductModal></ProductModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';

export default{
  name: "ProductView",
  components: {
    ProductModal: ProductModal,
  }
}
</script>
