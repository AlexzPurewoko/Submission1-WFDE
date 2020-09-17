import Data from './data';
import {endpoint} from './apiLocation'; 

class DataImplement extends Data {
    get apiEndpoint {
        return endpoint;
    }
}