import key from './decorationKey';
import type { Decorated } from '../../interfaces';
/**
 * Add a decoration to the instance.
 *
 * @param instance - The instance to decorate.
 * @param decoration - The decoration.
 */
export declare function getDecoration<T extends Decorated>(instance: T): T[typeof key];
