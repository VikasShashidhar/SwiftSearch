'use strict';

import { log } from '../log/log';
import { logLevels } from '../log/logLevels';

/**
 * Search given argv for argName using exact match or starts with. Comparison is case insensitive
 * @param  {Array} argv       Array of strings
 * @param  {String} argName   Arg name to search for.
 * @param  {Boolean} exactMatch  If true then look for exact match otherwise
 * try finding arg that starts with argName.
 * @return {String}           If found, returns the arg, otherwise null.
 */
function getCmdLineArg(argv: string[], argName: string, exactMatch: boolean) {
    if (!Array.isArray(argv)) {
        log.send(logLevels.WARN, 'getCmdLineArg: TypeError invalid func arg, must be an array: ' + argv);
        return null;
    }
    const argNameToFind = argName.toLocaleLowerCase();
    for (let i = 0, len = argv.length; i < len; i++) {
        const arg = argv[i].toLocaleLowerCase();
        if ((exactMatch && arg === argNameToFind) ||
            (!exactMatch && arg.startsWith(argNameToFind))) {
            return argv[i];
        }
    }

    return null;
}

export { getCmdLineArg };
