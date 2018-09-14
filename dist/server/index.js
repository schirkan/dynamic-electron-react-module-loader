"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var BackendService_1 = require("./BackendService");
var config_1 = require("./config");
exports.start = function (root) { return __awaiter(_this, void 0, void 0, function () {
    var config, internalModule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (BackendService_1.BackendService.instance) {
                    return [2 /*return*/];
                }
                console.log('BackendService is starting');
                config = config_1.createConfig(root);
                BackendService_1.BackendService.instance = new BackendService_1.BackendService(config);
                return [4 /*yield*/, BackendService_1.BackendService.instance.moduleLoader.loadModule('../')];
            case 1:
                internalModule = _a.sent();
                if (internalModule) {
                    /*
                    internalModule.folder: 'internalModule',
                    internalModule.path: './internalModule',
                    internalModule.description: 'Internal Module',
                    internalModule.author: 'Martin Pietschmann',
                    internalModule.canBuild: false,
                    internalModule.canUpdate: false,
                    internalModule.canInstall: false,
                    internalModule.isBuilded: true,
                    internalModule.isInstalled: true,
                    internalModule.name = 'internal',
                    */
                    internalModule.canRemove = false;
                    internalModule.serverFile = './internalModule/index';
                    BackendService_1.BackendService.instance.moduleRepository.add(internalModule);
                }
                return [4 /*yield*/, BackendService_1.BackendService.instance.expressApp.start()];
            case 2:
                _a.sent();
                return [4 /*yield*/, BackendService_1.BackendService.instance.electronApp.start()];
            case 3:
                _a.sent();
                return [4 /*yield*/, BackendService_1.BackendService.instance.moduleManager.loadAllModules()];
            case 4:
                _a.sent();
                return [4 /*yield*/, BackendService_1.BackendService.instance.serviceManager.startAllServices()];
            case 5:
                _a.sent();
                electron_1.app.on('before-quit', function () { return BackendService_1.BackendService.instance.serviceManager.stopAllServices(); });
                BackendService_1.BackendService.instance.electronApp.mainWindow.loadURL('http://localhost:' + BackendService_1.BackendService.instance.config.frontendPort + BackendService_1.BackendService.instance.settings.get().startupPath);
                console.log('BackendService is running');
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=index.js.map