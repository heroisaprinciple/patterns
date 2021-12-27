const csv = require('async-csv');
const fs = require('fs').promises;

//@abstractclass
class Pipeline {
    async read_data(){
        const csvString = await fs.readFile('playstation_4_games.csv', 'utf-8');
        const rows = await csv.parse(csvString);
        return rows;
    }
    async extract_features(){
        let data =  await this.read_data();
        return data[0];
    }
    async visualize_features(column){
        let data =  await this.read_data();
        let index =  data[0].indexOf(column);
        if(index != -1){
            data.forEach(e => {
                console.log(e[index]);
            })
        } else{
            throw new Error('column not found');
        }
    }
    //@abstractmethods
    proceed_request_2(...[args]){
        throw new Error('No implementation');
    }
    proceed_request_1(...[args]){
        throw new Error('No implementation');
    }
}

class GenreProccessor extends Pipeline{
    async proceed_request_1(...[args]) {
        let data =  await this.read_data();
        let index = data[0].indexOf('Genre');
        let ganres = {};
        await data.forEach(e => {
            let i = e[index];
            if(ganres[i]){
                ganres[i]++
            } else {
                ganres[i] = 1;
            }
        });
        delete ganres['Genre'];
        return ganres;
    }
}

class DeveloperProcessor extends Pipeline{
    async proceed_request_2(...[args]){
            let data =  await this.read_data();
            let index = data[0].indexOf('Developer');
            let ganres = {};
            await data.forEach(e => {
                let i = e[index];
                if(ganres[i]){
                    ganres[i]++
                } else {
                    ganres[i] = 1;
                }
            });
            delete ganres['Developer'];
            return ganres;
    }
}
// promises
(async() => {
    console.log(await new GenreProccessor().proceed_request_1());
    console.log(await new DeveloperProcessor().proceed_request_2());
})();