import { createRequire } from "module";

export default function d() {
  const localRequire = createRequire(import.meta.url);
  const info = localRequire("../package.json");

  // and again
  console.log("from d with version <" + info.version + ">");
}
