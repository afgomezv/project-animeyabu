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
      <div class="icon-back">
        <b-icon icon="box-arrow-in-left" scale="1.8" variant="light"></b-icon>
      </div>
      <div class="information-form">
        <div class="information-form__img">
          <img
            class="information-form__img--faces"
            src="../../assets/images/faces.png"
            alt="faces"
          />
          <img
            class="information-form__img--letters"
            src="../../assets/images/letters.png"
            alt="letters"
          />
          <span class="information-form__img--text">¡Hola, te extrañamos</span>
        </div>
        <div class="information-form__submit">
          <label class="information-form__submit--label">Email</label>
          <div class="information-form__submit--input">
            <input type="email" v-model.trim="user.email" name="email" />
          </div>
          <div v-if="messageError" class="information-form__submit--error">
            Email Inválido
          </div>
        </div>
        <div class="information-form__submit">
          <label class="information-form__submit--label">Contraseña</label>
          <div class="information-form__submit--input">
            <input
              :type="typeOfInput"
              v-model.trim="user.password"
              name="password"
            />
            <button class="icon-eye" @click="changeTypeOfInput">
              <b-icon :icon="changeIcon" scale="1.2"></b-icon>
            </button>
          </div>
          <div class="information-form__submit--message">
            ¿Olvido la contraseña?
          </div>
        </div>
        <div class="information-form__button">
          <button type="submit" @click="access">Acceder</button>
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
            >Quieres registrarte?</span
          >
          <button
            class="information-social-media__register--text2"
            @click="changeView('RegisterAccount')"
          >
            Registrate
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
import Carousel from "../../components/Carousel.vue";
import showPassword from "../../utils/ShowPassword";
import { errorMessage } from "../../utils/MessagesSweetAlert";

import auth from "../../logic/auth";

export default {
  name: "Login",
  mixins: [showPassword],
  components: {
    Carousel,
  },
  data() {
    return {
      messageError: false,
      error: false,
      user: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    validateEmail() {
      if (this.user.email) {
        this.messageError = false;
      } else {
        this.messageError = true;
      }
    },
    async access() {
      this.validateEmail();
      if (this.user.email && this.user.password) {
        try {
          const response = await auth.login(this.user);
          this.$router.push("/");
          console.log(response);
        } catch (error) {
          this.error = true;
        }
      } else {
        errorMessage();
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
}

.information-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 20px 0px;
    &--faces {
      width: 277px;
      height: 136px;
    }
    &--letters {
      padding-top: 10px;
    }
    &--text {
      color: $color-white;
      font-weight: bold;
      font-family: $font-family-text;
      font-style: italic;
      letter-spacing: 0.065em;
      padding-top: 10px;
    }
  }
  &__submit {
    width: 50%;
    &--label {
      @include label-for-input;
    }
    &--input {
      @include border-input;
      align-items: center;
      input {
        @include input-content;
      }
    }
    &--error {
      @include message-content($color-error);
    }
    &--message {
      @include message-content($color-secondary);
    }
  }
  &__button {
    width: 50%;
    padding-top: 2%;
    button {
      @include primary-button;
    }
  }
}
.icon-eye {
  @include icon-eye;
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