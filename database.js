// database.js

// This module handles localStorage management

const LocalStorageManager = {
    setItem: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: function(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    removeItem: function(key) {
        localStorage.removeItem(key);
    },
    clear: function() {
        localStorage.clear();
    }
};

export default LocalStorageManager;