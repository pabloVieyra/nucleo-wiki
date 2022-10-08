import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await traerPost(req, res);
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

async function traerPost(req, res) {
  try {
    const { pid } = req.query;
    const Post = await prisma.post.findUnique({
      where: { id: Number(pid) },
    });
    return res.status(200).json(Post, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}
