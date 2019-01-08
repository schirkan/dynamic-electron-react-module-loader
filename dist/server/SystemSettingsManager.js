"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var topics_1 = require("../common/topics");
// tslint:disable-next-line:no-var-requires
var Store = require('electron-store');
var SystemSettingsManager = /** @class */ (function () {
    function SystemSettingsManager(topics, defaultSettings) {
        this.topics = topics;
        this.repository = new Store({
            name: 'SystemSettings',
            defaults: defaultSettings
        });
    }
    SystemSettingsManager.prototype.get = function () {
        return this.repository.store;
    };
    SystemSettingsManager.prototype.set = function (settings) {
        this.repository.store = settings;
        this.topics.publish(topics_1.topicNames.systemSettingsUpdated, settings);
    };
    return SystemSettingsManager;
}());
exports.SystemSettingsManager = SystemSettingsManager;
//# sourceMappingURL=SystemSettingsManager.js.map