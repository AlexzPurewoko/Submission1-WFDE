class Data {
    constructor() {

    }

    get apiEndpoint() {
        throw new Error('Not implemented! please implement apiEndpoint');
    }

    async getData(success, failed) {
        try {
            const request = await fetch(this.apiEndpoint);
            const json = await request.json();
            success(json)
        } catch (error) {
            failed(error)
        }
    }
}

export default Data;