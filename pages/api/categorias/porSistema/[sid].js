// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await traerCategoriaPorSistema(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function traerCategoriaPorSistema(req, res) {
  try {
    const { sid } = req.query;
    const allComponentesPost = await prisma.categorias.findMany({
      where: { sistema: Number(sid) },
    });
    return res.status(200).json(allComponentesPost, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
