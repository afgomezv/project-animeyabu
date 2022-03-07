<template>
  <div class="information-form">
    <div class="information-form__submit">
      <label class="information-form__submit--label">Nombre</label>
      <div class="information-form__submit--input">
        <input type="text" v-model.trim="userNatural.name" name="name" />
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label">Apellido</label>
      <div class="information-form__submit--input">
        <input
          type="text"
          v-model.trim="userNatural.lastName"
          name="lastName"
        />
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label">Teléfono</label>
      <div class="information-form__submit--input">
        <input
          type="text"
          v-model.trim="userNatural.telephone"
          name="telephone"
        />
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label"
        >Número de identificación</label
      >
      <div class="information-form__submit--input">
        <input
          type="text"
          v-model.trim="userNatural.numberId"
          name="numberId"
        />
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label">Email</label>
      <div class="information-form__submit--input">
        <input type="email" v-model.trim="userNatural.email" name="email" />
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label">Contraseña</label>
      <div class="information-form__submit--input">
        <input
          :type="typeOfInput"
          v-model.trim="userNatural.password"
          name="password"
        />
        <button class="icon-eye" @click="changeTypeOfInput">
          <b-icon :icon="changeIcon" scale="1.2"></b-icon>
        </button>
      </div>
    </div>

    <div class="information-form__submit">
      <label class="information-form__submit--label"
        >Confirmar contraseña</label
      >
      <div class="information-form__submit--input">
        <input
          :type="typeOfInput"
          v-model.trim="userNatural.confirmPassword"
          name="confirmPassword"
        />
        <button class="icon-eye" @click="changeTypeOfInput">
          <b-icon :icon="changeIcon" scale="1.2"></b-icon>
        </button>
      </div>
    </div>

    <div class="information-form__button">
      <button type="submit" @click="register">Registrar</button>
    </div>
  </div>
</template>

<script>
import showPassword from "../utils/ShowPassword";
import { generalMessage, errorMessage } from "../utils/MessagesSweetAlert";
import auth from "../logic/auth";

export default {
  name: "Natural",
  mixins: [showPassword],
  components: {},
  data() {
    return {
      userNatural: {
        name: null,
        lastName: null,
        telephone: null,
        numberId: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      validatePassword: false,
    };
  },
  methods: {
    comfirmPasswords() {
      if (this.userNatural.password === this.userNatural.confirmPassword) {
        this.validatePassword = true;
      } else {
        this.validatePassword = false;
      }
    },
    async register() {
      this.comfirmPasswords();
      if (
        this.userNatural.name &&
        this.userNatural.lastName &&
        this.userNatural.telephone &&
        this.userNatural.numberId &&
        this.userNatural.email &&
        this.validatePassword
      ) {
        generalMessage();
        const response = await auth.register(this.userNatural);
        console.log(response);
      } else {
        errorMessage();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.information-form {
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
</style>