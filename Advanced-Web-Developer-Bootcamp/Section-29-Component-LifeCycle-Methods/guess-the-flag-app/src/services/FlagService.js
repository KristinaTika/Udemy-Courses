import { flagUrl } from "../shared/constants";
import { Country } from "../entites/Country";

class FlagService {

    fetchFlags() {
        
        return fetch(flagUrl)
            .then((response) => {
                return response.json()
            })
            .then((countries) => {
                return countries.map((d) => {
                    let flag = d.flag;
                    let name = d.name;
                    const myCountry = new Country(name, flag);
                    return myCountry;
                })
            })
    }
}

export const flagService = new FlagService();