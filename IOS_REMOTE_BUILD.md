# iOS Remote Build

You cannot complete a production iOS build on this Linux server.

A final iOS build requires:

- macOS
- Xcode
- Apple Developer account
- signing certificate
- provisioning profile

## What is already done

The iOS Capacitor project has been designed for remote build workflows.

## Remote build options

### Option 1: Mac remote host

Copy this project to a macOS machine and run:

```bash
npm install
npm run build
npm run cap:add:ios
npm run cap:sync
npm run cap:open:ios
```

Then use Xcode to:

1. set Team
2. set Bundle Identifier
3. add signing
4. archive
5. export IPA

### Option 2: GitHub Actions macOS runner

This is feasible, but still requires Apple signing material:

- `.p12` certificate
- provisioning profile
- App Store Connect credentials

Recommended tooling:

- Fastlane
- GitHub Actions macOS runner

### Option 3: Codemagic / Bitrise

This is the fastest hosted remote build path if you want minimal local Mac work.

## Important limitation

Without Apple signing files, nobody can produce a distributable iOS IPA for App Store/TestFlight, regardless of whether the build host is local or remote.
