<template>
  <div class="all-categories">
    <div class="all-categories-content">
      <div class="all-categories-content__title">Lista de Categorías</div>
      <div class="all-categories-content__options">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="all-categories-content__options--boxes"
        >
          <div>
              <div class="boxes-text-type">{{ option.category }}</div>
              <div @click="changeView('UpdateCategories')" class="boxes-text-edit">Editar</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllCategories,",
  data() {
    return {
      options: [
        { category: "ACCIÓN" },
        { category: "AVENTURA" },
        { category: "COMEDIA" },
        { category: "TERROR" },
        { category: "ROMANCE" },
        { category: "MISTERIO" },
      ],
    };
  },
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
.all-categories {
  display: grid;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: $color-black;
}

.all-categories-content {
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
    margin-top: 8%;
    display: grid;
    grid-template-columns: repeat(3, 200px);
    column-gap: 15px;
    row-gap: 15px;
    color: $color-white;
    &--boxes {
      background-color: $color-tertiary;
      height: 124px;
    }
  }
}
.boxes-text-type{
  display:flex;
  flex-direction: column;
  margin: 20% auto;
}
.boxes-text-edit{
  display:flex;
  cursor: pointer;
  justify-content:flex-end;
  margin :0 8px 10px 0;
  font-size:14px;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
}
</style>