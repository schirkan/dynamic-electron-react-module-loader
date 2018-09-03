import { app } from 'electron';
import { IBackendServiceConfig } from '../interfaces/IBackendServiceConfig';
import { ISystemSettings } from '../interfaces/ISystemSettings';
import { ElectronApp } from './ElectronApp';
import { ExpressApp } from './ExpressApp';
import { ModuleManager } from './ModuleManager';
import { ModuleRepository } from './ModuleRepository';
import { PubSub } from './PubSub';
import { ServiceManager } from './ServiceManager';
import { ServiceRepository } from './ServiceRepository';
import { SystemSettingsManager } from './SystemSettingsManager';

export class BackendService {
    public static instance: BackendService;
    public static async start(root: string): Promise<void> {
        if (!BackendService.instance) {
            const isDev = process.env.NODE_ENV === 'development';
            const config = {
                root,
                isDev,
                frontendPort: 3000,
                backendPort: isDev ? 5000 : 3000
            };

            console.log('BackendService is starting', config);

            BackendService.instance = new BackendService(config);
            await BackendService.instance.start();

            console.log('BackendService is running');
        }
    }

    private readonly moduleRepository = new ModuleRepository();
    private readonly serviceRepository = new ServiceRepository();
    public readonly electronApp = new ElectronApp(this.config);
    public readonly expressApp = new ExpressApp(this.config);
    public readonly serviceManager = new ServiceManager(this.serviceRepository, this.moduleRepository);
    public readonly moduleManager = new ModuleManager(this.config, this.moduleRepository);
    public readonly topics = new PubSub();
    public readonly settings: ISystemSettings = new SystemSettingsManager();

    private constructor(public readonly config: IBackendServiceConfig) { }

    private async start(): Promise<void> {
        // register internal api module
        this.moduleRepository.add({
            name: 'internal',
            folder: 'apiModule',
            path: './apiModule',
            description: 'Internal Api Module',
            author: 'Martin Pietschmann',
            canRemove: false,
            canBuild: false,
            canUpdate: false,
            canInstall: false,
            isBuilded: true,
            isInstalled: true,
            commandLog: [],
            serverFile: './apiModule/index'
        });

        await this.expressApp.start();
        await this.electronApp.start();
        await this.moduleManager.loadAllModules();
        await this.serviceManager.startAllServices();

        app.on('before-quit', () => this.serviceManager.stopAllServices());
        this.electronApp.mainWindow.loadURL('http://localhost:' + this.config.frontendPort);
    }

    public async exit(): Promise<void> {
        this.electronApp.mainWindow.close();
        app.quit();
    }

    public async restart(): Promise<void> {
        app.relaunch();
        app.quit();
    }
}