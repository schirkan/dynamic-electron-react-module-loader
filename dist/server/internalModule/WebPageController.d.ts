import { IExternalService } from '../../interfaces/IExternalService';
import { ServerModuleHelper } from '../ServerModuleHelper';
export declare class WebPageController implements IExternalService {
    start(helper: ServerModuleHelper): Promise<void>;
}
