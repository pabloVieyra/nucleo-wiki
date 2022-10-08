import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await traerCategoria(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function traerCategoria(req, res) {
  try {
    const { cid } = req.query;
    const Post = await prisma.categorias.findUnique({
      where: { id: Number(cid) },
    });
    return res.status(200).json(Post, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
