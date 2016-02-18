# radium-plugin-linter
```bash
npm install radium-plugin-linter --save
```
Radium plugin that uses uses [inline-style-linter](https://github.com/rofrischmann/inline-style-linter) for runtime style linting.
It is a modular & plugin-based and brings a lot of configuration options.

You **must** pass a configuration object using the `linter` key within your Radium configuration. <br>
Check [Linter Configuration](https://github.com/rofrischmann/inline-style-linter/blob/master/docs/Configuration.md) for detailed information on how to configure the Linter.


## Usage
> NOTE: This usage guide was directly copied from one of [Ian Obermiller](https://github.com/ianobermiller) (Radium maintainer)'s Radium [Plugins](https://github.com/ianobermiller/radium-plugin-validity-pseudos).

`radium-plugin-linter` should be added before style prefixing (at least if you want to use the `noVendorPrefix`-plugin shipped with with linter). Radium plugins are setup by passing a config object to `@Radium`. Since you'll d probably want to use this plugin everywhere you use Radium, you can create your own module with a configured version of Radium:

`ConfiguredRadium.js`

```js
import { Plugins } from 'inline-style-linter'

var Radium = require('radium');
var lintStyles = require('radium-plugin-linter');

function ConfiguredRadium(component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,

			lintStyles,

      Radium.Plugins.prefix,
      Radium.Plugins.checkProps
    ],
    // linter configuration
    linter: {
      plugins: [
        Plugins.preferNumber,
        Plugins.shorthandLonghand,
        Plugins.noInitialValue
      ]
    }
  })(component);
}

module.exports = ConfiguredRadium;

```

Then you just use `@ConfiguredRadium` instead of `@Radium`. Or `ConfiguredRadium(MyComponent)` instead of `Radium(MyComponent)`.

```js
@ConfiguredRadium
class MyComponent extends Component {
  // ...
}
```
