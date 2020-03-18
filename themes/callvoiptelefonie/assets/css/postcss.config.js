class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

const purgeTailwind = (content) => {
  return content.match(/[A-z0-9-:\/]+/g)
}

const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import')({
      path: ["themes/callvoiptelefonie/assets/css"],
    }),
    require('tailwindcss')('./themes/callvoiptelefonie/assets/css/tailwind.config.js'),

    purgecss({
      content: ['./themes/callvoiptelefonie/layouts/**/*.html'],
      fontFace: true,
      whitelist: ['pagination', 'layout-split', 'active', 'has-dropdown'],
      extractors: [
        {
          extractor: purgeTailwind,
          extensions: ['html']
        },
      ]
    }),

    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./themes/callvoiptelefonie/layouts/**/*.html'],
    //   extractors: [
    //   {
    //     extractor: new TailwindExtractor,
    //     extensions: ['html']
    //   }],
    //   fontFace: true,
    //   whitelist: ['pagination', 'layout-split', 'active', 'has-dropdown']
    // }),

    require('autoprefixer')
  ]
}