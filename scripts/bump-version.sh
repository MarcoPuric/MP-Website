#!/bin/bash

FILE="public/release.txt"
BUMP_TYPE=${1:-patch}  # Standard: patch

# Falls release.txt nicht existiert → init
# In bump-version.sh
if [ ! -f "$FILE" ]; then
  echo "MP-Website v1.0.0" > $FILE
  echo "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> $FILE
  exit 0
fi

# Aktuelle Version lesen
current=$(head -n 1 "$FILE" | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
IFS='.' read -r major minor patch <<< "$current"

# Version anpassen je nach Typ
case "$BUMP_TYPE" in
  major)
    major=$((major + 1))
    minor=0
    patch=0
    ;;
  minor)
    minor=$((minor + 1))
    patch=0
    ;;
  patch)
    patch=$((patch + 1))
    ;;
  *)
    echo "❌ Ungültiger Typ: '$BUMP_TYPE' – nutze 'major', 'minor' oder 'patch'"
    exit 1
    ;;
esac

# Neue Version & Zeit
new_version="v$major.$minor.$patch"
timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# In Datei schreiben
echo "MP-Website $new_version" > "$FILE"
echo "$timestamp" >> "$FILE"

echo "✅ Neue Version: MP-Website $new_version"
echo "🕒 Zeitpunkt: $timestamp"
