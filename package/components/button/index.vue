<template>
  <button class="mj-button" :class="`tz-button-${size} tz-button-${type}`">
    <slot></slot>
  </button>
</template>
<script lang="ts" setup name="tz-button">
import { defineProps } from 'vue'
defineProps({
  size: {
    type: String,
    default: 'middle',
  },
  type: {
    type: String,
    default: 'normal',
  },
})
</script>
<style lang="scss" scoped>
.tz-button {
  font-size: 12px;
  padding: 5px 20px;
}
.tz-button-large {
  height: 30px;
}
.tz-button-middle {
  height: 20px;
}
.tz-button-primary {
  background-color: cadetblue;
}
.tz-button-warring {
  background-color: yellow;
}
</style>
