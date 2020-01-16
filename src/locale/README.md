# Internationalization

### Intro

The default language of Buri is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages

Buri supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to different languages.

```js
import { Locale } from 'buri';
import enUS from 'buri/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'buri';

const messages = {
  'en-US': {
    buriPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| Traditional Chinese (HK) | zh-HK |
| Traditional Chinese (TW) | zh-TW |
| English | en-US |
| Turkish | tr-TR |
| Spanish (Spain) | es-ES |

> View all language configs [Here](https://github.com/flykizz/buri/tree/dev/src/locale/lang).
