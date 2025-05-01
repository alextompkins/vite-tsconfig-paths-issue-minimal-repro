import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Switch the import below from relative to alias-ed and you'll see the issue
 * Nothing will be able to resolve it when loading the Vite config
 * Whereas every other usage (script executed via `vite-node`, inside a unit test, inside source code) can
 */

// import { helper } from "#utils/helper";
import { helper } from "./utils/helper";

helper(import.meta.url);

export default defineConfig({
    plugins: [
        tsconfigPaths()
    ]
});
