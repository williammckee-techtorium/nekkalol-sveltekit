import adapter from '@sveltejs/adapter-static';
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        // hydrate the <div id="svelte"> element in src/app.html

        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
		vite: {
			plugins: [
			    WindiCSS(),
			],
		},
	}
};

export default config;
