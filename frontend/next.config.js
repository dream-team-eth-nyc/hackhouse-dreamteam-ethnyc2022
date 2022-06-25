module.exports = {
  // basePath: '/',
  // reactStrictMode: false,
  
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/',
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}