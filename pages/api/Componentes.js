// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createComponentes(req, res);
  } else if (req.method === "GET") {
    return await traerComponentes(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createComponentes(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.componentes.create({
      data: {
        tipo: body.tipo,
        valor: body.valor,
        orden: body.orden,
        estado: body.estado,
        post_id: body.post_id,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerComponentes(req, res) {
  try {
    const allComponentes = await prisma.componentes.findMany();
    return res.status(200).json(allComponentes, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
