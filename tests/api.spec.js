const { test, expect } = require('@playwright/test');

var user_id;
test('Get Users', async ({request}) => {

    const reponse = await request.get('https://reqres.in/api/users/2')
    console.log(reponse);

    expect(reponse.status()).toBe(200)
}); 

test('Create Users', async ({request}) => {

    const reponse = await request.post('https://reqres.in/api/users',{
        data:{
            "name": "anucha",
            "job": "homeless"
        },
        headers:{"Accept":"Application/json"}
    });

    expect(reponse.status()).toBe(201)

    var res = await reponse.json()
    user_id = res.id
});

test('Update Users', async ({request}) => {

    const reponse = await request.put('https://reqres.in/api/users/'+user_id,{
        data:{
            "name": "lil terhua",
            "job": "leader"
        },
        headers:{"Accept":"Application/json"}
    });

    expect(reponse.status()).toBe(200)
}); 
test('Delete Users', async ({request}) => {

    const reponse = await request.delete('https://reqres.in/api/users/'+user_id);

    expect(reponse.status()).toBe(204)
}); 