declare type LogMessage = string | number | object;

declare module 'winston-logger-setup' {
  function cnsl(...args: LogMessage[]): void;

  function info(...args: LogMessage[]): void;

  function error(...args: LogMessage[]): void;

  function warn(...args: LogMessage[]): void;

  function debug(...args: LogMessage[]): void;

  function cloud(...args: LogMessage[]): void;
}
