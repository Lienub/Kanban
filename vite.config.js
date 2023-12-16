import path from "node:path";
console.log(path.resolve(__dirname, "src", "index.html"));
export default {
    base: './',
    root: path.resolve(__dirname, "src"),
    resolve: {
      alias: [{ find: "#", replacement: path.resolve(__dirname, "src") }],
    },    
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "src", "index.html"),
        },
      },  
      cssCodeSplit: true,    
    },
  
  };
  