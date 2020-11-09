/**
 * Global variables
 * See 'Global variables and type checking': https://code.visualstudio.com/docs/nodejs/working-with-javascript#_global-variables-and-type-checking
 */

import lodash from 'lodash'

declare global {
  // About global lodash: https://stackoverflow.com/a/60651292
  const _: typeof lodash
}
