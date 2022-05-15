<template>
  <div class="main--container">
    <div
    :class="['input--wrapper', error.active && 'is__input__invalid']">
      <label
      :for="`input-${_uid}`"
      class="input--wrapper--label">
        {{ label }}
        <span v-if="isRequired">*</span>
      </label>
      <input
      v-if="type !== 'select' && type !== 'textarea'"
      v-model="content"
      :type="type"
      :placeholder="placeholderContent"
      class="input--wrapper--input"
      />
      <select
      v-else-if="type === 'select'"
      v-model="content"
      :placeholder="placeholderContent"
      class="input--wrapper--select">
        <option value="" disabled selected>{{ placeholderContent }}</option>
        <option
        v-for="(op, i) in options"
        :key="i"
        :value="op">
          {{ op }}
        </option>
      </select>
      <textarea
      v-else
      v-model="content"
      :placeholder="placeholderContent"
      class="input--wrapper--textarea"></textarea>
    </div>
    <div v-if="error.active">
      <div class="subtitle">{{ error.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputVue',
  props: {
    error: {
      type: Object,
      required: true,
      validator(value) {
        if (typeof value !== 'object') return false;

        if (
          !Object.prototype.hasOwnProperty.call(value, 'active')
          && !Object.prototype.hasOwnProperty.call(value, 'message')
        ) {
          return false;
        }
      }
    },
    type: {
      type: String,
      required: true,
      validator(value) {
        return ['text', 'password', 'email', 'tel', 'date', 'select', 'textarea'].includes(value);
      }
    },
    label: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    content(newValue) {
      this.$emit('inputUpdate', newValue);
    }
  },
  computed: {
    placeholderContent() {
      return this.placeholder ? this.placeholder : this.label;
    }
  },
  data() {
    return {
      content: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.is__input__invalid {
  border: 1px solid #E55860;

  label {
    color: #E55860;
  }
}

.main--container {
  &:last-child {
    div {
      text-align: left;
      color: #E55860;
      margin-top: 8px;
    }
  }
}

.input--wrapper {
  background-color: #FCF4FF;
  box-sizing: border-box;
  display: flex;
  position: relative;
  padding: 18px 0 0 20px;
  min-height: 96px;
  max-width: 100%;
  width: 100%;

  &--label {
    align-items: center;
    color: #3C2A44;
    display: flex;
    font-family: $mainTypo;
    font-size: 1rem;
    font-weight: 700;
    line-height: 20px;
    position: absolute;
    left: 20px;

    span {
      margin-left: 4px;
    }
  }

  &--input,
  &--select,
  &--textarea {
    display: inline-block;
    background-color: transparent;
    border: none;
    color: #3C2A44;
    font-family: $mainTypo;
    font-size: 1.3rem;
    font-weight: 400;
    outline: none;
    line-height: 35px;
    margin-top: 1.5rem;
    margin-bottom: 14px;
    width: 100%;
  }
}
</style>