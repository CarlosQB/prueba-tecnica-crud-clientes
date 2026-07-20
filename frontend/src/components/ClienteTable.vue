<script setup lang="ts">
import { computed, ref } from "vue";
import {
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

import type { Cliente } from "../types/cliente";
import "../assets/styles/cliente-table.css";

const props = defineProps<{
  clientes: Cliente[];
}>();

const emit = defineEmits<{
  editar: [cliente: Cliente];
  eliminar: [id: number];
}>();

const busqueda = ref("");

const clientesFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase().trim();

  if (!texto) {
    return props.clientes;
  }

  return props.clientes.filter((cliente) => {
    return (
      cliente.nombre_completo.toLowerCase().includes(texto) ||
      cliente.email.toLowerCase().includes(texto) ||
      cliente.empresa.toLowerCase().includes(texto)
    );
  });
});

const editarCliente = (cliente: Cliente) => {
  emit("editar", cliente);
};

const eliminarCliente = (id: number) => {
  emit("eliminar", id);
};
</script>

<template>
  <section class="table-card">
    <div class="table-header">
      <div class="table-title">
        <div class="table-title-icon">
          <UserGroupIcon />
        </div>

        <div>
          <span class="eyebrow">Directorio</span>
          <h2>Clientes registrados</h2>
        </div>
      </div>

      <div class="search-box">
        <MagnifyingGlassIcon class="search-icon" />

        <input
          v-model="busqueda"
          type="text"
          placeholder="Buscar por nombre, email o empresa"
        />
      </div>
    </div>

    <div v-if="clientesFiltrados.length > 0" class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Empresa</th>
            <th class="actions-column">Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="cliente in clientesFiltrados"
            :key="cliente.id"
          >
                 <td class="client-id">
                     {{ cliente.id }}
               </td>
            <td>
              <div class="client-name">
                <div class="client-avatar">
                  {{ cliente.nombre_completo.charAt(0).toUpperCase() }}
                </div>

                <span>{{ cliente.nombre_completo }}</span>
              </div>
            </td>

            <td>{{ cliente.email }}</td>

            <td>
              {{ cliente.telefono || "No registrado" }}
            </td>

            <td>
              <span class="company-badge">
                {{ cliente.empresa }}
              </span>
            </td>

            <td>
              <div class="table-actions">
                <button
                  class="icon-button edit-button"
                  title="Editar cliente"
                  @click="editarCliente(cliente)"
                >
                  <PencilSquareIcon />
                </button>

                <button
                  class="icon-button delete-button"
                  title="Eliminar cliente"
                  @click="eliminarCliente(cliente.id)"
                >
                  <TrashIcon />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="empty-state">
      <UserGroupIcon />

      <h3>No hay clientes para mostrar</h3>

      <p>
        {{
          busqueda
            ? "No encontramos resultados para tu búsqueda."
            : "Agrega tu primer cliente para comenzar."
        }}
      </p>
    </div>
  </section>
</template>