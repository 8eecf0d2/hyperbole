/*
 * hyperbole by 8eecf0d2
 */

import { http as _http } from './http';
import { sync as _sync } from './sync';

export module Helpers {
	/** external */
	export const external: { [key: string]: any } = {}
	export const add = (name: string, fn: any) => {
		Helpers.external[name] = fn;
	}

	/** built-in */
	export const http = _http;
	export const sync = _sync;
}
