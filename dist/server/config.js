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
                webComponentId: 'mylist',
                style: {
                    backgroundColor: '#444',
                    color: '#fff'
                }
            }],
        defaultWebComponentOptions: [{
                id: 'mylist',
                componentName: 'ListLayout',
                moduleName: 'reactron',
                options: {
                    items: [
                        { content: "welcome" },
                        { content: "mygrid", style: { 'padding': '10px' } },
                        { content: "notfound" }
                    ]
                }
            }, {
                id: 'mygrid',
                componentName: 'GridLayout',
                moduleName: 'reactron',
                options: {
                    cols: 2,
                    rows: 2,
                    gridStyle: {
                        gridGap: '10px',
                    },
                    tileStyle: {
                        borderRadius: '5px',
                        border: '3px solid white',
                        padding: '10px'
                    },
                    tiles: [
                        { content: "hello1", col: 1, row: 1, colspan: 1, rowspan: 1 },
                        { content: "hello2", col: 1, row: 2, colspan: 1, rowspan: 1 },
                        { content: "iframe-weather", col: 2, row: 1, colspan: 1, rowspan: 2, style: { height: "200px" } }
                    ]
                }
            }, {
                id: 'welcome',
                componentName: 'Welcome',
                moduleName: 'reactron'
            }, {
                id: 'hello1',
                componentName: 'HelloWorld',
                moduleName: 'reactron-hello-world',
                options: { initialText: 'Hello World' }
            }, {
                id: 'hello2',
                componentName: 'HelloWorld',
                moduleName: 'reactron-hello-world',
                options: { initialText: 'Hello Mars' }
            }, {
                id: 'iframe-weather',
                componentName: 'IFrame',
                moduleName: 'reactron',
                options: { url: 'https://wetter.tagesschau.de/deutschland/aussichten.html#aussichten' }
            }]
    };
};
//# sourceMappingURL=config.js.map