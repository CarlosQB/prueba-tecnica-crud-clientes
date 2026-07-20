<script setup lang="ts">
import { reactive, watch } from "vue";
import {
  UserPlusIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import type { Cliente, ClienteFormData } from "../types/cliente";
import "../assets/styles/cliente-form.css";

const props = defineProps<{
  clienteEditar?: Cliente | null;
}>();

const emit = defineEmits<{
  guardar: [
    datos: ClienteFormData,
    onSuccess: () => void
  ];
  cancelar: [];
}>();

const formulario = reactive<ClienteFormData>({
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  empresa: "",
});

const errores = reactive({
  nombre: "",
  apellidos: "",
  email: "",
  empresa: "",
});

const limpiarFormulario = () => {
  formulario.nombre = "";
  formulario.apellidos = "";
  formulario.email = "";
  formulario.telefono = "";
  formulario.empresa = "";

  errores.nombre = "";
  errores.apellidos = "";
  errores.email = "";
  errores.empresa = "";
};

const separarNombreCompleto = (nombreCompleto: string) => {
  const partes = nombreCompleto.trim().split(/\s+/);

  return {
    nombre: partes.shift() ?? "",
    apellidos: partes.join(" "),
  };
};

watch(
  () => props.clienteEditar,
  (cliente: Cliente | null | undefined) => {
    if (cliente) {
      const { nombre, apellidos } = separarNombreCompleto(
        cliente.nombre_completo
      );

      formulario.nombre = nombre;
      formulario.apellidos = apellidos;
      formulario.email = cliente.email;
      formulario.telefono = cliente.telefono ?? "";
      formulario.empresa = cliente.empresa;
    } else {
      limpiarFormulario();
    }
  },
  { immediate: true }
);

const validarFormulario = () => {
  errores.nombre = "";
  errores.apellidos = "";
  errores.email = "";
  errores.empresa = "";

  let valido = true;

  if (!formulario.nombre.trim()) {
    errores.nombre = "El nombre es obligatorio";
    valido = false;
  }

  if (!formulario.apellidos.trim()) {
    errores.apellidos = "Los apellidos son obligatorios";
    valido = false;
  }

  if (!formulario.email.trim()) {
    errores.email = "El correo electrónico es obligatorio";
    valido = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formulario.email)) {
      errores.email = "Ingresa un correo electrónico válido";
      valido = false;
    }
  }

  if (!formulario.empresa.trim()) {
    errores.empresa = "La empresa es obligatoria";
    valido = false;
  }

  return valido;
};

const enviarFormulario = () => {
  if (!validarFormulario()) {
    return;
  }

  emit(
    "guardar",
    {
      nombre: formulario.nombre.trim(),
      apellidos: formulario.apellidos.trim(),
      email: formulario.email.trim(),
      telefono: formulario.telefono.trim(),
      empresa: formulario.empresa.trim(),
    },
    () => {
      limpiarFormulario();
    }
  );
};

const cancelarEdicion = () => {
  limpiarFormulario();
  emit("cancelar");
};
</script>

<template>
  <section class="form-card">
    <div class="form-header">
      <div class="form-title-icon">
        <PencilSquareIcon v-if="clienteEditar" />
        <UserPlusIcon v-else />
      </div>

      <div>
        <span class="eyebrow">
          {{ clienteEditar ? "Editar registro" : "Nuevo registro" }}
        </span>

        <h2>
          {{ clienteEditar ? "Actualizar cliente" : "Agregar cliente" }}
        </h2>
      </div>
    </div>

    <form class="client-form" @submit.prevent="enviarFormulario">
      <div class="field">
        <label for="nombre">Nombre</label>

        <input
          id="nombre"
          v-model="formulario.nombre"
          type="text"
          placeholder="Ej. Carlos"
        />

        <span
          v-if="errores.nombre"
          class="error"
        >
          {{ errores.nombre }}
        </span>
      </div>

      <div class="field">
        <label for="apellidos">Apellidos</label>

        <input
          id="apellidos"
          v-model="formulario.apellidos"
          type="text"
          placeholder="Ej. Quezada Benavides"
        />

        <span
          v-if="errores.apellidos"
          class="error"
        >
          {{ errores.apellidos }}
        </span>
      </div>

      <div class="field">
        <label for="email">Correo electrónico</label>

        <input
          id="email"
          v-model="formulario.email"
          type="email"
          placeholder="correo@empresa.com"
        />

        <span
          v-if="errores.email"
          class="error"
        >
          {{ errores.email }}
        </span>
      </div>

      <div class="field">
        <label for="telefono">Teléfono</label>

        <input
          id="telefono"
          v-model="formulario.telefono"
          type="text"
          placeholder="33 1234 5678"
        />
      </div>

      <div class="field full-width">
        <label for="empresa">Empresa</label>

        <input
          id="empresa"
          v-model="formulario.empresa"
          type="text"
          placeholder="Nombre de la empresa"
        />

        <span
          v-if="errores.empresa"
          class="error"
        >
          {{ errores.empresa }}
        </span>
      </div>

     <div class="actions">
  <button
    type="submit"
    class="primary-button"
  >
    <PencilSquareIcon
      v-if="clienteEditar"
      class="button-icon"
    />

    <UserPlusIcon
      v-else
      class="button-icon"
    />

    {{ clienteEditar ? "Guardar cambios" : "Crear cliente" }}
  </button>

  <button
    v-if="!clienteEditar"
    type="button"
    class="secondary-button"
    @click="limpiarFormulario"
  >
    <XMarkIcon class="button-icon" />
    Limpiar
  </button>

  <button
    v-if="clienteEditar"
    type="button"
    class="secondary-button"
    @click="cancelarEdicion"
  >
    <XMarkIcon class="button-icon" />
    Cancelar
  </button>
</div>
    </form>
  </section>
</template>