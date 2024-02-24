<template>
  <div class="item-card">
    <section class="item-card__section">
      <header class="item-card__section__header">
        <h3>{{ product.title }}</h3>
        <p class="item-card__section__header__dots">...</p>
      </header>
      <div class="item-card__section__data">
        <div class="item-card__section__data__item-details">
          <h6 class="item-card__section__data__item-details__price">{{ product.price }}$</h6>
          <p class="item-card__section__data__item-details__item-name">
            {{ product.description }}
          </p>
        </div>
        <div class="item-card__section__data__stock">
          <p>InStore</p>
          <p>{{ product.rating.count }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ProductItem } from '@/shared/types/types'
defineProps<{
  product: ProductItem
  color: string
}>()
</script>

<style scoped lang="scss">
.item-card {
  background-color: v-bind(color);
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  max-width: 300px;

  &__section {
    background-color: #1c204b;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 37px 30px 24px 30px;
    margin-top: 42px;
    width: 100%;

    @media screen and (max-width: 500px) {
      gap: 6px;
      padding: 28px 24px;
      margin-top: 38px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      &__dots {
        font-size: 30px;
        line-height: 28px;
        letter-spacing: 3px;
      }
    }

    &__data {
      display: flex;
      gap: 22px;
      align-items: flex-end;

      &__item-details {
        display: flex;
        flex-direction: column;
        width: 160px;
        gap: 8px;

        @media screen and (max-width: 500px) {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        &__price {
          font-size: 39px;
          line-height: 46px;
        }

        &__item-name {
          color: #bbc0ff;
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      &__stock {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > p {
          font-size: 12px;
          font-weight: 500;
          line-height: 14px;
        }

        @media screen and (max-width: 500px) {
          display: none;
        }
      }
    }
  }
}
</style>
