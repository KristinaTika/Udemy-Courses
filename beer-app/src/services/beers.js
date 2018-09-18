import axios from 'axios';
import { beerEndpoint, beersEndpoint } from '../constants.js/constants';
import { Beer } from '../entities/Beer';
import { PunkBeer } from '../entities/PunkBeer';

class BeerService {

    fetchBeers() {
        return axios.get(beerEndpoint)
            .then((res) => {
                const results = res.data;
                return results.map((res) => {
                    return new Beer(res.id, res.brewery_type, res.city, res.country, res.latitude, res.longitude, res.name, res.phone, res.postal_code, res.state, res.street, res.website_url );
                });
            });
    }

    fetchPunkBeers() {
        return axios.get(beersEndpoint)
            .then((res) => {
                const results = res.data;
                return results.map((res) => {
                    const id = res.id;
                    const abv = res.abv;
                    const boilVolume = `${res.boil_volume.value} ${res.boil_volume.unit}`;
                    const type = res.brewers_tips;
                    const contributedBy = res.contributed_by;
                    const description = res.description;
                    const firstBrewed = res.firstBrewed;
                    const foodPairing = res.food_pairing;
                    const image = res.image_url;
                    const name = res.name;
                    const ph = res.ph;const srm = res.srm;
                    const tagline = res.tagline;
                    const volume = `${res.volume.value}${res.volume.unit}`;

                    const myPunkBeer = new PunkBeer(id, abv, boilVolume, type, contributedBy, description, firstBrewed, foodPairing, image, name, ph, tagline, volume);
                    return myPunkBeer;
                    
                }); 
            });
    }
}

export const beerService = new BeerService();