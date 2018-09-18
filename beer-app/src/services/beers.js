import axios from 'axios';
import { beersEndpoint } from '../constants.js/constants';
import { PunkBeer } from '../entities/PunkBeer';

class BeerService {

    fetchPunkBeers() {
        return axios.get(beersEndpoint)
            .then((res) => {
                const results = res.data;
                return results.map((res) => {
                    const id = res.id;
                    const abv = res.abv;
                    const type = res.brewers_tips;
                    const contributedBy = res.contributed_by;
                    const description = res.description;
                    const firstBrewed = res.firstBrewed;
                    const foodPairing = res.food_pairing;
                    const image = res.image_url;
                    const name = res.name;
                    const ph = res.ph;
                    const tagline = res.tagline;
                    const hops = {
                        name: mapIngredients(res.ingredients.hops),
                    }
                    const malt = {
                        name: mapIngredients(res.ingredients.malt),
                    }
                    const yeast = res.ingredients.yeast;
                    const ingredients = {
                        hops,
                        malt,
                        yeast
                    }
                    const myPunkBeer = new PunkBeer(id, abv, type, contributedBy, description, firstBrewed, foodPairing, image, name, ph, tagline, ingredients);
                    return myPunkBeer;
                });
            });
    }
}

const mapIngredients = (names) => {
    return names.map(n => n.name)
}

export const beerService = new BeerService();