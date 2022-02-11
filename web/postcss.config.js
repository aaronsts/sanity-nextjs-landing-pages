module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 'postcss-import': {},
    // cssnano: true,
    'postcss-preset-env': {
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    },
  },
}
