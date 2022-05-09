// 引入naive对应的定义类型
import type { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
import type { LoadingBarProviderInst } from "naive-ui/lib/loading-bar/src/LoadingBarProvider";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $loading: LoadingBarProviderInst;
  }
}
