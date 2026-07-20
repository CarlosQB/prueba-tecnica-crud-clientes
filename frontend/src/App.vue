<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppMessage from "./components/AppMessage.vue";
import ClienteForm from "./components/ClienteForm.vue";
import ClienteTable from "./components/ClienteTable.vue";
import ConfirmModal from "./components/ConfirmModal.vue";

import { useClientes } from "./composables/useClientes";
import type { ClienteFormData } from "./types/cliente";

const {
  clientes,
  clienteEditar,
  clienteAEliminar,
  cargando,
  mensaje,
  tipoMensaje,

  guardarCliente,
  seleccionarCliente,
  cancelarEdicion,
  solicitarEliminar,
  confirmarEliminar,
  cancelarEliminar,
} = useClientes();

const manejarGuardar = async (
  datos: ClienteFormData,
  onSuccess: () => void
) => {
  const guardado = await guardarCliente(datos);

  if (guardado) {
    onSuccess();
  }
};
</script>

<template>
  <div class="app-page">
    <AppHeader />

    <main class="app-content">
      <AppMessage
        v-if="mensaje"
        :mensaje="mensaje"
        :tipo="tipoMensaje"
      />

      <ClienteForm
        :cliente-editar="clienteEditar"
        @guardar="manejarGuardar"
        @cancelar="cancelarEdicion"
      />

      <div
        v-if="cargando"
        class="loading-state"
      >
        Cargando clientes...
      </div>

      <ClienteTable
        v-else
        :clientes="clientes"
        @editar="seleccionarCliente"
        @eliminar="solicitarEliminar"
      />

      <ConfirmModal
        v-if="clienteAEliminar"
        :cliente="clienteAEliminar"
        @confirmar="confirmarEliminar"
        @cancelar="cancelarEliminar"
      />
    </main>
  </div>
</template>