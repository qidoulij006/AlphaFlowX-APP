# AlphaFlowX App Release Guide

## Android / Huawei Android

1. create keystore
2. copy `android/keystore.properties.example` to `android/keystore.properties`
3. fill in keystore values
4. run:

```bash
npm run android:release
```

Huawei AppGallery can use the Android release artifact directly.

## iOS

See [IOS_REMOTE_BUILD.md](./IOS_REMOTE_BUILD.md).

## Deep links

Planned links:

- `alphaflowx://share/<token>`
- `https://www.alphaflowx.com/share/<token>`

The native projects are already prepared for deep-link handling.
