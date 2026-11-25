# Famous Last Words: The Funniest Epitaph

[![make.fun](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![rank](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/teguharifiant/makefun-epitaph/rank.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)
[![reward](https://make.fun/badge/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406/teguharifiant/makefun-epitaph/reward.svg)](https://make.fun/c/u-riidzhsn-famous-last-words-the-funniest-epitaph-ff177406)

## Entry

> Here lies Tom. He clicked 'Remind me later' one too many times.

## How it works

`main.ts` (Node 22 stdlib only) writes the epitaph — a single line of
63 characters, no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(or `/output/entry.txt` when the variable is unset). Before writing it
validates the text: 1–150 characters (counted by code point), not only
whitespace, and exactly one line. The output is deterministic: every run
writes the same bytes.
