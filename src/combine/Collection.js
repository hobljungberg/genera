/**
 * Collection
 *
 * Used for encapsulating sets of objects.
 */

import GeneraObject from '../metal/GeneraObject';


class Collection extends GeneraObject {

    constructor(entries = []) {
        super();

        this.entries = Array.from(entries);
    }

    combine(min = 1) {
        const combine = function(a, min) {
            var fn = function(n, src, got, all) {
                if (n == 0) {
                    if (got.length > 0) {
                        all[all.length] = got;
                    }
                    return;
                }
                for (var j = 0; j < src.length; j++) {
                    fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
                }
                return;
            }
            var all = [];
            for (var i = min; i < a.length; i++) {
                fn(i, a, [], all);
            }
            all.push(a);
            return all;
        }

        return combine(this.entries, min);
    }

    permute(memSafe = true) {
        // 13! = 6,227,020,800
        if (memSafe && this.entries.length >= 13) {
            throw new Error('too many entries to permute');
        }

        function permute(arr) {
            if (arr.length === 1) {
                return [arr[0]];
            }

            const permutations = [];

            arr.forEach((elem, i) => {
                const disjoint = arr.slice(0, i).concat(arr.slice(i + 1, arr.length));
                permute(disjoint).forEach(permutation => {
                    permutations.push(elem.concat(permutation));
                });
            });

            return permutations;
        }

        return Array.from(new Set(permute(this.entries)));
    }

}

export default Collection;
