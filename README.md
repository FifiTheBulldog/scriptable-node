# scriptable-node

A Node.JS module to bring the APIs from Simon B. Støvring's iOS automation app, [Scriptable](https://scriptable.app), to other platforms.

This project is in the early stages of development, and a lot of work needs to be done before it can be distributed on npm.

## Platforms to target

This is aimed at:

- Windows
- Linux distributions
- Versions of macOS below Big Sur. (For Big Sur, use the Catalyst-based [Mac beta](https://scriptable.app/mac-beta/) of Scriptable, made by Simon, or the iOS version, if your Mac has an M1 chip.)
- Possibly Android, through Termux

## Goals

This is a Node.JS module. After the module is completed, or at least at a good point in development, this may be used to make a full-fledged app, most likely using Electron.

## Installation

Since this isn't on npm yet, you can only install this by downloading the repo directly, either with Git or from GitHub. Open up a terminal and navigate to the project folder (`scriptable-node`), then run `npm install` to install the dependencies.

So far, these are the dependencies for this project:

- `brightness`
- `canvas`
- `computer-name`
- `hex-rgb`
- `node-fetch`
- `open`
- `sax`
- `say`
- `systeminformation`
- `uuid`

These modules have a lot of their own dependencies that they will also install.

## Usage

Import this module at the top of the script you want to test, retrieving the APIs you need like this:

```
const { Alert, Notification } = require('scriptable-node');
```

Each Scriptable class or function's name in the module is identical to its name in the Scriptable app and documentation.

## A note on deprecated APIs

Deprecated APIs in Scriptable will most likely not be supported by this module. That may change if they're easy enough.

## Design

This module is designed to mimic the behavior of the real Scriptable app as closely as possible. Obviously, some things will work slightly differently, since this is running in a Node.JS environment in a terminal and not bridging to Swift APIs via JavaScriptCore. Also, when interacting with the file system, all file paths should use the POSIX format, even on Windows.

## System integration

This is probably the toughest part. Integration will vary from system to system. 

- macOS: use AppleScript and/or other macOS-specific terminal commands
- Windows: PowerShell seems to be a good option.
- Linux: there are many different options for interacting with the OS, so decisions about which ones to use will be made later.
- Android: whatever system functions Termux offers?

If possible, the system default apps for mail, messaging, calendar, etc. should be used.

## Contributing

This project can use all the help it can get. Pull requests to implement features are welcomed.

Right now, there are a couple of things that urgently need to be finished:

- `Data` - the foundation of a lot. This will be a wrapper for `Buffer`, at least for now. When this becomes an Electron app, I will either have it use `ArrayBuffer` everywhere or use `Buffer` or `Blob` depending on the environment.
- [All other items on this list have been completed]

After that, the process of developing system-specific bridges begins.

## API checklist

APIs with a check mark next to their names are "finished." This does not mean that they are ready to use, as they may rely on unfinished APIs. Rather, it just means that no more code should be needed to get them working, and any further work on them is just debugging (or, at some point in the future, possibly adding new features).

- [ ] Alert
- [ ] args
- [ ] Calendar
- [ ] CalendarEvent
- [ ] CallbackURL
- [x] Color
- [ ] config
- [x] console
- [ ] Contact
- [ ] ContactsContainer
- [ ] ContactsGroup
- [ ] Data
- [x] DateFormatter
- [ ] DatePicker
- [ ] Device
- [ ] Dictation
- [ ] DocumentPicker
- [ ] DrawContext
- [ ] FileManager
- [ ] Font
- [x] Image
- [x] importModule
- [ ] Keychain
- [x] LinearGradient
- [ ] ListWidget
- [ ] Location
- [ ] Mail
- [ ] Message
- [x] module
- [ ] Notification
- [ ] Pasteboard
- [ ] Path
- [ ] Photos
- [x] Point
- [ ] QuickLook
- [x] Rect
- [ ] RecurrenceRule
- [ ] RelativeDateTimeFormatter
- [ ] Reminder
- [ ] Request
- [x] Safari
- [x] Script
- [ ] SFSymbol
- [ ] ShareSheet
- [x] Size
- [x] Speech
- [x] Timer
- [ ] UITable
- [x] UITableCell
- [x] UITableRow
- [x] URLScheme
- [x] UUID
- [ ] WebView
- [x] WidgetDate
- [x] WidgetImage
- [x] WidgetSpacer
- [x] WidgetStack
- [x] WidgetText
- [x] XMLParser