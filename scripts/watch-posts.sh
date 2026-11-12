#!/bin/bash

# Update timestamp of [slug].tsx
# whenever .mdx files are updated.
#
# This forces Next.js to do hot
# reload. I know, it's a trick.

watch_path="pages/posts/[slug].tsx"

inotifywait -m -r -q -e close_write, moved_to, create, delete --include '\.mdx$' content |
  while read -r _; do touch -c "$watch_path"; done

