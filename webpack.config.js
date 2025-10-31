// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 1. Modo
  mode: "development",

  // 2. Punto de entrada
  entry: "./src/index.js",

  // 3. Configuración del servidor de desarrollo
  devServer: {
    static: "./dist", // Carpeta que el servidor observará
    open: true, // Abre el navegador automáticamente
  },

  // 4. Source Maps (para depurar)
  devtool: "eval-source-map",

  // 5. Salida (Output)
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Limpia la carpeta 'dist' antes de cada build
  },

  // 6. Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Tu plantilla HTML
    }),
  ],

  // 7. Módulos (para los loaders)
  module: {
    rules: [
      {
        test: /\.css$/i, // Regex para archivos .css
        use: ["style-loader", "css-loader"], // Loaders que se usarán
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Para imágenes
        type: "asset/resource",
      },
    ],
  },
};
