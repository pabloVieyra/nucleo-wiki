// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createFavoritos(req, res);
  } else if (req.method === "GET") {
    return await traerFavoritos(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createFavoritos(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.favoritos.create({
      data: {
        post_id: body.post_id,
        usuario_id: body.usuario_id,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerFavoritos(req, res) {
  try {
    const allFavoritos = await prisma.favoritos.findMany();
    return res.status(200).json(allFavoritos, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
