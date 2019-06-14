import server from '@/utils/request.js'
export function banner(params) {
  return server({
    url: '/banner',
    method: 'get',
    params: params
  })
}

export function list(params) {
  return server({
    url: '/list',
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
