import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await traerPostPorCategoria(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function traerPostPorCategoria(req, res) {
  try {
    const { cid } = req.query;
    const Posts = await prisma.post.findMany({
      where: { categoria_id: Number(cid) },
    });
    return res.status(200).json(Posts, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
