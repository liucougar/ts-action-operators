/**
 * @license Copyright © 2017 Nicholas Jamieson. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/cartant/ts-action-operators
 */

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import { ActionWithPayload } from "ts-action";

export function toPayload<T extends string, P>(): (source: Observable<ActionWithPayload<T, P>>) => Observable<P> {
    return map(action => action.payload);
}
