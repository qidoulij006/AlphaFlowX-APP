# Quick Start

This repository itself is the AlphaFlowX app project root.

## 1. Install dependencies

```bash
npm install
```

## 2. Start local web shell

```bash
npm run dev
```

## 3. Build web assets

```bash
npm run build
```

## 4. Generate native projects

```bash
npm run cap:add:android
npm run cap:add:ios
npm run cap:sync
```

## 5. Open native projects

```bash
npm run cap:open:android
npm run cap:open:ios
```

## 6. Build Android release

```bash
cp android/keystore.properties.example android/keystore.properties
# fill in keystore values
npm run android:release
```
