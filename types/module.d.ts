declare module 'css-color-function' {
  interface CssColor {
    convert: (s: string) => string
    parse: (s: string) => string
  }
}
