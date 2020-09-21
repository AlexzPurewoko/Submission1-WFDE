import Data from './data';
import {endpoint} from './apiLocation'; 

export default class DataImplement extends Data {
    get apiEndpoint() {
        return endpoint;
    }
}