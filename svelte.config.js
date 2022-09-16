import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = false

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			
		  },),
		  paths: {
			// change below to your repo name
			base:  "/svelte-pure-static",
		},
	}
};

export default config;
