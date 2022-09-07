// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createPost(req, res);
  } else if (req.method === "GET") {
    return await traerPost(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createPost(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.post.create({
      data: {
        nombre: body.nombre,
        categoria_id: body.categoria_id,
        sistema: body.sistema,
        visitas: body.visitas,
        valoraciones: body.valoraciones,
        estado: body.estado,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerPost(req, res) {
  try {
    const allPost = await prisma.post.findMany();
    return res.status(200).json(allPost, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
