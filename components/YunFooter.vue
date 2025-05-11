<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount';
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue';

const { site } = useAddonVercount();
</script>

<template>
  <YunFooter>
    <div>
      <span>
        <span v-if="site.pv" class="ml-2">
          {{ $t("site.pv") }}: {{ site.pv }}
        </span>
        <span v-if="site.uv" class="ml-2">
          {{ $t("site.uv") }}: {{ site.uv }}
        </span>
      </span>
    </div>

    <VCLiveTime mt="2" start-time="2024-05-01">
      <template #live-time-before>
        <span>
          {{ $t("site.live-time") }}
        </span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>

<style lang="scss" scoped></style>
