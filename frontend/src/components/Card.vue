<template>
  <div v-if="clickedData" class="card">
    <h2>{{ clickedData?.name }}</h2>
    <p>{{ clickedData?.description }}</p>
    <div class="cancel-corner" @click="deselectNode">
      <div class="cancel">✕</div>
    </div>
  </div>
  <div v-else="clickedData" class="card">
    <h3>No data found.Select the node</h3>
  </div>
</template>

<script setup lang="ts">
import { clickedData } from "@/utils/d3Helper";

// Function to deselect node
const deselectNode = () => {
  localStorage.removeItem("clickedData"); // Remove clicked data from local storage
  clickedData.value = null;
};
</script>

<style>
.card {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card h2,
h3 {
  font-weight: 400;
  line-height: 20px;
  color: rgb(43, 91, 43);
  padding-bottom: 15px;
}
.card p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(43, 91, 43);
}

.cancel-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 42px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: rgb(43, 91, 43);
  border-radius: 0 4px 0 32px;
}

.cancel {
  cursor: pointer;
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}
</style>
