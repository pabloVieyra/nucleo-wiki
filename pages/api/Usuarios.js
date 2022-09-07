// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createUsuarios(req, res);
  } else if (req.method === "GET") {
    return await traerUsuarios(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createUsuarios(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.usuarios.create({
      data: {
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        clave: body.clave,
        rol: body.rol,
        estado: body.estado,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerUsuarios(req, res) {
  try {
    const allUsuarios = await prisma.usuarios.findMany();
    return res.status(200).json(allUsuarios, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
