export default {
  logLevel: 'error', // Only show errors, not warnings
  markdown: {
    // Add additional markdown configuration to suppress warnings
    remarkRehype: {
      // Suppress warnings about duplicate IDs and unknown directives
      clobberPrefix: '',
      passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement']
    }
  },
  vite: {
    logLevel: 'error', // Suppress most Vite warnings
    build: {
      chunkSizeWarningLimit: 1000 // Increase the chunk size warning limit
    }
  },
  logger: {
    level: 'error', // Only show errors, suppress warnings
    dest: process.stdout
  }
};
