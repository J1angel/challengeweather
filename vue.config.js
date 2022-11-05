const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            indentedSyntax: true // optional
          },
          // Requires >= sass-loader@^8.0.0
          // eslint-disable-next-line no-dupe-keys
          options: {
            implementation: require('sass'),
            sassOptions: {
              indentedSyntax: true // optional
            },
          },
        },
      ],
    },
  ],
})
