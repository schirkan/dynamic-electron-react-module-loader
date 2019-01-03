"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = function (root) {
    var isDev = process.env.NODE_ENV === 'development';
    return {
        root: root,
        isDev: isDev,
        frontendPort: 3000,
        backendPort: isDev ? 5000 : 3000,
        defaultSystemSettings: {
            lang: 'en',
            location: '',
            timezone: 'Europe/Berlin',
            startupPath: '/',
            autorefresh: []
        },
        defaultWebPageOptions: [{
                id: 'homepage',
                title: 'Home',
                path: '/',
                webComponentId: 'welcome',
                style: {
                    backgroundColor: '#000',
                    color: '#fff'
                }
            }],
        defaultWebComponentOptions: [{
                id: 'welcome',
                parentId: 'homepage',
                componentName: 'Welcome',
                moduleName: 'reactron'
            }]
    };
};
//# sourceMappingURL=config.js.map