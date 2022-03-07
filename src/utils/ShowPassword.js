export default {
    data() {
      return {
        typeOfInput: 'password',
      };
    },
    methods: {
      changeTypeOfInput() {
        if (this.typeOfInput === 'password') {
          this.typeOfInput = 'text';
        } else {
          this.typeOfInput = 'password';
        }
      },
    },
    computed: {
      changeIcon() {
        if (this.typeOfInput === 'password') {
          return 'eye-slash';
        }
        return 'eye';
      },
    },
  };
  