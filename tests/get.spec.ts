import {test, expect} from '@playwright/test';      
const baseURL = 'https://jsonplaceholder.typicode.com';
test ('Get- get apost', async({request})=>{
const response = await request.get(`${baseURL}/users`);
const body= await response.json();
console.log(body);
expect(response.status()).toBe(200);
expect(body.email).toBe('sincre@april.biz');
});