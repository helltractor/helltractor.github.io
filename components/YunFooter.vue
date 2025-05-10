<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue';

const { site } = useAddonVercount();
</script>

<template>
  <YunFooter>
    <!-- 自定义页脚内容 -->
    <div>
    <span>
      <span v-if="site.pv" style="margin-left: 10px;">
        {{ $t("site.pv") }}：{{ site.pv }}
      </span>
      <span v-if="site.uv" style="margin-left: 10px;">
        {{ $t("site.uv") }}: {{ site.uv }}
      </span>
    </span>
  </div>
  </YunFooter>
</template>

<style lang="scss" scoped></style>
