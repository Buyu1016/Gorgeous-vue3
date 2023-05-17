import { App } from "vue";

export * from "./Loading";
import loadingDirective from "./Loading";

const directives = [loadingDirective];

// 单量
export {
    loadingDirective
};

// 全量
export const DirectiveInstall = {
    install(app: App) {
        directives.forEach(directive => {
            app.use(directive);
        });
    }
};