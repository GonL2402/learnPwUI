import { APIRequestContext } from '@playwright/test'

export class ApiHelper {
    baseUrl : string = "https://apichallenges.eviltester.com";

    constructor(private request : APIRequestContext) {}

    static async sendApiRequest(
        method: 'get' | 'post' | 'put' | 'delete',
        url: string,
        pathParams?: Record<string, string | number | boolean>,
        queryParams?: Record<string, string | number | boolean>,
        data?: object,
        headers?: object
    ) {
        const options: any = {};
        let finalUrl = url;

        if (data) options.data = data;
        if (headers) options.headers = headers;
        if (pathParams) {
            for (const key in pathParams)
            {
                finalUrl = finalUrl.replace(`:${key}`, String(pathParams[key]));
            }
        } else {
            finalUrl = url;
        }
        if (queryParams) options.params = queryParams;

        console.log('--- API REQUEST ---');
        console.log('Method:', method.toUpperCase());
        console.log('URL:', this.baseUrl + finalUrl);
        console.log('Path Params:', pathParams);
        console.log('Query Params:', queryParams);
        console.log('Headers:', headers);
        console.log('Body:', data);

        const response = await this.request[method](this.baseUrl + finalUrl, options);

        const body = await response.json();

        console.log('\n--- BODY RESPONSE ---');
        console.log(JSON.stringify(body, null, 2));

        return response;
    }


}