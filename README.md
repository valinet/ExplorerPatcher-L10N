# ExplorerPatcher-L10N

This repository contains the localization files for [ExplorerPatcher](https://github.com/valinet/ExplorerPatcher). The
base English texts are available in the main repository under:

* Properties Window, Notifications, and Crash
  Dialog: [ep_gui/resources/lang](https://github.com/valinet/ExplorerPatcher/tree/master/ep_gui/resources/lang)
* Setup: [ep_setup/resources/lang](https://github.com/valinet/ExplorerPatcher/tree/master/ep_setup/resources/lang)

## Contributing

If you want to have ExplorerPatcher in your language and willing to maintain in the long run, or if you spot a mistake,
an inaccuracy, or want to improve the translations of a language that you are fluent in, pull requests are very much
appreciated.

As we continually update the base English texts, we will add the new keys with English texts to the existing
localization files regardless of the language, for the contributors to translate when possible. This is to keep
ExplorerPatcher working as expected.

It is preferred for translation contributors to be able
to [compile ExplorerPatcher](https://github.com/valinet/ExplorerPatcher/wiki/Compiling) themselves in order to see the
translations in action. If you are not able to do so, please mention it in your pull request and we will test and fix
the translation files for you.

Things to consider:

* In `.rc` files, please make sure that the double quotes `"` are represented as double double quotes `""`.
* Please also make sure that the `.rc` files are in UTF-8 encoding with CRLF (`\r\n`) line endings.

## Acknowledgements

We would like to thank the following people for their contributions in translating ExplorerPatcher:

| Language              | Contributor(s)                                  |
| --------------------- | ----------------------------------------------- |
| Chinese (Simplified)  | @zetaloop, @FrzMtrsprt, @Yukari316              |
| Chinese (Traditional) | @snowlinouo                                     |
| Japanese              | @creeper-0910, @reindex-ot, @Rukoto, @Amrsatrio |
