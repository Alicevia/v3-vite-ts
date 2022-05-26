
declare module 'css-color-function' {
  interface CssColor {
    convert: (s: string) => string
    parse: (s: string) => string
  }
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    permission: (v: T) => boolean
  }
}
