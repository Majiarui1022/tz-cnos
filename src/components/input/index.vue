<template>
  <TzInput v-model="value" ref="inputs">
    <template #prefix>123</template>
  </TzInput>
  <el-button @click="clear">清空</el-button>
  <el-button @click="focus">聚焦</el-button>
  <el-button @click="blur">视角</el-button>
  <el-button @click="input">Input HTML 元素</el-button>
  <el-button @click="resizeTextarea">改变 textarea 大小</el-button>
  <el-button @click="select">选中 input 中的文字</el-button>
  <el-button @click="textarea">HTML textarea 元素</el-button>
  <el-button @click="textareaStyle">textarea 的样式</el-button>
  <el-button @click="isComposing">是否是输入 composing 状态</el-button>
  <br />
  <br />
  <el-input v-model="value">
    <template #prefix>123</template>
  </el-input>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import TzInput from '../../../package/components/input/index'
const value = ref('')
const inputs = ref()
function clear() {
  inputs.value.clear()
}
function blur() {
  inputs.value.blur()
}
function focus() {
  inputs.value.focus()
}
function input() {
  console.log(inputs.value.input())
}
function resizeTextarea() {
  inputs.value.resizeTextarea()
}
function select() {
  inputs.value.select()
}
function textarea() {
  console.log(inputs.value.textarea())
}
function textareaStyle() {
  return inputs.value.textareaStyle
}
function isComposing() {
  console.log(inputs.value.isComposing())
}
</script>
