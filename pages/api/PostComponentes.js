// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createPostComponente(req, res);
  } else if (req.method === "GET") {
    return await traerPostComponente(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function createPostComponente(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.postComponentes.create({
      data: {
        post_id: body.post_id,
        categoria_id: body.categoria_id,
        estado: body.estado,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

async function traerPostComponente(req, res) {
  try {
    const allPostComponente = await prisma.postComponentes.findMany();
    return res.status(200).json(allPostComponente, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
