<script setup lang="ts">
defineProps<{
  mensaje: string;
  tipo: "success" | "info" | "error";
}>();
</script>

<template>
  <div
    class="app-message"
    :class="`app-message--${tipo}`"
  >
    {{ mensaje }}
  </div>
</template>