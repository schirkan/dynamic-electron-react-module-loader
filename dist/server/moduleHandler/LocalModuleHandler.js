"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const commandResultWrapper_1 = require("../commandResultWrapper");
const SystemCommand_1 = require("../SystemCommand");
const ModuleHelper_1 = require("./ModuleHelper");
class LocalModuleHandler {
    constructor(config, moduleRepository) {
        this.config = config;
        this.moduleRepository = moduleRepository;
    }
    loadAllModules() {
        const result = [];
        const moduleNames = this.loadModuleNames();
        console.log('found ' + moduleNames.length + ' items in modules folder');
        for (const moduleName of moduleNames) {
            const moduleFolderFull = path.join(this.config.modulesRootPath, moduleName);
            if (fs.statSync(moduleFolderFull).isDirectory()) {
                const newModule = this.loadModule(moduleName);
                if (newModule) {
                    result.push(newModule);
                }
            }
        }
        console.log('LocalModuleHandler: ' + result.length + ' modules loaded');
        return result;
    }
    loadModuleNames() {
        const items = fs.readdirSync(this.config.modulesRootPath);
        return items.filter(x => x !== 'node_modules' && !x.startsWith('.'));
    }
    loadModule(folderName) {
        const modulePath = path.join(this.config.modulesRootPath, folderName);
        const newModule = ModuleHelper_1.loadModule(modulePath);
        const moduleDefinition = newModule && newModule.definition;
        if (moduleDefinition) {
            const gitFolder = path.join(modulePath, '.git');
            moduleDefinition.type = fs.existsSync(gitFolder) ? 'git' : 'local';
        }
        return moduleDefinition;
    }
    ;
    add(repository) {
        return commandResultWrapper_1.command('add', repository, (result) => __awaiter(this, void 0, void 0, function* () {
            // clean repository url
            repository = ModuleHelper_1.cleanRepositoryUrl(repository);
            if (!repository) {
                throw new Error('Invalid repository');
            }
            const parts = repository.split('/');
            if (parts.length < 2) {
                throw new Error('Invalid repository');
            }
            const folderName = parts[parts.length - 1];
            // check destination folder 
            const fullModulePath = path.join(this.config.modulesRootPath, folderName);
            if (!this.isDirEmpty(fullModulePath)) {
                throw new Error('Destination folder already exists');
            }
            const gitCloneResult = yield SystemCommand_1.SystemCommand.run('git clone ' + repository + ' ' + folderName, this.config.modulesRootPath);
            result.children.push(gitCloneResult);
            let moduleDefinition;
            if (gitCloneResult.success) {
                moduleDefinition = yield this.loadModule(folderName);
                if (moduleDefinition) {
                    const installResult = yield SystemCommand_1.SystemCommand.run('npm install --production', moduleDefinition.path);
                    result.children.push(installResult);
                    this.moduleRepository.add(moduleDefinition);
                }
            }
            return moduleDefinition;
        }));
    }
    update(moduleDefinition) {
        return commandResultWrapper_1.command('update', moduleDefinition && moduleDefinition.name, (result) => __awaiter(this, void 0, void 0, function* () {
            if (!this.canHandleModule(moduleDefinition) || moduleDefinition.type !== 'git') {
                throw new Error('Can not update module');
            }
            const updateResult = yield SystemCommand_1.SystemCommand.run('git fetch --all && git reset --hard origin/master', moduleDefinition.path);
            result.children.push(updateResult);
            if (updateResult.success) {
                moduleDefinition.hasUpdate = false;
                ModuleHelper_1.refreshModule(moduleDefinition);
                const installResult = yield SystemCommand_1.SystemCommand.run('npm install --production', moduleDefinition.path);
                result.children.push(installResult);
            }
        }));
    }
    remove(moduleDefinition) {
        return commandResultWrapper_1.command('remove', moduleDefinition && moduleDefinition.name, () => __awaiter(this, void 0, void 0, function* () {
            if (!this.canHandleModule(moduleDefinition)) {
                throw new Error('Can not remove module');
            }
            const result = yield SystemCommand_1.SystemCommand.run('rimraf ' + moduleDefinition.path, this.config.modulesRootPath);
            if (result.success) {
                this.moduleRepository.remove(moduleDefinition.name);
            }
            return result;
        }));
    }
    canHandleModule(moduleDefinition) {
        return !!moduleDefinition && !!moduleDefinition.name &&
            (moduleDefinition.type === 'local' || moduleDefinition.type === 'git');
    }
    canAdd(repository) {
        return Promise.resolve(repository.startsWith('http://') && repository.includes('github'));
    }
    canRemove(moduleDefinition) {
        return Promise.resolve(this.canHandleModule(moduleDefinition));
    }
    canUpdate(moduleDefinition) {
        return Promise.resolve(this.canHandleModule(moduleDefinition) && moduleDefinition.type === 'git');
    }
    hasUpdate(moduleDefinition) {
        return commandResultWrapper_1.command('checkUpdate', moduleDefinition && moduleDefinition.name, (result) => __awaiter(this, void 0, void 0, function* () {
            if (!this.canHandleModule(moduleDefinition)) {
                return false;
            }
            if (moduleDefinition.type === 'local') {
                return false;
            }
            else if (moduleDefinition.type === 'git') {
                const result1 = yield SystemCommand_1.SystemCommand.run('git remote -v update', moduleDefinition.path);
                result.children.push(result1);
                if (result1.success === false) {
                    return false;
                }
                const result2 = yield SystemCommand_1.SystemCommand.run('git rev-list HEAD...origin/master --count', moduleDefinition.path);
                result.children.push(result2);
                if (result2.success === false) {
                    return false;
                }
                return result2.log[0] !== '0';
            }
            return false;
        }));
    }
    isDirEmpty(dirname) {
        try {
            const files = fs.readdirSync(dirname);
            return !files.length;
        }
        catch (error) {
            return true;
        }
    }
}
exports.LocalModuleHandler = LocalModuleHandler;
//# sourceMappingURL=LocalModuleHandler.js.map