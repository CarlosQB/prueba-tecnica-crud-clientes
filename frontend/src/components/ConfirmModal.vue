<script setup lang="ts">
import {
  ExclamationTriangleIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import type { Cliente } from "../types/cliente";
import "../assets/styles/modal.css";

defineProps<{
  cliente: Cliente;
}>();

const emit = defineEmits<{
  confirmar: [];
  cancelar: [];
}>();
</script>

<template>
  <div
    class="modal-overlay"
    @click.self="emit('cancelar')"
  >
    <div class="confirm-modal">
      <div class="confirm-icon">
        <ExclamationTriangleIcon />
      </div>

      <h2>Eliminar cliente</h2>

      <p>
        ¿Estás seguro de que deseas eliminar a
        <strong>{{ cliente.nombre_completo }}</strong>?
      </p>

      <p class="confirm-warning">
        Esta acción no se puede deshacer.
      </p>

      <div class="confirm-actions">
        <button
          class="cancel-button"
          @click="emit('cancelar')"
        >
          <XMarkIcon />
          Cancelar
        </button>

        <button
          class="confirm-delete-button"
          @click="emit('confirmar')"
        >
          <TrashIcon />
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>