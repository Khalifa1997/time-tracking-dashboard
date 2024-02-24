<template>
  <section class="profile-card">
    <header class="profile-card__header">
      <img
        class="profile-card__header__avatar"
        src="https://source.unsplash.com/random/150x150?sig=1"
        alt="avatar"
      />
      <div class="profile-card__header__report">
        <h3 class="profile-card__header__report__title">Report for</h3>
        <p class="profile-card__header__report__text">Best Sales</p>
      </div>
    </header>
    <div class="profile-card__time-spans">
      <a href="#">Daily</a>
      <a href="#">Weekly</a>
      <a href="#">Monthly</a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.profile-card {
  display: flex;
  flex-direction: column;
  background-color: #1c204b;
  border-radius: 20px;
  max-width: 255px;
  height: max-content;

  @media screen and (max-width: 500px) {
    max-width: 330px;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #5747ea;
    padding: 32px 24px 11px 23px;
    border-radius: 20px;

    &__avatar {
      border-radius: 50%;
      height: 140px;
      aspect-ratio: 1/1;
      box-shadow: 4px 7px 8px 0px #00000040;
      border: 3px solid #ffffff;
      margin: auto;

      @media screen and (max-width: 500px) {
        height: 64px;
        margin: 0;
      }
    }

    &__report {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 145px;

      &__title {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        color: #bbc0ff;
      }

      &__text {
        font-size: 40px;
        font-weight: 300;
        line-height: 47px;
        letter-spacing: 12px;
        color: #ffffff;

        @media screen and (max-width: 500px) {
          font-size: 24px;
          font-weight: 300;
          line-height: 28px;
          letter-spacing: 0px;
        }
      }

      @media screen and (max-width: 500px) {
        gap: 4px;
        justify-content: center;
      }
    }

    @media screen and (max-width: 500px) {
      flex-direction: row;
      gap: 20px;
      padding: 35px 39px 35px 32px;
    }
  }

  &__time-spans {
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 26px 0 32px 32px;

    a {
      color: #7078c9;
      width: fit-content;
      border-radius: 4px;
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      text-decoration: none;
      transition: 0.4s;
      padding: 3px;

      &:hover {
        color: #ffffff;
        background-color: #7078c9;
      }
    }

    @media screen and (max-width: 500px) {
      flex-direction: row;
      gap: 0px;
      justify-content: space-between;
      padding: 24px;
    }
  }
}
</style>
