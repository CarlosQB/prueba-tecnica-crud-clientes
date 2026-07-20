import { Request, Response } from "express";
import { clienteService } from "../services/cliente.service.js";

export const obtenerClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await clienteService.obtenerTodos();

    return res.json(clientes);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener los clientes",
    });
  }
};

export const obtenerCliente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const cliente = await clienteService.obtenerPorId(id);

    if (!cliente) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }

    return res.json(cliente);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al obtener el cliente",
    });
  }
};

export const crearCliente = async (req: Request, res: Response) => {
  try {
    const { nombre_completo, email, telefono, empresa } = req.body;

    if (!nombre_completo || !email || !empresa) {
      return res.status(400).json({
        mensaje: "Nombre completo, email y empresa son obligatorios",
      });
    }

    const nuevoCliente = await clienteService.crear({
      nombre_completo,
      email,
      telefono,
      empresa,
    });

    return res.status(201).json(nuevoCliente);
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        mensaje: "Ya existe un cliente con ese correo electrónico",
      });
    }

    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        mensaje: "El formato del correo electrónico no es válido",
      });
    }

    return res.status(500).json({
      mensaje: "Error al crear el cliente",
    });
  }
};

export const actualizarCliente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const cliente = await clienteService.actualizar(id, req.body);

    if (!cliente) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }

    return res.json(cliente);
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({
        mensaje: "Ya existe un cliente con ese correo electrónico",
      });
    }

    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        mensaje: "Los datos proporcionados no son válidos",
      });
    }

    return res.status(500).json({
      mensaje: "Error al actualizar el cliente",
    });
  }
};

export const eliminarCliente = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const eliminado = await clienteService.eliminar(id);

    if (!eliminado) {
      return res.status(404).json({
        mensaje: "Cliente no encontrado",
      });
    }

    return res.json({
      mensaje: "Cliente eliminado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al eliminar el cliente",
    });
  }
};