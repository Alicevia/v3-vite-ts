<template>
  <div ref="containerRef" class="container">
    <ul
      ref="listRef"
      class="list"
      :class="scrollState.isScroll && 'scroll'"
      :style="{ top: '0px', 'animation-play-state': scrollState.animationPlay }"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
    >
      <li v-for="(item, index) in list" :key="item[rowKey]">
        <slot :item="item" :index="index"></slot>
      </li>
      <template v-if="scrollState.isScroll">
        <li v-for="(item, index) in list" :key="item[rowKey]">
          <slot :item="item" :index="index"></slot>
        </li>
      </template>
    </ul>
  </div>
</template>
<script></script>
<script setup>
import { ref, reactive, computed, watch, nextTick } from 'vue'
export default {
  name: 'ScrollList',
}
const props = defineProps({
  list: {
    type: Array,
    default() {
      return []
    },
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  speed: Number,
})
const { containerRef, listRef, scrollState, mouseEnter, mouseLeave } =
  scrollList()
function scrollList() {
  const containerRef = ref(null)
  const listRef = ref(null)
  const scrollState = reactive({
    isScroll: false, // 动画类控制
    animationPlay: 'running', // 动画停止开始
    speed: computed(() => {
      return props.speed || 17
    }), // px/s
    total: 0, // ul未克隆之前的长度
    totalPx: computed(() => {
      return '-' + scrollState.total + 'px'
    }),
    time: computed(() => {
      // 根据速度算出时间
      if (listRef.value) {
        return scrollState.total / scrollState.speed
      } else {
        return 10
      }
    }),
    timeString: computed(() => {
      return scrollState.time + 's'
    }),
  })

  const mouseEnter = () => {
    scrollState.animationPlay = 'paused'
  }
  const mouseLeave = () => {
    scrollState.animationPlay = 'running'
  }

  return { containerRef, listRef, scrollState, mouseEnter, mouseLeave }
}
init()
function init() {
  const isScroll = () => {
    const outerOffsetHeight = containerRef.value.offsetHeight
    const innerOffsetHeight = listRef.value.offsetHeight
    if (outerOffsetHeight < innerOffsetHeight) {
      // 一层的高度已经很高开启滚动
      scrollState.isScroll = true
      updateState()
    } else {
      // 渲染完成后如果x2高度依然太小 那么不多次渲染
      scrollState.isScroll = false
    }
  }
  const resetAnimation = () => {
    scrollState.isScroll = false
    nextTick(() => {
      // 更新dom结束
      isScroll() // 重新计算dom高度
    })
  }
  const updateState = () => {
    nextTick(() => {
      scrollState.total = listRef.value.offsetHeight / 2
    })
  }
  watch(() => props.list, resetAnimation, { immediate: true })

  window.addEventListener('resize', resetAnimation)
}
// 一层渲染 得到高度 对比 如果小那么不动 如果大 那么开启二次渲染
</script>
<style lang="less" scoped>
@keyframes scrollList {
  0% {
    top: 0;
  }
  100% {
    top: v-bind('scrollState.totalPx');
  }
}
.container {
  position: relative;
  height: 100%;
  overflow: hidden;
  .list {
    margin-bottom: 0;
    position: absolute;
    width: 100%;
    &.scroll {
      animation: scrollList v-bind('scrollState.timeString') linear infinite;
    }
  }
}
</style>
