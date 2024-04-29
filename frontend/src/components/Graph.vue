<template>
  <svg width="800px" height="400px">
    <g transform="translate(5, 50)">
      <g class="links"></g>
      <g class="nodes"></g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { hierarchy } from "d3-hierarchy";
import { fetchData } from "@/utils/api";
import { treeLayout, updateGraph } from "@/utils/d3Helper";

const graphData = ref(null);

watch(graphData, () => {
  updateGraph(graphData.value);
});

onMounted(() => {
  fetchData().then((data: any) => {
    graphData.value = hierarchy(data[0]);
    treeLayout(graphData.value);
  });
});
</script>
