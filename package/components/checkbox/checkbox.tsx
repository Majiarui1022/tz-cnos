
import { defineComponent, computed, PropType, ref } from 'vue'
import type { TzCheckboxGroup } from './type'
import { checkboxDefault, checkgroupDefault } from './default'
import { reject } from '../../hooks/tz'
export default defineComponent({
  emits: ['update:modelValue'],
  name: 'tz-checkbox',
  props: {
    modelValue: {
      type: [Boolean, String, Array]
    },
    label: String,
    trueValue: [String, Number],
    falseValue: [String, Number],
    disabled: Boolean,
    border: Boolean,
    size: String,
    name: String,
    checked: Boolean,
    indeterminate: Boolean,
    validateEvent: Boolean,
    tabindex: [String, Number],
    id: String,
    ariaControls: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    controls: String,

    min: Number,
    max: Number,
    ariaLabel: String,
    textColor: String,
    fill: String,
    tag: String,

    labelFiled: {
      type: String,
      default: 'label'
    },
    valueFiled: {
      type: String,
      default: 'value'
    },
    api: Function as PropType<(params: any) => Promise<any>>,
    params: Object as PropType<any>,
    options: Array
  },
  setup(props: TzCheckboxGroup, { emit }) {
    let inputValue = computed({
      get() {
        return props.modelValue
      },
      set(val: any) {
        emit('update:modelValue', val)
      },
    })
    const checkArray = ref(props.options)
    if (props.api) {
      props.api(props.params).then((res) => {
        checkArray.value = res.data
      })
    }
    // gropu组
    const checkboxGroup = () => (
      <>
        <el-checkbox-group
          v-model={inputValue.value}
          {...checkgroupDefault}
          {...reject(props, ['options'])}
        >
          {
            checkArray.value.length > 0 && checkArray.value.map(item => (
              <el-checkbox {...checkboxDefault} {...item} label={item[props.labelFiled]} value={item[props.valueFiled]} />
            ))
          }
        </el-checkbox-group>
      </>
    )
    // gropu
    const checkbox = () => (
      <>
        <el-checkbox v-model={inputValue.value} disabled={props.disabled} label={props.labelFiled} value={props.valueFiled} />
      </>
    )
    const elCheckboxGroup = () => {
      return checkArray.value && checkArray.value.length > 0 ? checkboxGroup() : checkbox()
    }
    return () => elCheckboxGroup()
  },
})