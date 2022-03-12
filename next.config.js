const withPWA = require('next-pwa');

module.exports = withPWA({
	basePath: '/dogz',
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		sw: '/dogz/sw.js'
	}
});
