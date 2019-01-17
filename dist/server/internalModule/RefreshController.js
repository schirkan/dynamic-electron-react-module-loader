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
Object.defineProperty(exports, "__esModule", { value: true });
var reactron_interfaces_1 = require("@schirkan/reactron-interfaces");
var RefreshController = /** @class */ (function () {
    function RefreshController() {
        this.restart = this.restart.bind(this);
        this.onTimer = this.onTimer.bind(this);
    }
    RefreshController.prototype.start = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.context = context;
                // subscribe to settings changes
                this.context.backendService.topics.subscribe(reactron_interfaces_1.topicNames.systemSettingsUpdated, this.restart);
                this.startAutoRefresh();
                return [2 /*return*/];
            });
        });
    };
    RefreshController.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.context.backendService.topics.unsubscribe(reactron_interfaces_1.topicNames.systemSettingsUpdated, this.restart);
                this.stopAutoRefresh();
                return [2 /*return*/];
            });
        });
    };
    RefreshController.prototype.onTimer = function () {
        this.context.log.debug('onTimer');
        clearTimeout(this.timer);
        this.context.backendService.topics.publish(reactron_interfaces_1.topicNames.refresh);
        this.setNextTimer();
    };
    RefreshController.prototype.setNextTimer = function () {
        var _this = this;
        var now = new Date();
        var timeInMinutes = (now.getHours() * 60) + now.getMinutes();
        var timestamp = now.getTime();
        var timestampToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        var nextRefreshTimestamp = 0;
        this.context.settings.autorefresh.forEach(function (item) {
            var tempNextRefreshTimestamp = 0;
            if (_this.isInInterval(timeInMinutes, +item.from, +item.to)) {
                tempNextRefreshTimestamp = timestamp + (item.interval * 60 * 1000);
            }
            else {
                tempNextRefreshTimestamp = timestampToday + (+item.from * 60 * 1000);
            }
            if (nextRefreshTimestamp === 0 || (tempNextRefreshTimestamp > 0 && tempNextRefreshTimestamp < nextRefreshTimestamp)) {
                nextRefreshTimestamp = tempNextRefreshTimestamp;
            }
        });
        if (nextRefreshTimestamp > 0) {
            var timeout = nextRefreshTimestamp - timestamp;
            this.timer = setTimeout(this.onTimer, timeout);
        }
    };
    RefreshController.prototype.isInInterval = function (value, from, to) {
        if (from === to) {
            return false;
        }
        else if (from < to) {
            if (from >= value || to <= value) {
                return true;
            }
        }
        else {
            if (from <= value || to >= value) {
                return true;
            }
        }
        return false;
    };
    RefreshController.prototype.restart = function () {
        this.stopAutoRefresh();
        this.startAutoRefresh();
    };
    RefreshController.prototype.startAutoRefresh = function () {
        this.context.log.debug('startAutoRefresh');
        if (this.timer) {
            return;
        }
        this.setNextTimer();
    };
    RefreshController.prototype.stopAutoRefresh = function () {
        this.context.log.debug('stopAutoRefresh');
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    return RefreshController;
}());
exports.RefreshController = RefreshController;
//# sourceMappingURL=RefreshController.js.map