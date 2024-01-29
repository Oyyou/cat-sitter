import react from "@vitejs/plugin-react-swc";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import path from "path";

// https://vitejs.dev/config/
export default {
  plugins: [
    react(),
    Pages({
      onRoutesGenerated: routes => (generateSitemap({ routes })),
    }),],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      // key is the alias, value is the actual path
      'api': path.resolve(__dirname, 'src/api'),
      'components': path.resolve(__dirname, 'src/components'),
      'constants': path.resolve(__dirname, 'src/constants'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'state': path.resolve(__dirname, 'src/state'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  }
}
