#!/usr/bin/env bash
# Assemble the deployable site.
#
# GitHub Pages served this repository's root directly, so everything in it was
# public -- including the print-resolution logo tree. That is preserved on
# purpose: those paths may be linked from elsewhere, and breaking them to tidy
# the bundle would be a silent regression.
#
# AGENTS.md is the exception. Pages published it too, but contributor notes are
# not site content and there is no reason for them to be fetchable; that is a
# deliberate change from the Pages behaviour rather than an oversight.

set -euo pipefail

rm -rf dist
mkdir -p dist

# Copy the repository as the document root, minus the things that are not site.
tar -cf - \
  --exclude='./.git' \
  --exclude='./.github' \
  --exclude='./dist' \
  --exclude='./wrangler.toml' \
  --exclude='./build.sh' \
  --exclude='./_headers' \
  --exclude='./CNAME' \
  --exclude='./AGENTS.md' \
  --exclude='./node_modules' \
  . | (cd dist && tar -xf -)

install -m 0644 _headers dist/_headers

# Identifies the deployed commit so the fallback workflow can tell whether
# Cloudflare already published this tree. Read from the checkout rather than
# the environment: Workers Builds sets WORKERS_CI_COMMIT_SHA to the branch
# name for a manually started build, which would never match github.sha.
sha=$(git rev-parse HEAD 2>/dev/null || echo "${WORKERS_CI_COMMIT_SHA:-${GITHUB_SHA:-local}}")
printf '%s\n' "$sha" > dist/.build-id

echo "staged $(find dist -type f | wc -l | tr -d ' ') files into dist/"
