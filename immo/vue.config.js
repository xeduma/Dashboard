const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
//  transpileDependencies: true,

//})


module.exports = {
  devServer: {
    host: 'localhost', // Allow access from any network interface (e.g., another machine)
    port: 3005,      // You can change this port if needed
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: 'immo.xeduma.fr', // This allows all hosts, which solves the Invalid Host header error


proxy: {
      '/api': {
        target: 'http://127.0.0.1:3017',
        changeOrigin: true,
		secure: false,
      },
	'/run-script': {
        	target: 'http://127.0.0.1:3018',
	        changeOrigin: true,
		secure: false,
      	}

    }
  },
};
