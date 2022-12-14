import {
  BrowserWindow,
  ipcRenderer,
  MenuItem,
  MenuItemConstructorOptions,
} from "electron"

import {Dispatch} from "../../../state/types"

type Props = {
  name: string
  label: string
  listener: Function
}

type Options = {
  enabled?: boolean
  visible?: boolean
}

export default function action({name, label, listener}: Props) {
  return {
    // To be called anywhere we need to build menus
    menuItem(args: any[], options?: Options): MenuItemConstructorOptions {
      return {
        label,
        click(menuItem: MenuItem, win: BrowserWindow) {
          win.webContents.send(name, ...args)
        },
        ...options,
      }
    },
    // To be called in the render process
    listen(dispatch: Dispatch) {
      return ipcRenderer.on(name, (e, ...args) => listener(dispatch, ...args))
    },
  }
}
