<script lang="ts" setup>
import { ref } from "vue";
import { ElImageViewer, imageViewerProps } from "element-plus";
import "element-plus/theme-chalk/el-image-viewer.css";
import { onMounted, onUnmounted } from "vue";

const props = defineProps(imageViewerProps);

const visible = ref(true);
function resolve() {
  visible.value = false;
}

onMounted(() => {
  document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<template>
  <div class="HairyImageViewer fixed inset-0 z-2000">
    <ElImageViewer v-if="visible" v-bind="props" @close="resolve()" />
  </div>
</template>
