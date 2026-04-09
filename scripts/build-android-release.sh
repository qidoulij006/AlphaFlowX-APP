#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"
npm run build
npm run cap:sync

if [ ! -f "$ROOT_DIR/android/keystore.properties" ]; then
  echo "Missing android/keystore.properties"
  echo "Copy android/keystore.properties.example to android/keystore.properties and fill in your keystore values."
  exit 1
fi

cd "$ROOT_DIR/android"
./gradlew assembleRelease

echo
echo "Android release build completed."
echo "APK/AAB outputs are under:"
echo "  $ROOT_DIR/android/app/build/outputs/"
