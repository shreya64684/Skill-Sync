/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  exports : {
    api: {
        bodyParser: false, // Disable default bodyParser for handling file uploads
    },
},
};

export default config;
