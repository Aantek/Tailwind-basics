<template>
  <ProductModal></ProductModal>
  <MenthorPerfume></MenthorPerfume>
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
