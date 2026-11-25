import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of a smart fridge for the Fridge Roast bounty.
// The program writes the roast to /output/entry.txt for the judge.
const ROAST =
  "My smart fridge rebooted for a firmware update and forgot the eggs exist, but it still remembers my Wi-Fi password.";

// The gate accepts 1 to 200 characters; refuse to write anything else.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
