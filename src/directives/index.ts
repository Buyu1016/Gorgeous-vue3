import { App } from "vue";
export * from "./Loading";
import loadingDirective from "./Loading";
import floatDirective from "./Number/float";
import integerDirective from "./Number/integer";
import deferDirective from "./Defer";

const directives = [loadingDirective, floatDirective, integerDirective, deferDirective];

// 单量
export {
    loadingDirective,
    integerDirective,
    floatDirective,
    deferDirective
};

// 全量
export const DirectiveInstall = {
    install(app: App) {
        directives.forEach(directive => {
            app.use(directive);
        });
    }
};