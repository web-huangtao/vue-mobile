import server from '@/utils/request.js'
export function nav(params) {
  return server({
    url: '/kind/nav',
    method: 'get',
    params: params
  })
}

export function kind(params) {
  return server({
    url: '/kind',
    method: 'get',
    params: params
  })
}
