<template>
  <div class="information-form">
    <div class="information-form__submit">
      <label class="information-form__submit--label">Razón social</label>
      <div class="information-form__submit--input">
        <input
          type="text"
          v-model.trim="userJuridical.companyName"
          name="companyName"
        />
      </div>
    </div>
    <div class="information-form__submit">
      <label class="information-form__submit--label">Nit</label>
      <div class="information-form__submit--input">
        <input type="text" v-model.trim="userJuridical.nit" name="nit" />
      </div>
    </div>
    <div class="information-form__submit">
      <label class="information-form__submit--label">Teléfono</label>
      <div class="information-form__submit--input">
        <input
          type="text"
          v-model.trim="userJuridical.telephone"
          name="telephone"
        />
      </div>
    </div>
    <div class="information-form__submit">
      <label class="information-form__submit--label">Email</label>
      <div class="information-form__submit--input">
        <input type="email" v-model.trim="userJuridical.email" name="email" />
      </div>
    </div>
    <div class="information-form__submit">
      <label class="information-form__submit--label">Contraseña</label>
      <div class="information-form__submit--input">
        <input
          :type="typeOfInput"
          v-model.trim="userJuridical.password"
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
          v-model.trim="userJuridical.confirmPassword"
          name="confirmPassword"
        />
        <button class="icon-eye" @click="changeTypeOfInput">
          <b-icon :icon="changeIcon" scale="1.2"></b-icon>
        </button>
      </div>
    </div>

    <div class="information-form__button">
      <button type="submit" @click="juridicalRegister">Registrar</button>
    </div>
  </div>
</template>

<script>
import showPassword from "../utils/ShowPassword";
import { generalMessage, errorMessage } from "../utils/MessagesSweetAlert";
import auth from "../logic/auth";

export default {
  name: "Juridical",
  mixins: [showPassword],
  components: {},
  data() {
    return {
      userJuridical: {
        companyName: null,
        nit: null,
        telephone: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
      validatePassword: false,
    };
  },
  methods: {
    comfirmPasswords() {
      if (this.userJuridical.password === this.userJuridical.confirmPassword) {
        this.validatePassword = true;
      } else {
        this.validatePassword = false;
      }
    },
    async juridicalRegister() {
      this.comfirmPasswords();
      if (
        this.userJuridical.companyName &&
        this.userJuridical.nit &&
        this.userJuridical.telephone &&
        this.userJuridical.email &&
        this.validatePassword
      ) {
        generalMessage();
        const response = await auth.registerjuridical(this.userJuridical);
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