<template>
  <Table />
  <el-button @click="downloadFile">下载</el-button>
</template>
<script lang="ts" setup>
import Table from '../components/table/index.vue'

  function downloadFile() { 
  console.dir(Table)



//   const blob = new Blob([this.text], { type: 'text/plain' }); 
//   const url = window.URL.createObjectURL(blob); 
//   const a = document.createElement('a'); a.href = url; 
//   a.download = 'myTextFile.txt'; 
// // 指定文件保存的名称 
//   document.body.appendChild(a); a.click(); document.body.removeChild(a); window.URL.revokeObjectURL(url); 
  // 释放内存 
  } 

</script>
