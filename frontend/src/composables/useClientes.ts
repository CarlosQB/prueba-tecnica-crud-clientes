import { onMounted, ref } from "vue";

import type {
  Cliente,
  ClienteFormData,
  ClientePayload,
} from "../types/cliente";

import {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from "../services/cliente.service";

export const useClientes = () => {
  const clientes = ref<Cliente[]>([]);
  const clienteEditar = ref<Cliente | null>(null);
  const clienteAEliminar = ref<Cliente | null>(null);

  const cargando = ref(false);

  const mensaje = ref("");
  const tipoMensaje = ref<"success" | "info" | "error">("success");

  const cargarClientes = async () => {
    try {
      cargando.value = true;
      clientes.value = await obtenerClientes();
    } catch (error) {
      console.error(error);

      mensaje.value = "No se pudieron cargar los clientes.";
      tipoMensaje.value = "error";
    } finally {
      cargando.value = false;
    }
  };

  const guardarCliente = async (
    datos: ClienteFormData
  ): Promise<boolean> => {
    try {
      mensaje.value = "";

      const datosBackend: ClientePayload = {
        nombre_completo: `${datos.nombre} ${datos.apellidos}`.trim(),
        email: datos.email,
        telefono: datos.telefono,
        empresa: datos.empresa,
      };

      if (clienteEditar.value) {
        await actualizarCliente(
          clienteEditar.value.id,
          datosBackend
        );

        mensaje.value = "Cliente actualizado correctamente.";
        tipoMensaje.value = "info";
      } else {
        await crearCliente(datosBackend);

        mensaje.value = "Cliente creado correctamente.";
        tipoMensaje.value = "success";
      }

      clienteEditar.value = null;

      await cargarClientes();

      return true;
    } catch (error: any) {
      console.error(error);

      mensaje.value =
        error.response?.data?.mensaje ||
        "Ocurrió un error al guardar el cliente.";

      tipoMensaje.value = "error";

      return false;
    }
  };

  const seleccionarCliente = (cliente: Cliente) => {
    clienteEditar.value = cliente;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cancelarEdicion = () => {
    clienteEditar.value = null;
  };

  const solicitarEliminar = (id: number) => {
    const cliente = clientes.value.find(
      (cliente) => cliente.id === id
    );

    if (cliente) {
      clienteAEliminar.value = cliente;
    }
  };

  const confirmarEliminar = async () => {
    if (!clienteAEliminar.value) {
      return;
    }

    try {
      mensaje.value = "";

      await eliminarCliente(clienteAEliminar.value.id);

      if (
        clienteEditar.value?.id ===
        clienteAEliminar.value.id
      ) {
        clienteEditar.value = null;
      }

      mensaje.value = "Cliente eliminado correctamente.";
      tipoMensaje.value = "error";

      clienteAEliminar.value = null;

      await cargarClientes();
    } catch (error: any) {
      console.error(error);

      mensaje.value =
        error.response?.data?.mensaje ||
        "Ocurrió un error al eliminar el cliente.";

      tipoMensaje.value = "error";
    }
  };

  const cancelarEliminar = () => {
    clienteAEliminar.value = null;
  };

  onMounted(() => {
    cargarClientes();
  });

  return {
    clientes,
    clienteEditar,
    clienteAEliminar,
    cargando,
    mensaje,
    tipoMensaje,

    cargarClientes,
    guardarCliente,
    seleccionarCliente,
    cancelarEdicion,
    solicitarEliminar,
    confirmarEliminar,
    cancelarEliminar,
  };
};