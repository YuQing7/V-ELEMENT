<template>
  <button
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
// import type { ButtonProps } from './types'
import type { ButtonProps } from './types'
defineProps<ButtonProps>()
</script>
<style scoped></style>
