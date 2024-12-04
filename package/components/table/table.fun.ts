import { TzTableProps } from './tableType'
import { Ref } from 'vue'
export function initializeData(
  props: TzTableProps<any>,
  tableData: Ref<any[]>,
  form: any,
  pageTotal: Ref<number>,
  pageCurrentPage: Ref<number | undefined>
) {
  if (!props.api) {
    return props.data || []
  }
  let searchQuery = {
    total: pageTotal.value,
    currentPage: pageCurrentPage.value,
  }
  if (props.beforeQuery) {
    searchQuery = props.beforeQuery(searchQuery)
  }
  props.api(searchQuery).then((res) => {
    tableData.value = res.data
    form.list = tableData.value
    if (props.showPage) {
      pageTotal.value = res.totalField
    }
  })
}
