import server from '@/utils/request.js'
export function list(params) {
  return server({
    url: '',
    method: 'get',
    params: params
  })
}

export function lists(data) {
  return server({
    url: '',
    method: 'post',
    data
  })
}
