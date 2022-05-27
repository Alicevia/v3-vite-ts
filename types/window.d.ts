import type { DialogApiInjection } from 'naive-ui/lib/dialog/src/DialogProvider'
import type { LoadingBarApiInjection } from 'naive-ui/lib/loading-bar/src/LoadingBarProvider'
import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'

declare global {
  interface Window {
    $message: MessageApiInjection
    $dialog: DialogApiInjection
    $loadingBar: LoadingBarApiInjection
  }
   let $message: MessageApiInjection
   let $dialog: DialogApiInjection
   let $loadingBar: LoadingBarApiInjection
}
