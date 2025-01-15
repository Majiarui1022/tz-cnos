import type { Ref } from 'vue'
import type { UploadStatus, UploadRawFile, UploadFile } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { UploadType } from './upload.type'
export const uploadCallBack = (props: UploadType, emits) => {
  // 点击文件列表中已上传的文件时的钩子
  function handlePreview(uploadFile) {
    console.log(uploadFile, '点击文件列表中已上传的文件时的钩子')
    props.onPreview && props.onPreview(uploadFile)
  }
  // 文件列表移除文件时的钩子
  function handleRemove(uploadFile, uploadFiles) {
    console.log(uploadFile, uploadFiles, '文件列表移除文件时的钩子')
    props.onRemove && props.onRemove(uploadFile, uploadFiles)
  }
  // 文件上传成功时的钩子
  function handleSuccess(response, uploadFile, uploadFiles) {
    console.log(response, uploadFile, uploadFiles, '文件上传成功时的钩子')
    props.onSuccess && props.onSuccess(response, uploadFile, uploadFiles)
  }
  // 文件上传失败时的钩子
  function handleError(error, uploadFile, uploadFiles) {
    console.log(error, uploadFile, uploadFiles, '文件上传失败时的钩子')
    props.onError && props.onError(error, uploadFile, uploadFiles)
  }
  // 文件上传时的钩子
  function handleProgress(evt, uploadFile, uploadFiles) {
    console.log(evt, uploadFile, uploadFiles, '文件上传时的钩子')
    props.onProgress && props.onProgress(evt, uploadFile, uploadFiles)
  }
  // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
  function handleChange(uploadFile, uploadFiles) {
    console.log(
      uploadFile,
      uploadFiles,
      '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用'
    )
    props.onChange && props.onChange(uploadFile, uploadFiles)
  }
  // 当超出限制时，执行的钩子函数
  function handleExceed(files, uploadFiles) {
    console.log(props, '当超出限制时，执行的钩子函数')
    ElMessage.warning(`超出文件上传最大数量${props.limit}条`)
    props.onExceed && props.onExceed(files, uploadFiles)
  }
  // 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。
  function beforeUpload(rawFile) {
    console.log(
      rawFile,
      '上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传'
    )
    // 处理上传之前方法
    if (props.beforeUpload) {
      return props.beforeUpload(rawFile)
    }
  }
  // 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。
  function beforeRemove(uploadFile, uploadFiles) {
    console.log(
      uploadFile,
      uploadFiles,
      '删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。'
    )
    // 处理上传之前方法
    if (props.beforeRemove) {
      return props.beforeRemove(uploadFile, uploadFiles)
    }
  }
  return {
    handlePreview,
    handleRemove,
    handleSuccess,
    handleError,
    handleProgress,
    handleChange,
    handleExceed,
    beforeUpload,
    beforeRemove,
  }
}

export const defaultMethod = (uploadRef: Ref<any, any>) => {
  function abort(file) {
    uploadRef.value.abort(file)
  }
  function submit() {
    uploadRef.value.abort()
  }
  function clearFiles(status?: UploadStatus[]) {
    uploadRef.value.clearFiles(status)
  }
  function handleStart(rawFile: UploadRawFile) {
    uploadRef.value.handleStart(rawFile)
  }
  function uploadRemove(
    file: UploadFile | UploadRawFile,
    rawFile?: UploadRawFile
  ) {
    uploadRef.value.handleRemove(file, rawFile)
  }
  return {
    abort,
    submit,
    clearFiles,
    handleStart,
    uploadRemove,
  }
}
