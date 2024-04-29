import { renderers } from './renderers.mjs';
import { manifest } from './manifest_XhWOR199.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BlpL1Gd8.mjs');
const _page1 = () => import('./chunks/blog_ChgMiGtw.mjs');
const _page2 = () => import('./chunks/info_BoM_KAAe.mjs');
const _page3 = () => import('./chunks/index_BB4TYPsh.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog.astro", _page1],
    ["src/pages/info.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a4294e55-70b9-4ff9-9db0-b5c06a1d82aa"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
