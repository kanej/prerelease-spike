import { createRequire } from "module";
import d from "@ignored/prerelease-spike-d";

export default function c() {
  const localRequire = createRequire(import.meta.url);
  const info = localRequire("../package.json");

  d();
  console.log("from c with version " + info.version);
}
