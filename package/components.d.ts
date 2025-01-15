import {
  TzButton,
  TzForm,
  TzPagination,
  TzSelect,
  TzTable,
  TzAutocomplete,
  TzCascader,
} from './tz-components/components'

declare module 'vue' {
  export interface GlobalComponents {
    TzButton: typeof TzButton
    TzForm: typeof TzForm
    TzPagination: typeof TzPagination
    TzSelect: typeof TzSelect
    TzAutocomplete: typeof TzAutocomplete
    TzCascader: typeof TzCascader
  }
}
