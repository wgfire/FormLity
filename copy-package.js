import * as fs from "node:fs";

fs.copyFileSync("package.json", "dist/package.json");
