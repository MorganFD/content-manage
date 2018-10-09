<template>
    <input :type="type" :placeholder="placeholder" :index="index" :value="value" :class="className" :maxlength="maxLength"
      @blur="handleBlur" @focus="handleFocus" @input="updateValue"
    >
</template>
<script>
export default {
  name: 'Au-input',
  data () {
    return {
      // options: {
      //   type: this.$props.type.default,
      //   placeholder: this.$props.placeholder.default,
      //   index: this.$props.index.default,
      //   value: this.$props.value,
      //   maxLength: this.$props.maxLength,
      //   className: this.$props.className
      // }
    }
  },
  mounted () {
    // console.log(this.$props)
    // console.log(data)
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    },
    value: {},
    maxLength: {
      type: Number,
      default: 50
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleBlur (e) {
      // console.log(e.target.value)
      this.$emit('handleBlur', e.target.value)
    },
    handleFocus (e) {
      // console.log('this is focus')
      this.$emit('handleFocus', e.target.value)
    },
    updateValue (e) {
      // console.log(val)
      this.$emit('updateValue', e.target.value)
    }
  }
}
</script>
<style scoped>

</style>
