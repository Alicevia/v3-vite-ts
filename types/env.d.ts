/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import 'vue-router'

declare global {
  interface Window {
    $message: MessageApiInjection
    $dialog: DialogApiInjection
    $loadingBar: LoadingBarApiInjection
  }
  declare let $message: MessageApiInjection
  declare let $dialog: DialogApiInjection
  declare let $loadingBar: LoadingBarApiInjection
}

declare module 'vue-router' {
  interface RouteMeta {
    key: number
    title?: string
    icon?: string
    sort?: number
    [k: string]: unknown
  }
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
