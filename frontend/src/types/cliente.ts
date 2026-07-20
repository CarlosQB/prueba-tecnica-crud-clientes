export interface Cliente {
  id: number;
  nombre_completo: string;
  email: string;
  telefono?: string | null;
  empresa: string;
  createdAt?: string;
  updatedAt?: string;
}
export type ClienteFormData = {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  empresa: string;
};
export type ClientePayload = {
  nombre_completo: string;
  email: string;
  telefono: string;
  empresa: string;
};