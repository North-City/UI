<template>
  <div class="ls-alert"
       v-show="visible"
       :class="typeAlertClass"
       role="alert">
    <div class="ls-alert-content" :class="[center?'ls-alert-is-center':'']">
      <i class="iconfont ls-alert-icon" v-if="showIcon" :class="[iconClass,isBigIcon]"/>

      <div :class="center?'ls-alert-is-center':''">
        <span class="ls-alert-title" v-if="title||$slots.title" :class="[isBoldTitle]">
        <slot name="title">{{ title }}</slot>
      </span>
        <p class="ls-alert-subText" v-if="$slots.default">
          <slot></slot>
        </p>
        <p class="ls-alert-subText" v-else>{{ subText }}</p>
      </div>
    </div>
    <i class="ls-alert-close iconfont"
       :class="[closeText!== ''?'is-custom-icon':closeType,subText?'ls-alert-close-big':'',theme==='dark'?'ls-alert-close-dark':'']"
       v-show="showClose" @click="close()">{{ closeText }}
    </i>
  </div>
</template>
<script type="text/babel">
import {ICON_MAP} from '@/components/Icon-Map/icon-map'

export default {
  created() {
    console.log(this.$slots)
  },
  name: 'LsAlert',
  computed: {
    typeAlertClass() {
      console.log(`ls-alert-${this.type}-${this.theme}`)
      return `ls-alert-${this.type}-${this.theme}`;
    },
    iconClass() {
      return ICON_MAP[this.type] || 'info'
    },
    isBigIcon() {
      return this.subText || this.$slots.default ? 'ls-alert-is-big' : '';
    },
    isBoldTitle() {
      return this.subText || this.$slots.default ? 'ls-alert-is-bold' : '';
    },
    closeType() {
      return ICON_MAP.error
    }
  },
  props: {
    type: {
      type: String,
      default: 'info'
    },
    center: {
      type: Boolean,
      default: false
    },
    title: String,
    subText: String,
    theme: {
      type: String,
      default: (value) => {
        return ['light', 'dark'].indexOf(value) !== -1 || 'light';
      }
    },
    showIcon: {
      type: Boolean, default: false
    },
    closeText: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close', this)
    },
  }
}
</script>