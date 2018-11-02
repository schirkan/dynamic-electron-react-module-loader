import { IComponentDefinition } from "../../../interfaces/IComponentDefinition";
import IFrame from "./IFrame";

export const iFrameDefinition: IComponentDefinition = {
    component: IFrame,
    description: 'IFrame Component',
    displayName: 'IFrame',
    name: 'IFrame',
    fields: [
        { displayName: 'URL', name: 'url', valueType: 'string' }
    ]
};