"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = fetch;
const promises_1 = require("fs/promises");
async function fetch(filePath, _optionalArgs) {
    try {
        const fileBuffer = await (0, promises_1.readFile)(filePath);
        return new Response(fileBuffer, {
            status: 200,
            statusText: "OK",
            headers: {
                "Content-Type": "application/wasm",
            },
        });
    }
    catch (err) {
        return new Response(null, {
            status: 404,
            statusText: "File not found",
        });
    }
}
