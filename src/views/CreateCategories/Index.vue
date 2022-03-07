<template>
  <div class="create-categories">
    <div class="create-categories-content">
      <div class="create-categories-content__title">Crear Categorías</div>
      <div class="create-categories-content__options">
        <div class="information-categoy">
          <label class="information-categoy__label"
            >Nombre de la categoría</label
          >
          <div class="information-categoy__input">
            <input
              type="text"
              v-model.trim="createCategory"
              name="createCategory"
            />
          </div>
        </div>
        <button class="create-categories-content__options--button">
          Crear
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createCategories",
  data() {
    return {
      createCategory: null,
    };
  },
};
</script>

<style scoped lang="scss">
.create-categories {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: $color-black;
}

.create-categories-content {
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