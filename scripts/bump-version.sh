#!/bin/bash

FILE="public/release.txt"

# Falls Datei nicht existiert → init
if [ ! -f "$FILE" ]; then
  echo "MP-Website v1.0.0" > $FILE
  echo "$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> $FILE
  exit 0
fi

# Aktuelle Version parsen
current=$(head -n 1 $FILE | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')
IFS='.' read -r major minor patch <<< "$current"
new_patch=$((patch + 1))
new_version="v$major.$minor.$new_patch"
timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

# Neue Version + Zeit schreiben
echo "MP-Website $new_version" > $FILE
echo "$timestamp" >> $FILE

echo "✅ Neue Version: MP-Website $new_version"
echo "🕒 Zeitpunkt: $timestamp"
