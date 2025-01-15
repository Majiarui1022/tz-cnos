import type {
  UploadFile,
  UploadFiles,
  UploadRequestOptions,
  UploadUserFile,
} from 'element-plus'
type Awaitable<T> = Promise<T> | T
export interface UploadType {
  fileList: UploadUserFile[]
  action?: string
  headers?: object
  method?: string
  multiple?: boolean
  data?: object | Function
  name?: string
  withCredentials?: boolean
  showFileList?: boolean
  drag?: boolean
  accept?: string
  crossorigin?: '' | 'anonymous' | 'use-credentials'
  onPreview?: (uploadFile: UploadFile) => void
  onRemove?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onSuccess?: (
    response,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onError?: (error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onProgress?: (evt, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onChange?: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onExceed?: (files, uploadFiles: UploadFiles) => void
  beforeUpload?: (
    rawFile
  ) => Awaitable<void | undefined | null | boolean | File | Blob>
  beforeRemove?: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => Awaitable<boolean>
  listType?: 'text' | 'picture' | 'picture-card'
  autoUpload?: boolean
  httpRequest?: (
    options: UploadRequestOptions
  ) => XMLHttpRequest | Promise<unknown>
  disabled?: boolean
  limit?: number
}
