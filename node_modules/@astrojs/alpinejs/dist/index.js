function createPlugin() {
  return {
    name: "@astrojs/alpinejs",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page",
          `import Alpine from 'alpinejs'; window.Alpine = Alpine; Alpine.start();`
        );
      }
    }
  };
}
export {
  createPlugin as default
};
