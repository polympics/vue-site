module.exports = {
  rules: {
    test: /\.sass$/,
    use: [
      "vue-style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            indentedSyntax: true
          }
        }
      }
    ]
  }
};
