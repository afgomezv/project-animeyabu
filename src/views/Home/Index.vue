<template>
  <div class="home">
    <div class="home-content">
      <div class="home-content__title">Hola, Pedro Perez</div>
      <div class="home-content__options">
        <span class="home-content__options--text"> Seleciona una opción:</span>
        <button  @click="changeView('AllCategories')" class="home-content__options--button">
          Ver todas las categorías
        </button>
        <button  @click="changeView('CreateCategories')" class="home-content__options--button">Crear categorías</button>
        <button
          class="home-content__options--button"
          @click="changeView('Login')"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    async changeView(routeName) {
      await this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: $color-black;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% auto 10% 20%;
  font-family: $font-family-label;
  width: 80%;
  &__title {
    color: $color-white;
    font-size: 56px;
    font-weight: 500;
  }
  &__options {
    margin-top: 80px;
    display: flex;
    width: 30%;
    flex-direction: column;
    &--text {
      color: $color-white;
      font-size: 26px;
      padding-bottom: 30px;
    }
    &--button {
      @include primary-button;
      margin-top: 20px;
      height: 50px;
    }
  }
}
</style>