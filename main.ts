// Famous Last Words: The Funniest Epitaph
// Writes a single-line tombstone epitaph to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it).
// Node 22 stdlib only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Here lies Tom. He clicked 'Remind me later' one too many times.";

function validateEntry(entry) {
  const length = [...entry].length;
  if (length < 1 || length > 150) {
    throw new Error(`entry must be 1-150 characters, got ${length}`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

function resolveOutputPath() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  return join(outputDir, "entry.txt");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
validateEntry(ENTRY);
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolveOutputPath(), ENTRY, "utf8");
