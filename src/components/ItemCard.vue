<template>
  <div class="item-card">
    <section class="item-card__section">
      <header class="item-card__section__header">
        <h3>Men's clothing</h3>
        <p>....</p>
      </header>
      <div class="item-card__section__data">
        <div class="item-card__section__data__item-details">
          <h6 class="item-card__section__data__item-details__price">109.95$</h6>
          <p class="item-card__section__data__item-details__item-name">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </p>
        </div>
        <div class="item-card__section__data__stock">
          <p>InStore</p>
          <p>120</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item-card {
  background-color: #ff8b64;
  border-radius: 20px;
  color: #ffffff;

  &__section {
    background-color: #1c204b;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 40px;
    padding: 37px 30px 24px 30px;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    &__data {
      font-family: rubik;
      display: flex;
      gap: 22px;
      align-items: flex-end;

      &__item-details {
        display: flex;
        flex-direction: column;
        width: 160px;
        gap: 8px;

        &__price {
          font-size: 39px;
          line-height: 46px;
        }

        &__item-name {
          color: #bbc0ff;
          font-size: 12px;
          font-weight: 400;
          line-height: 14px;
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
      }
    }
  }
}
</style>
