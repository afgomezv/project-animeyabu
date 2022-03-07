<template>
  <div class="login-content">
    <div class="login-content__form">
      <div class="text-anime">
        <img
          src="../../assets/images/logo.png"
          alt="LOGO"
          class="text-anime__logo"
        />
        <div class="text-anime__message">
          <span class="text-anime__message--anime">anime</span>
          <span class="text-anime__message--yabu">yabu.</span>
        </div>
      </div>
      <button class="icon-back" @click="changeView('Login')">
        <b-icon icon="box-arrow-in-left" scale="1.8" variant="light"></b-icon>
      </button>
      <div class="information-form">
        <div class="information-form__img">
          <img
            class="information-form__img--faces"
            src="../../assets/images/cat.png"
            alt="cat"
          />
          <div class="information-form__img--text">
            <img src="../../assets/images/letters.png" alt="letters" />
            <span>Bienvenidos(a)!</span>
          </div>
        </div>
        <div class="information-form__typePerson">
          <span>Tipo de persona</span>
          <b-form-group>
            <b-form-radio
              v-model="selected"
              @change="selectTypePerson($event)"
              value="natural"
              >Natural</b-form-radio
            >
          </b-form-group>
          <b-form-group>
            <b-form-radio
              v-model="selected"
              @change="selectTypePerson($event)"
              value="juridical"
              >Jurídica</b-form-radio
            >
          </b-form-group>
        </div>
        <div class="information-form__submit">
          <Natural v-show="showNatural" />
          <Juridical v-show="showJuridical" />
        </div>
      </div>
      <div class="information-social-media">
        <div class="information-social-media__text">
          <hr />
          <span>Registrate también con</span>
          <hr />
        </div>
        <div class="information-social-media__icons">
          <button>
            <b-icon icon="instagram" scale="1.5" variant="light"></b-icon>
          </button>
          <button>
            <b-icon icon="twitter" scale="1.5" variant="light"></b-icon>
          </button>
          <button>
            <b-icon icon="facebook" scale="1.5" variant="light"></b-icon>
          </button>
        </div>
        <div class="information-social-media__register">
          <span class="information-social-media__register--text1"
            >Ya estás registrado?</span
          >
          <button
            @click="changeView('Layout')"
            class="information-social-media__register--text2"
          >
            Acceder
          </button>
        </div>
      </div>
    </div>
    <div class="login-content__img">
      <div class="image-content">
        <div class="image-content__circle">
          <Carousel />
        </div>
        <div class="image-content__message">
          <div class="image-content__message--title">
            <span class="title-anime">anime</span>
            <span class="title-yabu">yabu.</span>
          </div>
          <div class="image-content__message--text">
            Ver anime en línea en HD, subtitulado o doblado, <br />
            en tu celular o computadora. <br />
            ¡Animeyabu, tu portal de anime en línea!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Natural from "../../components/Natural.vue";
import Juridical from "../../components/Juridical.vue";
import Carousel from "../../components/Carousel.vue";

export default {
  name: "Register",
  components: {
    Natural,
    Juridical,
    Carousel,
  },
  data() {
    return {
      selected: "natural",
      showNatural: true,
      showJuridical: false,
    };
  },
  methods: {
    selectTypePerson(value) {
      if (value === "natural") {
        this.showNatural = true;
        this.showJuridical = false;
      } else {
        this.showNatural = false;
        this.showJuridical = true;
      }
    },
    async changeView(routeName) {
      await this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.login-content {
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
  &__form {
    background-color: $color-black;
  }
  &__img {
    background-color: $color-tertiary;
  }
}

.text-anime {
  display: flex;
  align-items: center;
  padding: 2% 1%;
  &__logo {
    width: 36px;
    height: 36px;
  }
  &__message {
    padding-left: 1%;
    font-family: $font-family-text;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 0.065em;
    &--anime {
      color: $color-white;
    }
    &--yabu {
      color: $color-primary;
    }
  }
}
.icon-back {
  display: flex;
  margin-left: 18px;
  background-color: inherit;
  border: none;
}

.information-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    display: flex;
    align-items: center;
    padding: 0px 0px 20px 0px;
    &--faces {
      width: 145px;
      height: 149px;
    }
    &--text {
      display: flex;
      flex-direction: column;
      img {
        padding-top: 10px;
      }
      span {
        color: $color-white;
        font-weight: bold;
        font-family: $font-family-text;
        font-style: italic;
        letter-spacing: 0.065em;
        padding-top: 10px;
      }
    }
  }
  &__typePerson {
    width: 50%;
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    padding-bottom: 2%;
    color: $color-white;
  }
  &__submit {
    width: 100%;
  }
  &__button {
    width: 50%;
    padding-top: 2%;
    button {
      @include primary-button;
    }
  }
}

::v-deep .custom-control-label {
  margin-left: 5px;
  color: $color-white;
}

.information-social-media {
  padding: 30px 0px;
  @include message-social-media;
  &__icons {
    @include icons-social-media;
  }
  &__register {
    padding-top: 20px;
    &--text1 {
      font-family: $font-family-text;
      color: $color-white;
      font-weight: bold;
    }
    &--text2 {
      border: none;
      background-color: inherit;
      font-family: $font-family-text;
      color: $color-secondary;
      font-weight: bold;
      padding-left: 5px;
    }
  }
}
.image-content {
  &__circle {
    @include circle;
    margin: 10% auto 0 auto;
  }
  &__message {
    padding: 100px;
    z-index: 15;
    &--title {
      @include title-anime;
    }
    &--text {
      @include title-yabu;
    }
  }
}

.title-anime {
  color: $color-white;
}

.title-yabu {
  color: $color-primary;
}

@media (max-width: 1000px) {
  .login-content {
    display: grid;
    grid-template-columns: 100%;
    &__img {
      display: none;
    }
    &__form {
      background: linear-gradient(to top, $color-black, $color-primary);
    }
  }
  .text-anime {
    display: none;
  }
  .icon-back {
    margin-top: 2%;
  }
}
</style>