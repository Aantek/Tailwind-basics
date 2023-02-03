<template>
  <div class="grid  grid-cols-1 md:grid-cols-2 gap-4">
    <ProductModal></ProductModal>
    <MenthorPerfume></MenthorPerfume>
  </div>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import MenthorPerfume from '@/components/MenthorPerfume.vue';

export default{
  name: "ProductView",
  components: {
    ProductModal: ProductModal,
    MenthorPerfume: MenthorPerfume,
  }
}
</script>
