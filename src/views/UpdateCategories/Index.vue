<template>
  <div class="update-categories">
    <div class="update-categories-content">
      <div class="update-categories-content__title">Actualizar Categorías</div>
      <div class="update-categories-content__options">
        <div class="information-categoy">
          <label class="information-categoy__label"
            >Nombre de la categoría</label
          >
          <div class="information-categoy__input">
            <input
              type="text"
              v-model.trim="categoryName"
              name="categoryName"
            />
          </div>
        </div>
        <button class="update-categories-content__options--button">
          Actualizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "updateCategories",
  data() {
    return {
      categoryName: null,
    };
  },
};
</script>

<style scoped lang="scss">
.update-categories {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: $color-black;
}

.update-categories-content {
  @extend %flex-col-center;
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
      margin-top: 50px;
      height: 50px;
    }
  }
}
.information-categoy {
  &__label {
    @include label-for-input;
  }
  &__input {
    @include border-input;
    align-items: center;
    input {
      @include input-content;
    }
  }
}
</style>