import { mkdirSync, writeFileSync } from "node:fs";

// Monday Morning Punchlines — one joke about Monday mornings.
// Premise: specific office scene (calling in sick on a Monday morning).
// Punchline: a quote that lands in the very last words — the boss lumps
// the narrator in with the office printer and orders them both in.
const JOKE =
  "Monday morning I called in sick. My boss said, 'So did the printer — you're both coming in.'";

// Gate: the entry must be 1-200 characters. Fail loudly instead of
// writing an invalid entry (92 characters, verified by hand and by test).
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry length ${JOKE.length} outside 1-200`);
}

mkdirSync("/output", { recursive: true });
// Write exactly the joke bytes — no trailing newline, no BOM — so the
// gate sees precisely the 92 characters above.
writeFileSync("/output/entry.txt", Buffer.from(JOKE, "utf8"));
