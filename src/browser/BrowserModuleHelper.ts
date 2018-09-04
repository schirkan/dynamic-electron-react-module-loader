import { IPubSub } from "src/interfaces/IPubSub";
import { IExternalService } from "../interfaces/IExternalService";
import { IModuleHelper } from "../interfaces/IModuleHelper";

export class BrowserModuleHelper implements IModuleHelper {
    public readonly electron: Electron.AllElectron;
    public readonly backendService: any; // TODO
    public readonly topics: IPubSub;
    public readonly moduleStorage: ElectronStore;
    public readonly moduleApiPath: string;
    public readonly getService: (serviceName: string, moduleName?: string | undefined) => Promise<IExternalService | undefined>;

    constructor(public moduleName: string) {
        if ((window as any).require) {
            this.electron = (window as any).require('electron');
            this.backendService = this.electron.remote.require('./dist/server/BackendService').BackendService.instance;
            this.topics = this.backendService.topics;
            const Store = this.electron.remote.require('electron-store');
            this.moduleStorage = new Store({ name: 'module.' + moduleName });
        }

        this.moduleApiPath = '/api/modules/' + moduleName;

        // tslint:disable-next-line:no-shadowed-variable
        this.getService = (serviceName: string, moduleName?: string): Promise<IExternalService | undefined> => {
            if(!this.backendService){
                return Promise.reject('Method getService is not supported in browser environment.');
            }
            return this.backendService.serviceManager.get(moduleName || this.moduleName, serviceName);
        }
    }
}

