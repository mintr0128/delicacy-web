<template>
  <div class="r-button-components">
    <button class="r-button" :class="[type, size, disabled ? 'disable' : '',]"
      :style="[radiusStyle, rbHeight, rbWidth, rbColor]" :disabled="disabled" type="button">
      <!--加载状态-->
      <div class="loading-area iconfont icon-loading" v-if="loading"></div>
      <div class="loading-text" v-if="loading && loadingText">{{ loadingText }}</div>
      <slot v-else></slot>
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: "rbutton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'primary'
    },
    // 按钮的大小
    size: {
      type: String,
      default: 'large'
    },
    // 按钮圆角
    radius: {
      type: [Number, String],
      default: 5
    },
    // 是否loading加载
    loading: {
      type: Boolean,
      default: false
    },
    // 是否禁用按钮
    disabled: {
      type: Boolean,
      default: false
    },
    // 加载提示文字
    loadingText: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 160
    },
    color: {
      type: String,
      default: '#19ce60'
    }
  },
  setup(props) {
    const radiusStyle = computed(() => {
      return {
        'border-radius': props.radius + 'px'
      }
    })
    const rbHeight = computed(() => {
      return {
        'height': props.height + 'px'
      }
    })
    const rbWidth = computed(() => {
      return {
        'width': props.width + 'px'
      }
    })
    const rbColor = computed(() => {
      return {
        'background-color': props.color
      }
    })
    return {
      radiusStyle,
      rbHeight,
      rbWidth,
      rbColor
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes rotating {
  0% {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(1turn)
  }
}

.r-button-components {
  .r-button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    .loading-area {
      margin-right: 5px;
      font-size: 14px;
      display: inline-block;
      animation: rotating 1.5s infinite;
    }

    &:hover {
      opacity: .8;
    }

    &.disable {
      opacity: .5 !important;
      cursor: not-allowed !important;
    }

    &.primary {
      background-color: $txColor;
      color: #fff;
    }

    &.warning {
      background-color: #ff4d4f;
      color: #fff;
    }

    &.line {
      background-color: #fff !important;
      color: $txColor !important;
      border: 1px solid $txColor;
    }

    &.large {
      width: 160px;
      height: 40px;
    }

    &.default {
      width: 110px;
      height: 35px;
    }

    &.small {
      width: 90px;
      height: 35px;
      font-size: 13px !important;
    }

  }
}
</style>
