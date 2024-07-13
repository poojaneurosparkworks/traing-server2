import fastifyMultipart from "@fastify/multipart";
import fastify from "fastify";
import { createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

const app = fastify();
app.register(fastifyMultipart);

app.post("/upload", async (req, reply) => {
  try {
    const data = await req.file();
    if (!data) return reply.status(400).send({ error: "No file uploaded" });

    const { file } = data;
    const filename = `uploads/${Date.now()}`;
    const filePath = path.join(import.meta.dirname, filename);
    await pump(file, createWriteStream(filePath));

    // await fromPath(filePath);

    return reply.send({});
  } catch (error) {
    console.log(error);
  }
});

try {
  await app.listen({ port: 3000 });
  console.log("Server is running on port 3000");
} catch (err) {
  process.exit(1);
}
