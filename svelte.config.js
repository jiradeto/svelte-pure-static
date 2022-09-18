import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const isDev = process?.env?.SVELTE_ENV === "production"
console.log("isDev", isDev);

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
			// base: isDev ? "" : "/svelte-pure-static",
			base:  ""
		},
	}
};

export default config;
