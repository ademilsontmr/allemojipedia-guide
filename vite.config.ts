import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Plugin to generate sitemap.xml during build
function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    closeBundle: async () => {
      try {
        // Dynamic import of data files
        const emojisModule = await import('./src/data/emojis');
        const categoriesModule = await import('./src/data/categories');
        const blogPostsModule = await import('./src/data/blogPosts');
        
        const emojis = emojisModule.emojis;
        const categories = categoriesModule.categories;
        const peopleSubcategories = categoriesModule.peopleSubcategories;
        const blogPosts = blogPostsModule.blogPosts;

        const BASE_URL = 'https://allemojipedia.com';
        const urls: { loc: string; priority: string }[] = [];

        // Main pages
        urls.push({ loc: `${BASE_URL}/`, priority: '1.0' });
        urls.push({ loc: `${BASE_URL}/categories`, priority: '0.9' });
        urls.push({ loc: `${BASE_URL}/people`, priority: '0.9' });
        urls.push({ loc: `${BASE_URL}/blog`, priority: '0.9' });
        urls.push({ loc: `${BASE_URL}/sitemap`, priority: '0.5' });

        // Category pages
        categories.forEach((category: { slug: string }) => {
          urls.push({ loc: `${BASE_URL}/category/${category.slug}`, priority: '0.8' });
        });

        // People subcategory pages
        peopleSubcategories.forEach((sub: { slug: string }) => {
          urls.push({ loc: `${BASE_URL}/people/${sub.slug}`, priority: '0.7' });
        });

        // Blog post pages
        blogPosts.forEach((post: { slug: string }) => {
          urls.push({ loc: `${BASE_URL}/blog/${post.slug}`, priority: '0.7' });
        });

        // All emoji pages
        emojis.forEach((emoji: { slug: string }) => {
          urls.push({ loc: `${BASE_URL}/emoji/${emoji.slug}`, priority: '0.6' });
        });

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url.loc}</loc><priority>${url.priority}</priority></url>`).join('\n')}
</urlset>`;

        // Write to dist folder
        const distPath = path.resolve(__dirname, 'dist', 'sitemap.xml');
        fs.writeFileSync(distPath, xml);
        console.log(`✅ Sitemap generated with ${urls.length} URLs`);
      } catch (error) {
        console.log('⚠️ Sitemap generation skipped:', error);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Garantir que os arquivos JS tenham a extensão correta
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.js')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));
