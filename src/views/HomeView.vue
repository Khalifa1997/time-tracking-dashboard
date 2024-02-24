<template>
  <div class="home-view">
    <ProfileCard />
    <div class="home-view__item-cards">
      <ItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :color="pickRandomColor()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from '@/components/ItemCard.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import type { ProductItem } from '@/shared/types/types'
import { ref } from 'vue'
import { getProducts } from '@/shared/services/services'

const colors = ['#FF8B64', '#55C2E6', '#FF5E7D', '#7335D2', '#3498db']

const products = ref<ProductItem[]>([])

const pickRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

;(async () => {
  const x = await getProducts()
  await Promise.resolve(x).then((res) => (products.value = res))
})()
</script>

<style scoped lang="scss">
.home-view {
  display: flex;
  gap: 24px;
  margin: 40px;

  &__item-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 40px;
    width: max-content;
    margin: 81px auto;

    &__item-cards {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
  }
}
</style>
