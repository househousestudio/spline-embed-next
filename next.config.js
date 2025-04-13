// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-eval' https://unpkg.com; worker-src blob:;"
          }
        ]
      }
    ];
  }
};