// next.config.js
const withOffline = require('next-offline');

//module.exports = withOffline();

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        //urlPattern: /.png$/,
        urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'image-cache',
          cacheableResponse: {
            statuses: [0, 200],
          }
        }
      },
      {
        urlPattern: new RegExp('^https://hayd.us-west-1.elasticbeanstalk.com/rest/catalogs'),
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [200],
          }
        }
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst'
      }
    ]
  },
  //Provide own no-op service worker in development
  //Useful to test web push notifications in development
  //devSwSrc: '/path/to/my/dev/service-worker.js'
});

//custom Next.js configuration as parameter
// module.exports = withOffline({
//   webpack(config, options) {
//     return config
//   }
// });

// default cache strategy
//{ urlPattern: /^https?.*/, handler: 'networkFirst' }

//https://github.com/hanford/next-offline/blob/master/readme.md