"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Pegasus' },
            { id: 2, name: 'Taurus' },
            { id: 3, name: 'Cerberus' },
            { id: 4, name: 'Hades' },
            { id: 5, name: 'Andromeda' },
            { id: 6, name: 'Apollo' },
            { id: 7, name: 'Odin' },
            { id: 8, name: 'Gemini' },
            { id: 9, name: 'Sagittarius' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map