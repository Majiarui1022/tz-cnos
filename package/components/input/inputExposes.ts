// export class inputExposes {
//   readonly fomRefValue
//   constructor(formRef) {
//     this.fomRefValue = formRef
//   }
//   clearValue() {
//     this.fomRefValue.clear()
//   }
// }
export function inputExposes(fomRefValue) {
  function clear() {
    fomRefValue.value.clear()
  }
  function blur() {
    fomRefValue.value.blur()
  }
  function focus() {
    fomRefValue.value.focus()
  }
  function input() {
    return fomRefValue.value.input
  }
  function resizeTextarea() {
    fomRefValue.value.resizeTextarea()
  }
  function select() {
    fomRefValue.value.select()
  }
  function textarea() {
    return fomRefValue.value.textarea
  }
  function textareaStyle() {
    return fomRefValue.value.textareaStyle
  }
  function isComposing() {
    return fomRefValue.value.isComposing
  }
  return {
    clear,
    blur,
    focus,
    input,
    resizeTextarea,
    select,
    textarea,
    textareaStyle,
    isComposing,
  }
}
