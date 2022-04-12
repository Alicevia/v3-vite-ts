/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

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
