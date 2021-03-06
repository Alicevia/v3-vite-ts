import { defineStore } from 'pinia'
import { darkTheme, useThemeVars } from 'naive-ui'
import { useStorage } from '@vueuse/core'
import type { RemovableRef } from '@vueuse/core'
import color from 'css-color-function'
import type { computedRef } from 'vue'

import type { ThemeCommonVars, CustomThemeCommonVars } from 'naive-ui'

interface Theme {
  theme: RemovableRef<string>
  themeColor: RemovableRef<string>
  themeVars: ComputedRef<ThemeCommonVars & CustomThemeCommonVars>
}
const useThemeStore = defineStore({
  id: 'theme',
  state (): Theme {
    return {
      theme: useStorage('theme', 'dark'),
      themeColor: useStorage('themeColor', {
        primaryColor: 'rgb(255,125,125)'
      }),
      themeVars: {}
    }
  },
  getters: {
    themeTitle (): string {
      return this.theme === 'dark' ? '浅色' : '深色'
    },
    myTheme (): BuiltInGlobalTheme {
      return this.theme === 'dark' ? darkTheme : null
    },
    themeOverrides (): BuiltInGlobalTheme {
      return {
        common: {
          primaryColor: this.themeColor.primaryColor,
          primaryColorHover: color.convert(
            `color(${this.themeColor.primaryColor} tint(10%))`
          ),
          primaryColorSuppl: color.convert(
            `color(${this.themeColor.primaryColor} tint(10%))`
          ),
          primaryColorPressed: color.convert(
            `color(${this.themeColor.primaryColor} shade(10%))`
          )
        },
        Avatar: {
          color: 'transparent'
        }
      }
    }
  },
  actions: {
    toggleTheme (): void {
      this.theme === 'dark' ? (this.theme = null) : (this.theme = 'dark')
    },
    changeThemeColor: useDebounceFn(function (key, color) {
      this.themeColor[key] = color
    }, 300)
  }
})

export default useThemeStore
