import adapter from '@sveltejs/adapter-netlify';
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        // hydrate the <div id="svelte"> element in src/app.html

        adapter: adapter(),
		vite: {
			plugins: [
			    WindiCSS(),
			],
		},
	}
};

export default config;
