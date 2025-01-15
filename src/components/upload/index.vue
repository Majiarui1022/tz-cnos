<template>
  <Upload
    :limit="3"
    :fileList="fileList"
    :autoUpload="false"
    list-type="picture-card"
    :onExceed="onExceed"
    :onChange="onChange"
  />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Upload from '../../../package/components/upload/upload'

const fileList = ref([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
function onExceed(files, uploadFiles) {
  console.log(files, uploadFiles, '超出范围了')
}
function onChange(uploadFile, uploadFiles) {
  console.log(uploadFile, uploadFiles, '上传了')
}
</script>
