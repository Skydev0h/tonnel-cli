import { defineConfig } from "tsup";
 
export default defineConfig({
  entry: ["src/cli/cli.ts"],
  publicDir: false,
  clean: true,
  minify: true,
  format: ["cjs"], // 👈 Node
});