"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackendService_1 = require("../BackendService");
class ModuleController {
    start() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getModules() {
        return __awaiter(this, void 0, void 0, function* () {
            return BackendService_1.BackendService.instance.moduleManager.getAll();
        });
    }
    addModule(repository) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            const resultAdd = yield BackendService_1.BackendService.instance.moduleManager.add(repository);
            results.push(resultAdd);
            if (resultAdd.success && resultAdd.data) {
                const moduleRepositoryItem = resultAdd.data;
                if (moduleRepositoryItem.isBuilded) {
                    const resultInstall = yield BackendService_1.BackendService.instance.moduleManager.install(moduleRepositoryItem, true);
                    results.push(resultInstall);
                }
                else {
                    const resultInstall = yield BackendService_1.BackendService.instance.moduleManager.install(moduleRepositoryItem, false);
                    results.push(resultInstall);
                    const resultBuild = yield BackendService_1.BackendService.instance.moduleManager.build(moduleRepositoryItem);
                    results.push(resultBuild);
                }
            }
            return results;
        });
    }
    deleteModule(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const moduleRepositoryItem = BackendService_1.BackendService.instance.moduleManager.get(moduleName);
            if (moduleRepositoryItem) {
                const result = yield BackendService_1.BackendService.instance.moduleManager.remove(moduleRepositoryItem);
                return [result];
            }
            else {
                throw new Error('not found');
            }
        });
    }
    rebuildModule(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const moduleRepositoryItem = BackendService_1.BackendService.instance.moduleManager.get(moduleName);
            if (moduleRepositoryItem) {
                const resultInstall = yield BackendService_1.BackendService.instance.moduleManager.install(moduleRepositoryItem, false);
                const resultBuild = yield BackendService_1.BackendService.instance.moduleManager.build(moduleRepositoryItem);
                return [resultInstall, resultBuild];
            }
            else {
                throw new Error('not found');
            }
        });
    }
    updateModule(moduleName) {
        return __awaiter(this, void 0, void 0, function* () {
            const moduleRepositoryItem = BackendService_1.BackendService.instance.moduleManager.get(moduleName);
            if (moduleRepositoryItem) {
                const results = [];
                if (moduleRepositoryItem.hasUpdate) {
                    const resultUpdate = yield BackendService_1.BackendService.instance.moduleManager.update(moduleRepositoryItem);
                    results.push(resultUpdate);
                    if (moduleRepositoryItem.isBuilded) {
                        const resultInstall = yield BackendService_1.BackendService.instance.moduleManager.install(moduleRepositoryItem, true);
                        results.push(resultInstall);
                    }
                    else {
                        const resultInstall = yield BackendService_1.BackendService.instance.moduleManager.install(moduleRepositoryItem, false);
                        results.push(resultInstall);
                        const resultBuild = yield BackendService_1.BackendService.instance.moduleManager.build(moduleRepositoryItem);
                        results.push(resultBuild);
                    }
                }
                return results;
            }
            else {
                throw new Error('not found');
            }
        });
    }
    checkUpdates() {
        return __awaiter(this, void 0, void 0, function* () {
            const resultCheckUpdates = yield BackendService_1.BackendService.instance.moduleManager.checkUpdates();
            return [resultCheckUpdates];
        });
    }
}
exports.ModuleController = ModuleController;
//# sourceMappingURL=ModuleController.js.map