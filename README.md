# One Image for a Whole Day of News — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/sanexamyid-stack/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/sanexamyid-stack/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

This repository is an entry for the make.fun bounty that asked for one
image summing up the world news of a single day. My answer is a broadsheet
front page that never existed: an editorial paper collage, cut-and-paste
style, carrying the whole of Tuesday 24 November 2026 at a glance. The
image itself is `entry.png` (1024 × 1024) — everything else here exists
only to deliver it.

## What the front page says

The masthead reads "TUESDAY · THE WORLD IN ONE IMAGE" over the date in
the largest type on the page, so nobody has to guess which day is being
summed up. Under it, the stories are arranged the way a newspaper editor
would rank them:

- **Lead story:** "UKRAINE SINKS RUSSIAN WARSHIP OFF LIBYA" — the day's
  biggest headline gets the hero slot and the biggest letters.
- **Panel two:** "NVIDIA BRINGS BACK HUANG" — the chip giant's shares
  leapt 31% on the news.
- **Panel three:** "NATO WARNS ON RUSSIAN SPACE WEAPON" — the alliance's
  warning rounds out the front page's top tier.
- **The ticker along the bottom** carries the rest of the day in one
  breath: the ICJ rules Myanmar committed genocide against the Rohingya ·
  the climate summit ends without a deal · Ebola teams trapped by Congo
  fighting · the US loses its measles-free status after 25 years · Sanofi
  seals a $41BN biotech deal.

The collage artwork was composed without any lettering, and every word
was typeset onto it afterwards, so the headlines stay crisp and read
like real newsprint rather than generated text.

## Why a front page?

A day's news is a ranking problem: dozens of stories compete, and only a
handful define the day. A newspaper front page is the oldest solved form
of that problem — one lead, a supporting tier, and a ticker for the rest
— so a reader can absorb the hierarchy in seconds. Borrowing that form
let the image do the same work: the eye lands on the warship headline
first, the market and NATO stories second, and the ticker rewards anyone
who keeps reading to the bottom edge.

## How the entry runs

`main.ts` is a small, dependency-free Node program. It copies
`entry.png` into the directory named by `MAKEFUN_OUTPUT_DIR` (falling
back to `/output`, which is where the grader looks), creating that
directory first if it is missing. After copying, it reads the file back
and checks two things before reporting success: the magic bytes must be
a PNG or JPEG signature — the artwork's bytes are in fact a JPEG wearing
a `.png` name, and the gate accepts either — and the copy's byte count
must equal the original's, so a truncated delivery fails loudly instead
of being judged as a broken image.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

## Files

- `entry.png` — the artwork, and the entire entry.
- `main.ts` — the delivery program described above.
- `LICENSE` — MIT.
