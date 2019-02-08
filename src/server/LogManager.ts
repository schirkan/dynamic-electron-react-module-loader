import { ILogManager, ILogEntry, IPubSub, topicNames, Severity } from "@schirkan/reactron-interfaces";

export class LogManager implements ILogManager {
  private repository: ILogEntry[] = [];

  constructor(topics: IPubSub) {
    topics.subscribe(topicNames.log, (e, data) => this.writeLog(data));
  }

  public writeLog(sourceOrLogEntry: any, severity?: Severity, message?: string, data?: any): void {
    if (typeof sourceOrLogEntry === 'string') {
      this.repository.push({
        timestamp: Date.now(),
        source: sourceOrLogEntry,
        severity: severity || 'debug',
        message: (typeof message === 'string') ? message : JSON.stringify(message),
        data
      });
      console.log(sourceOrLogEntry + ': ' + message); // TODO
    } else if (typeof sourceOrLogEntry === 'object') {
      const i = sourceOrLogEntry as ILogEntry;
      this.writeLog(i.source, i.severity, i.message, i.data);
    } else {
      console.log('LogManager: Parameter sourceOrLogEntry is missing!', arguments);
    }
  }

  public readLog(source?: string): ILogEntry[] {
    if (source) {
      return this.repository.filter(x => x.source === source);
    }
    return this.repository;
  }
}