/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
            if (this.length === 0) {
                return -1; // Return -1 if the array is empty as per requirements.
            } else {
                // Return the last element.
                // The index of the last element is 'length - 1' because arrays are 0-indexed.
                return this[this.length - 1];
            }

};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */