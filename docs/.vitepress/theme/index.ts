import Theme from 'vitepress/dist/client/theme-default/index.js'
import GorgeousUI, { DirectiveInstall } from '../../../src/entry';

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(GorgeousUI)
        app.use(DirectiveInstall);
    },
}