import * as path from 'path';
import { IBackendServiceConfig } from "../interfaces/IBackendServiceConfig";
import { ICommandResult } from "../interfaces/ICommandResult";
import { IModuleDefinition } from "../interfaces/IModuleDefinition";
import { ModuleLoader } from "./ModuleLoader";
import { ModuleRepository } from "./ModuleRepository";
import { ServiceManager } from './ServiceManager';
import { SystemCommand } from "./SystemCommand";

export class ModuleManager {
    private modulesPath: string;
    private moduleLoader = new ModuleLoader(this.config);

    constructor(
        private config: IBackendServiceConfig,
        private moduleRepository: ModuleRepository,
        private serviceManager: ServiceManager
    ) {
        this.modulesPath = path.join(this.config.root, 'modules');
    }

    public async loadAllModules() {
        // load Modules
        const modules = await this.moduleLoader.loadAllModules();
        modules.forEach(this.moduleRepository.add);

        // load Services
        this.serviceManager.getAll();
        // TODO
    }

    public getModuleDefinitions(): IModuleDefinition[] {
        return this.moduleRepository.getAll();
    }

    public getModuleDefinition(moduleName: string): IModuleDefinition | undefined {
        return this.moduleRepository.get(moduleName);
    }

    public async add(repository: string): Promise<ICommandResult> {
        const result = await SystemCommand.run('git clone ' + repository, this.modulesPath);

        if(result.success){
            // // TODO: load Definition
            // const newModules = this.moduleLoader.loadAllModules();
    
            // const module = this.getModuleDefinition(moduleName);
            // if (module) {
            //     module.commandLog.push(result);
            // }
        }

        return result;
    }

    public async update(moduleName: string): Promise<ICommandResult> {
        const moduleFolder = this.getModuleFolder(moduleName);
        const result = await SystemCommand.run('git pull -n', moduleFolder);

        const module = this.getModuleDefinition(moduleName);
        if (module) {
            module.commandLog.push(result);
        }

        return result;
    }

    public async install(moduleName: string): Promise<ICommandResult> {
        const moduleFolder = this.getModuleFolder(moduleName);
        const result = await SystemCommand.run('npm install', moduleFolder);

        const module = this.getModuleDefinition(moduleName);
        if (module) {
            module.isInstalled = module.isInstalled && result.success;
            module.commandLog.push(result);
        }

        return result;
    }

    public async build(moduleName: string): Promise<ICommandResult> {
        const moduleFolder = this.getModuleFolder(moduleName);
        const result = await SystemCommand.run('npm run build', moduleFolder);

        const module = this.getModuleDefinition(moduleName);
        if (module) {
            module.isBuilded = module.isBuilded && result.success;
            module.commandLog.push(result);
        }

        return result;
    }

    public remove(moduleName: string): Promise<ICommandResult> {
        const moduleFolder = this.getModuleFolder(moduleName);
        this.moduleRepository.remove(moduleName);
        return SystemCommand.run('rimraf ' + moduleFolder, moduleFolder);
    }

    private getModuleFolder(moduleName: string): string {
        const module = this.getModuleDefinition(moduleName);
        if (!module) {
            throw Error("Module '" + moduleName + "' not found.");
        }
        return path.join(this.modulesPath, module.folder);
    }
}