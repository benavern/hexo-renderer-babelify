# hexo-renderer-babelify

Add support for ES6 javascript with import/export capability.

## Install

``` bash
$ npm install hexo-renderer-babelify
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml

babelify:
  presets:
    - '@babel/preset-env'
  sourceMaps: true
```

- **presets** - Adds presets to babel config
- **sourceMaps** - Adds sourceMaps to the final bundles
