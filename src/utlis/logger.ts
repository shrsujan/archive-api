import * as log from 'winston-logger-setup';
import { Stream } from 'stream';

/**
 * Print provided message to console
 * @param { LogMessage[] } args
 */
export function cnsl(...args: LogMessage[]) {
  log.cnsl(...args, {});
}

/**
 * Print provided info message to console and log it into log/info.log file
 * @param { LogMessage[] } args
 */
export function info(...args: LogMessage[]) {
  log.info(...args, {});
}

/**
 * Print provided error message to console and log it into log/error.log file
 * @param { LogMessage[] } args
 */
export function error(...args: LogMessage[]) {
  log.error(...args, {});
}

/**
 * Print provided warning message to console and log it into log/warn.log file
 * @param { LogMessage[] } args
 */
export function warn(...args: LogMessage[]) {
  log.warn(...args, {});
}

/**
 * Print provided debugging message to console and log it into log/debug.log file
 * @param { LogMessage[] } args
 */
export function debug(...args: LogMessage[]) {
  log.debug(...args, {});
}

/**
 * Print api call endpoints to console and log it into log/info.log file
 */
export const logStream = {
  write(message: string) {
    log.info(message.replace(/\.*(\n)$/, ''));
  }
};
