import { RouterLink } from 'vue-router'
import type { RouteRecordName } from 'vue-router'
export const renderLabel = (routeName: RouteRecordName, title: string) => {
  return () =>
    h(
      RouterLink,
      {
        to: {
          name: routeName,
        },
      },
      { default: () => title },
    )
}
