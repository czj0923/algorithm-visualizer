import { getCurrentInstance, ComponentInternalInstance } from "vue";
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance;
  const { $route, $router, $pinia } = appContext.config.globalProperties;
  return {
    $route,
    $router,
    $pinia,
  };
}
