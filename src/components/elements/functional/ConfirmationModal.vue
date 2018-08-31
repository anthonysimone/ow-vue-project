<template>
  <button class="button is-primary is-inverted" @click="openModal">Clear Data</button>
</template>

<script>
export default {
  props: {
    dialogTitle: {
      type: String
    },
    dialogBody: {
      dialogBody: String,
      required: true
    },
    acceptText: {
      type: String,
      default: 'Yes'
    },
    rejectText: {
      type: String,
      default: 'No'
    },
    rejectDefault: {
      type: Boolean,
      default: true
    },
    successEventName: {
      type: String,
      default: 'confirmationSuccess'
    }
  },

  methods: {
    openModal() {
      this.$modal.show('dialog', {
        title: this.dialogTitle,
        text: this.dialogBody,
        buttons: [
          {
            title: this.acceptText,
            handler: () => {
              this.$emit(this.successEventName);
              this.$modal.hide('dialog');
            },
            default: ! this.rejectDefault
          },
          {
            title: this.rejectText,
            default: this.rejectDefault,    // Will be triggered by default if 'Enter' pressed.
          }
       ]
      });
    }
  }
}
</script>

<style lang="scss">
.v--modal-overlay {
  color: $body-font-color;
}
</style>