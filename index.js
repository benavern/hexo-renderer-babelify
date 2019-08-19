const browserify = require('browserify');

function renderer (file) {
  const userConfig = {
    ...hexo.theme.config.babelify || {},
    ...hexo.config.babelify || {}
  };

  return new Promise((resolve, reject) => {
    let code = '';

    const b = browserify({ debug: !!userConfig.sourceMaps })
     .add(file.path)
     .transform('babelify', { presets: userConfig.presets })
     .bundle();

    b.on('error', reject);
    b.on('data', (chunk) => { code += chunk.toString() });
    b.on('end', () => resolve(code));
  });
}

hexo.extend.renderer.register('js', 'js', renderer);
