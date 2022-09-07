// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createCategorias(req, res);
  } else if (req.method === "GET") {
    return await traerCategorias(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createCategorias(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.categorias.create({
      data: {
        nombre: body.nombre,
        sistema: body.sistema,
        estado: body.estado,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerCategorias(req, res) {
  try {
    const allCategorias = await prisma.categorias.findMany();
    return res.status(200).json(allCategorias, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
