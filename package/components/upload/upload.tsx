import { defineComponent, PropType } from "vue";
import { ref } from 'vue'
import type { UploadFile, UploadFiles } from 'element-plus'
import type { UploadType } from './upload.type'
import { uploadCallBack, defaultMethod } from './action'
export default defineComponent({
  props:{
    fileList: {
      type: Array,
      default: []
    },
    action: {
      type: String,
      default: '#'
    },
    headers: Object,
    method: {
      type: String,
      default: 'post'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: {}
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    drag: {
      type: Boolean,
      default: false
    },
    accept: String,
    crossorigin: String,
    onPreview: Function as PropType<(uploadFile: UploadFile) => void>,
    onRemove: Function as PropType<(uploadFile: UploadFile, uploadFiles: UploadFiles) => void>,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    onChange: Function,
    onExceed: Function,
    beforeUpload: Function,
    beforeRemove: Function,
    listType: {
      type: String,
      default: 'text'
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    httpRequest: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
  },
  setup(props: UploadType, ctx) {
    const uploadRef = ref()
    const { 
      handlePreview,
      handleRemove,
      handleSuccess,
      handleError,
      handleProgress,
      handleChange,
      handleExceed,
      beforeUpload,
      beforeRemove
    } = uploadCallBack(props, ctx.emit);
    const {
      abort,
      submit,
      clearFiles,
      handleStart,
      uploadRemove,
    } = defaultMethod(uploadRef);
    const vSlotNode = () => {
      return {
        default: () => (
          <>
            { 
              ctx.slots.default ? 
                ctx.slots.default() : 
                <el-button type="primary">上传2</el-button> 
            }
            
          </>
        ),
        ...ctx.slots
      }
    }
    const innerHtml = () => (
      <>
        <el-upload
          ref={uploadRef}
          v-model:file-list={props.fileList}
          class="upload-demo"
          action={props.action}
          headers={props.headers}
          method={props.method}
          multiple={props.multiple}
          data={props.data}
          name={props.name}
          withCredentials={props.withCredentials}
          show-file-list={props.showFileList}
          drag={props.drag}
          accept={props.accept}
          crossorigin={props.crossorigin}
          autoUpload={false}
          onPreview={handlePreview}
          onRemove={handleRemove}
          onSuccess={handleSuccess}
          onError={handleError}
          onProgress={handleProgress}
          onChange={handleChange}
          onExceed={handleExceed}
          beforeUpload={beforeUpload}
          beforeRemove={beforeRemove}
          list-type={props.listType}
          auto-upload={props.autoUpload}
          http-request={props.httpRequest}
          disabled={props.disabled}
          limit={props.limit}
          vSlots={vSlotNode()}
        >
        </el-upload>
      </>
    ) 
    return {
      innerHtml,
      abort,
      submit,
      clearFiles,
      handleStart,
      handleRemove:uploadRemove,
    }
  },
  render() {
    return <>{this.innerHtml()}</>
  }
})