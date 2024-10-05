import type { RouteParams } from 'vue-router'

/**
 * 获取route params
 * @returns route params
 */
function useRouterParams<T extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as T)
}

export { useRouterParams }
