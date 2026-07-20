import axios from "axios";

import type {
  Cliente,
  ClientePayload,
} from "../types/cliente";

const API_URL = `${import.meta.env.VITE_API_URL}/clientes`;

export const obtenerClientes = async (): Promise<Cliente[]> => {
  const respuesta = await axios.get<Cliente[]>(API_URL);

  return respuesta.data;
};

export const crearCliente = async (
  cliente: ClientePayload
): Promise<Cliente> => {
  const respuesta = await axios.post<Cliente>(
    API_URL,
    cliente
  );

  return respuesta.data;
};

export const actualizarCliente = async (
  id: number,
  cliente: ClientePayload
): Promise<Cliente> => {
  const respuesta = await axios.put<Cliente>(
    `${API_URL}/${id}`,
    cliente
  );

  return respuesta.data;
};

export const eliminarCliente = async (
  id: number
): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};