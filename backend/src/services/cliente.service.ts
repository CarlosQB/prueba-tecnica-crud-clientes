import { Cliente } from "../models/cliente.model.js";

class ClienteService {
  async obtenerTodos() {
    return await Cliente.findAll();
  }

  async obtenerPorId(id: number) {
    return await Cliente.findByPk(id);
  }

  async crear(datos: {
    nombre_completo: string;
    email: string;
    telefono?: string | null;
    empresa: string;
  }) {
    return await Cliente.create(datos);
  }

  async actualizar(
    id: number,
    datos: {
      nombre_completo?: string;
      email?: string;
      telefono?: string | null;
      empresa?: string;
    }
  ) {
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return null;
    }

    await cliente.update(datos);

    return cliente;
  }

  async eliminar(id: number) {
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
      return false;
    }

    await cliente.destroy();

    return true;
  }
}

export const clienteService = new ClienteService();