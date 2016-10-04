import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
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
        return {heroes};
    }
}
