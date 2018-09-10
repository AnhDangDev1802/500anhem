export class Model {
    setObject(obj) {
        for (let key in this) {
            if (typeof obj[key] !== 'undefined') {
                this[key] = obj[key];
            }
        }
    }
}