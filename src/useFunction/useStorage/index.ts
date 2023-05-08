export interface UseStorageOptions <T = Record<string, any>> {
    init: T
    watchKeys?: (keyof T)[]
    watchStorageChange?: (e: StorageEvent) => void
}

export function useStorage<T extends Record<string, any>>(options:UseStorageOptions<T>) {
    function init() {
        for (const key in options.init) {
            setStorage(key, options.init[key]);
        };
    };
    init();
    function setStorage<K extends keyof T>(key: K, val: T[K]) {
        localStorage.setItem(key.toString(), JSON.stringify(val));
    };
    function getStorage<K extends keyof T>(key: K): T[K] | undefined {
        const _storageResult = localStorage.getItem(key.toString());
        return _storageResult ? JSON.parse(_storageResult) : undefined;
    };
    function removeStorage<K extends keyof T>(key: K) {
        localStorage.removeItem(key.toString());
    };
    function clearStorage() {
        localStorage.clear();
        for (const key in options.init) {
            removeStorage(key);
        }
    };
    return {
        set: setStorage,
        get: getStorage,
        remove: removeStorage,
        clear: clearStorage,
    }
};