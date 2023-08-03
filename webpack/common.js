import { resolve } from "path";

const commonConfig = {
  target: ["web", "browserslist"],
  entry: {
    main: resolve("src/main.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".wasm"],
    alias: {
      '@': resolve('src'),
    },
  },
  output: {
    path: resolve("public"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              noEmit: false,
            },
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};

export default commonConfig;
