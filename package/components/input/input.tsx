import { computed, defineComponent, PropType, ref } from "vue";
import { InputType } from './type'
import { inputExposes } from './inputExposes'
export default defineComponent({
  emits: ['update:modelValue', 'blur', 'focus', 'change', 'input', 'clear'],
  name: 'tz-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: [String, Number],
    maxlength: [String, Number],
    minlength: [String, Number],
    showWordLimit: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    clearable: {
      type: Boolean,
      default: false
    },
    formatter: Function as PropType<Pick<InputType, 'formatter'>>,
    parser: Function as PropType<Pick<InputType, 'parser'>>,
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    prefixIcon: ([String, Object]) as PropType<Pick<InputType, 'prefixIcon'>>,
    suffixIcon: ([String, Object]) as PropType<Pick<InputType, 'prefixIcon'>>,
    rows: {
      type: Number,
      default: 2
    },
    autosize: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    name: String,
    readonly: {
      type: Boolean,
      default: false
    },
    max: String as PropType<Pick<InputType, 'max'>>,
    min: String as PropType<Pick<InputType, 'max'>>,
    step: String as PropType<Pick<InputType, 'max'>>,
    resize: String as PropType<Pick<InputType, 'resize'>>,
    autofocus: {
      type: Boolean,
      default: false
    },
    form: String,
    ariaLabel: String,
    tabindex: [String, Number],
    validateEvent: {
      type: Boolean,
      default: true
    },
    inputStyle: {
      type: [String, Object] as PropType<Pick<InputType, 'inputStyle'>>,
      default: {}
    },
    label: String
  },
  setup(props: InputType, ctx) {
    const TzInput = ref()
    const inputValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        ctx.emit('update:modelValue', val)
      }
    })
    // function renderSlot() {

    // }
    function blur(event: FocusEvent) {
      ctx.emit('blur', event)
    }
    function focus(event: FocusEvent) {
      ctx.emit('focus', event)
    }
    function change(value: string | number) {
      ctx.emit('change', value)
    }
    function input(value: string | number) {
      ctx.emit('input', value)
    }
    function clearValue() {
      ctx.emit('clear')
    }
    const doRender = () => (
      <>
        <el-input
          ref={TzInput}
          v-model={inputValue.value}
          {...props}
          onBlur={blur}
          onFocus={focus}
          onChange={change}
          onInput={input}
          onClear={clearValue}
          vSlots={{ ...ctx.slots }}
        >
        </el-input>
      </>
    )
    return {
      doRender,
      ...inputExposes(TzInput)
    }
  },
  render() {
    return <> {this.doRender()}</>
  }
})