import {
  AccessibilitySharp,
  BalloonSharp,
  AirplaneSharp,
  Alarm,
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'
interface IconMap {
  [n: string]: Component
}
const iconMap: IconMap = {
  AccessibilitySharp,
  BalloonSharp,
  AirplaneSharp,
  Alarm,
}
export function renderIcon(icon: string | Component) {
  if (typeof icon === 'string') {
    return () => h(NIcon, null, { default: () => h(iconMap[icon]) })
  } else {
    return () => h(NIcon, null, { default: () => h(icon) })
  }
}
