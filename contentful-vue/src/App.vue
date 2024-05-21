<script setup>
import { ref, onMounted } from "vue";
import { fetchEntries } from "./contentfulService.js";

const items = ref([]);
const loading = ref(true);

const getContent = async () => {
  try {
    items.value = await fetchEntries("book");
  } catch (error) {
    console.error("Error fetching content:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getContent();
});
</script>
<template>
  <div>
    <h1>Contentful Data</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <h2>Published books:</h2>
        <li v-for="item in items" :key="item.sys.id">
          {{ item.fields.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
