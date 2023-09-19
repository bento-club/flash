import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { readFileSync } from "node:fs";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      ...getPathAliases("./tsconfig.json"),
    },
  },
});

/**
 * Load tsconfig path definitions from config file specified
 *
 * @param tsconfigPath Path of tsconfig JSON file to load paths from
 * @returns Alias map
 */
function getPathAliases(tsconfigPath: string) {
  const contents = readFileSync(tsconfigPath)
    .toString("utf-8")
    .split("\n")
    .map((line) => {
      return line.trim();
    })
    .filter((line) => {
      const ignorePatterns = [/^\/\*.*/, /^\/\/.*/];
      for (const pattern of ignorePatterns) {
        if (line.match(pattern)?.length) {
          return false;
        }
      }

      return true;
    })
    .join("\n");

  console.log(contents);

  const config = JSON.parse(contents);

  const paths = config.compilerOptions.paths;

  const aliases: Record<string, string> = {};

  if (typeof paths !== "object") {
    return aliases;
  }

  Object.keys(paths).forEach((item) => {
    const replacement = paths[item][0] as string;

    aliases[item.endsWith("/*") ? item.slice(0, item.length - 2) : item] =
      fileURLToPath(
        new URL(
          replacement.endsWith("/*")
            ? replacement.slice(0, replacement.length - 2)
            : replacement,
          import.meta.url,
        ),
      );
  });

  return aliases;
}
