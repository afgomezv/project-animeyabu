<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="text-anime">
        <img
          src="../assets/images/logo.png"
          alt="LOGO"
          class="text-anime__logo"
        />
        <div class="text-anime__message">
          <span class="text-anime__message--anime">anime</span>
          <span class="text-anime__message--yabu">yabu.</span>
        </div>
      </div>
      <div class="sidebar-content__options">
        <span>Categorías</span>
        <ul type="disc">
          <li @click="changeView('Home')">Ver todas</li>
          <li @click="changeView('CreateCategories')">Crear</li>
        </ul>
      </div>
      <button @click="changeView('Login')" class="sidebar-content__button">
        Cerrar sesión
      </button>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
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
.sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  max-width: 327px;
  width: calc(100% - 243px);
  background-color: $color-tertiary;
  color: $color-white;
  font-family: $font-family-label;
  font-size: 18px;
}
.sidebar-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  font-family: $font-family-label;
  &__options {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20%;
    margin-right: 20%;
    span {
      font-weight: bold;
      margin-bottom: 10%;
    }
    li {
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  &__button {
    background-color: inherit;
    border: none;
    color: $color-white;
    font-weight: bold;
    padding-top: 15%;
    margin-right: 15%;
  }
}

.text-anime {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 1%;
  &__logo {
    width: 56px;
    height: 56px;
  }
  &__message {
    padding-left: 4%;
    font-family: $font-family-text;
    font-weight: 900;
    font-size: 34px;
    letter-spacing: 0.065em;
    &--anime {
      color: $color-white;
    }
    &--yabu {
      color: $color-primary;
    }
  }
}
</style>
