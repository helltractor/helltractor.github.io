<script lang="ts" setup>
import { useAddonVercount } from "valaxy-addon-vercount";
import SakuraFooter from "valaxy-theme-sakura/components/SakuraFooter.vue";

const { site } = useAddonVercount();
</script>

<template>
  <SakuraFooter class="py-4">
    <div class="flex flex-col items-center space-y-2">
      <div class="flex flex-wrap justify-center gap-4 text-sm">
        <span v-if="site.pv"> {{ $t("site.pv") }}: {{ site.pv }} </span>
        <span v-if="site.uv"> {{ $t("site.uv") }}: {{ site.uv }} </span>
      </div>

      <VCLiveTime start-time="2024-05-01" class="text-sm">
        <template #live-time-before>
          <span>
            {{ $t("site.live-time") }}
          </span>
        </template>
      </VCLiveTime>
    </div>
  </SakuraFooter>
</template>

<style lang="scss" scoped></style>
