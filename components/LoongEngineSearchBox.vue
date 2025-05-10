<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAppStore } from "valaxy";

const app = useAppStore();
const { t } = useI18n();

const engines = [
  { name: "Google", url: "https://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=" },
  { name: "Baidu", url: "https://www.baidu.com/s?wd=" },
  { name: "Yandex", url: "https://yandex.com/search/?text=" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=" },
];

const selectedEngine = ref(engines[0]);
const query = ref("");

function search() {
  if (query.value.trim()) {
    window.open(
      selectedEngine.value.url + encodeURIComponent(query.value),
      "_blank",
    );
  }
}
</script>

<template>
  <div class="search-box" :class="{ dark: app.isDark }">
    <select v-model="selectedEngine">
      <option v-for="engine in engines" :key="engine.name" :value="engine">
        {{ engine.name }}
      </option>
    </select>

    <input
      v-model="query"
      class="text"
      :placeholder="t('search-box.placeholder')"
      @keyup.enter="search"
    />

    <button class="search" @click="search">
      {{ t("search-box.search") }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 14px 20px;
  border-radius: 12px;
  background-color: #f5f7fa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.search-box select,
.search-box input.text,
.search-box button {
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;
}

.search-box input.text {
  flex: 1;
  min-width: 120px;
}

.search-box select {
  flex-shrink: 0;
}

.search-box button.search {
  flex-shrink: 0;
  background-color: #409eff;
  color: white;
  border: none;
  cursor: pointer;
}

.search-box button.search:hover {
  background-color: #337ecc;
}

.search-box select:hover,
.search-box input:hover,
.search-box button:hover {
  border-color: #409eff;
}

.search-box input:focus,
.search-box select:focus {
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

/* Dark mode override */
.search-box.dark {
  background-color: #2c3e50;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.search-box.dark select,
.search-box.dark input.text,
.search-box.dark button {
  background-color: #34495e;
  color: white;
  border-color: #555;
}

.search-box.dark select:hover,
.search-box.dark input:hover,
.search-box.dark button:hover {
  border-color: #1abc9c;
}

.search-box.dark input:focus,
.search-box.dark select:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 0 2px rgba(26, 188, 156, 0.2);
}

.search-box.dark button.search {
  background-color: #1abc9c;
}

.search-box.dark button.search:hover {
  background-color: #16a085;
}
</style>
