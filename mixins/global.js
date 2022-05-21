import { marked } from 'marked';

export default {
  inheritAttrs: false,
  validate({ params, route, store }) {
    const routesToFetch = store.state.routes.find((r) => {
      if (Object.keys(params).length) {
        const p = Object.keys(params);
        return route.path.split(params[p[0]]).join(`:${p[0]}`) === r.path;
      }

      return r.path === route.path;
    });

    if (!routesToFetch) return false;
    return true;
  },
  props: {
    content: {
      type: [Object, Boolean],
      required: true,
    },
  },
  methods: {
    parseMarkdown(content) {
      marked.setOptions({
        breaks: true,
        gfm: true,
      });

      return marked(content);
    }
  },
}