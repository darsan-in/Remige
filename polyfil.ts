import { readFile } from "fs/promises";

export async function fetch(
  filePath: string,
  _optionalArgs: Record<string, any>
): Promise<Response> {
  try {
    const fileBuffer: Awaited<Buffer> = await readFile(filePath);

    return new Response(fileBuffer, {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/wasm",
      },
    });
  } catch (err) {
    return new Response(null, {
      status: 404,
      statusText: "File not found",
    });
  }
}
