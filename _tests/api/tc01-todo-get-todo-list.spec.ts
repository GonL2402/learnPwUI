import {test, expect} from '@playwright/test'

test('GET todo list', async({ request }) => {
    const response = await request.get('https://apichallenges.eviltester.com/todos');

    const bodyResponse = await response.json();

    console.log(JSON.stringify(bodyResponse, null, 2));
})

test('GET todo list and validation', async({ request }) => {
    const response = await request.get('https://apichallenges.eviltester.com/todos');
    const bodyResponse = await response.json();
    console.log(JSON.stringify(bodyResponse, null, 2));

    expect(response.status()).toBe(200);

    expect(bodyResponse.todos[0].doneStatus).toBe(false);

    expect(bodyResponse.todos[0].id).toBe(7);
})

test('GET todo - not found', async({ request }) => {
    const respone = await request.get('https://apichallenges.eviltester.com/todo');

    expect(respone.status()).toBe(404);
})

test('GET todo/{id} - successfully', async({ request }) => {
    const response = await request.get('https://apichallenges.eviltester.com/todos/7');
    const bodyResponse = await response.json();

    expect(response.status()).toBe(200);
    expect(bodyResponse.todos[0].id).toBe(7);
    expect(bodyResponse.todos[0].title).toBe('train staff');
    expect(bodyResponse.todos[0].doneStatus).toBe(false);
})

test('GET todo/{id} - not found', async({ request }) => {
    const response = await request.get('https://apichallenges.eviltester.com/todos/100');

    expect(response.status()).toBe(404);
})

test('GET todos?doneStatus={filter}', async({ request }) => {
    const response = await request.get('https://apichallenges.eviltester.com/todos?doneStatus=false');

    expect(response.status()).toBe(200);
})