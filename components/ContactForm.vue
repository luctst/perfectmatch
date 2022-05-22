<template>
  <section class="form container">
    <form
    class="form--wrapper"
    @submit.prevent="submit">
      <div
      v-for="(inputD, i) in inputs"
      :key="i"
      class="form--wrapper--parent">
        <input-vue
        :label="inputD.label"
        :type="inputD.type"
        :error="errors[i]"
        :placeholder="inputD.placeholder"
        :is-required="inputD.required"
        :options="inputD.options ? inputD.options : []"
        @inputUpdate="function (newInputValue) { updateDataToPost(i, newInputValue) }">
        </input-vue>
      </div>
      <div class="form--wrapper--actions">
        <div class="form--wrapper--actions--text">
          <div class="subtitle">* Champs Obligatoires</div>
        </div>
        <button
        type="submit"
        class="is__btn__secondary">
          <send v-if="sending"></send>
          <template v-else>
            Envoyer
          </template>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Send from '~/assets/img/send.svg?inline';

export default {
  name: 'FormVue',
  components: {
    Send,
  },
  data() {
    return {
      errorDefault: {
        active: false,
        message: null,
      },
      sending: false,
      dataToPost: {},
      errors: null,
      inputs: [
        {
          type: 'text',
          label: 'Nom',
          placeholder: 'Saissisez votre nom',
          vModel: 'nom',
          required: true,
          validateFn: this.checkEmptyValue,
        },
        {
          type: 'text',
          label: 'Prénom',
          placeholder: 'Saissisez votre prénom',
          vModel: 'name',
          required: true,
          validateFn: this.checkEmptyValue,
        },
        {
          type: 'email',
          label: 'Adresse mail',
          placeholder: 'Saissisez votre adresse mail',
          vModel: 'mail',
          required: true,
          validateFn: this.checkMail,
        },
        {
          type: 'tel',
          label: 'Téléphone',
          placeholder: 'Saissisez votre téléphone',
          vModel: 'phone',
          required: false,
        },
        {
          type: 'date',
          label: 'Date de l\'évenement',
          placeholder: 'JJ/MM/AAAA',
          vModel: 'dateEvent',
          required: false,
        },
        {
          type: 'select',
          placeholder: 'Choissisez un type d\'évenement',
          label: 'Type d\'événement',
          vModel: 'typeEvent',
          required: true,
          validateFn: this.checkEmptyValue,
          options: [
            'Mariage',
            'Anniversaire',
            'Baby-Shower',
            'Gender-Reveal',
            'Fête religieuse',
            'Fiançailles',
            'Demande en mariage',
            'EVJF',
            'Autre',
          ],
        },
        {
          type: 'textarea',
          placeholder: 'Saissisez votre message',
          label: 'Message',
          vModel: 'message',
          required: false,
        },
      ],
    };
  },
  created() {
    this.errors = this.inputs.map(() => ({...this.errorDefault}));
  },
  methods: {
    checkMail(value) {
      if (!value) return 'Le champ doit être remplie';
      if (!value.length) return 'Le champ doit être remplie';
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) === false) {
        return 'Mauvais format de mail';
      }

      return true;
    },
    checkEmptyValue(value) {
      if (!value) return 'Le champ doit être remplie';
      if (!value.length) return 'Le champ doit être remplie';
      return true;
    },
    updateDataToPost(index, inputValue) {
      this.dataToPost[this.inputs[index].vModel] = inputValue;
    },
    submit() {
      try {
        this.errors = this.inputs.map((inputData) => {
          if (!inputData.validateFn) return { ...this.errorDefault };

          const resultValidateFn = inputData.validateFn(this.dataToPost[inputData.vModel]);
          return {
            ...this.errorDefault,
            active: typeof resultValidateFn === 'string' || false,
            message: typeof resultValidateFn === 'string' ? resultValidateFn : null
          }
        });

        this.sending = true;
        this.$toast.show(
          'Votre message a bien été envoyé',
          {
            className: ['toasted', 'is__toasted__success']
          },
        );
        this.sending = false;
      } catch (error) {
        this.sending = false;
        this.$toast.show(
          error.message,
          {
            className: ['toasted', 'is__toasted__error'],
          },
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &--wrapper {
    box-sizing: content-box;
    flex-wrap: wrap;
    display: flex;

    @media (min-width: 350px) {
      flex-direction: column;
    }

    @media (min-width: 920px) {
      flex-direction: row;

      &--parent:nth-child(1n) {
        margin-right: 2rem;
      }

      &--parent:nth-last-child(2) {
        flex: 0 0 calc(100% - 2rem);
      }
    }

    &--parent {
      max-width: 100%;

      @media (min-width: 350px) {
        margin-bottom: 1.5rem;
        flex: 0 0 100%;
      }

      @media (min-width: 920px) {
        flex: 0 0 calc((100% / 2) - 2rem);
      }
    }

    &--actions {
      display: flex;
      flex: 0 0 100%;
      margin-top: 2rem;

      @media (min-width: 320px) {
        align-items: flex-start;
        flex-direction: column;
      }

      @media (min-width: 920px) {
        align-items: flex-end;
        flex-direction: row;
      }

      &--text {
        div {
          text-align: left;
        }

        &:first-child {
          margin-top: 0;
        }

        &:last-child {
          color: #E55860;
          margin-top: 1rem;
        }
      }

      button {
        svg {
          height: 10px;
          width: 100%;
        }

        @media (min-width: 350px) {
          margin-top: 2rem;
        }

        @media (min-width: 920px) {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>