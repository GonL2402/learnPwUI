import { ApiHelper } from '../../_helpers/apiHelpers'
import { test, expect } from '@playwright/test'

test('GET todos list - 200 OK', async({ request }) => {
    //const apiRequest = new ApiHelper(request);

    const response = await ApiHelper.sendApiRequest('get', '/todos');
    const body = await response.json();
})

test('GET todo list and validation', async({ request }) => {

})

test('GET todo list with param', async({ request }) => {
    //const apiRequest = new ApiHelper(request);

    const response = await ApiHelper.sendApiRequest('get', '/todos/:id', {id: 7})
})

