import Theme from 'vitepress/dist/client/theme-default/index.js'
import GorgeousUI from '../../../src/entry';

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(GorgeousUI)
    },
}