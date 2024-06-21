import { createRequire } from "module";
import b from "@ignored/prerelease-spike-b";
import c from "@ignored/prerelease-spike-c";

export default function a() {
  const localRequire = createRequire(import.meta.url);
  const info = localRequire("../package.json");

  b();
  c();
  console.log("from a with version <" + info.version + ">");
}
