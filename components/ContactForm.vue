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
import globalMixin from '~/mixins/global';

export default {
  name: 'FormVue',
  components: {
    Send,
  },
  mixins: [globalMixin],
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
          vModel: 'nom',
          required: true,
          validateFn: this.checkEmptyValue,
        },
        {
          type: 'text',
          vModel: 'name',
          required: true,
          validateFn: this.checkEmptyValue,
        },
        {
          type: 'email',
          vModel: 'mail',
          required: true,
          validateFn: this.checkMail,
        },
        {
          type: 'tel',
          vModel: 'phone',
          required: false,
        },
        {
          type: 'date',
          vModel: 'dateEvent',
          required: false,
        },
        {
          type: 'select',
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
          vModel: 'message',
          required: false,
        },
      ],
    };
  },
  created() {
    this.inputs = this.inputs.map((fieldData, i) => {
      const fd = { ...fieldData };
      fd.label = this.content.fieldformulaire[i].label;
      fd.placeholder = this.content.fieldformulaire[i].placeholder;

      return fd;
    });
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
    async submit() {
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

        const canSend = this.errors.every((err) => err.active === false);
        if (!canSend) {
          return false;
        }

        this.sending = true;
        await this.$axios.post(
          '/email',
          {
            to: process.env.NODE_ENV === 'development'
              ? 'lucas.tostee@gmail.com'
              : this.dataToPost.mail,
            from: 'luc.tostee@outlook.fr',
            replyTo: 'theperfectmatch.contact@gmail.com',
            subject: `The Perfect Match - ${this.dataToPost.nom} ${this.dataToPost.name} a envoyé un mail depuis le formulaire`,
            html: `
            <h1>The Perfect Match</h1>
            <div>Nom: <strong>${this.dataToPost.nom}</strong></div>
            <div>Prénom: <strong>${this.dataToPost.name}</strong></div>
            <div>Mail: <strong>${this.dataToPost.mail}</strong></div>
            <div>Téléphone: <strong>${this.dataToPost.phone}</strong></div>
            <div>Date de l'événement: <strong>${this.dataToPost.dateEvent}</strong></div>
            <div>Type de l'événement: <strong>${this.dataToPost.typeEvent}</strong></div>
            <div>Message: <strong>${this.dataToPost.message}</strong></div>
            `,
          },
        );

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
      position: relative;

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
          position: absolute;
          left: calc(50% - 116px);
          margin-top: 0;
        }
      }
    }
  }
}
</style>