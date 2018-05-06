import * as tools from '../authUtils';

const userLogin = {
    username: 'panupong',
    password: '123456789'
}

const userLoginError = {
    username: 'panuponasdasdg',
    password: '123456asdasdas789'
}

const userRegister = {
    "username": "adminTa",
	"email": "test@admin.com",
	"password": "123456789",
	"name": "adminTa",
	"phone": "53368843"
}

const userRegisterError = {
    "username": "",
	"email": "",
	"password": "",
	"name": "",
	"phone": ""
}

describe('Testing Auth utils', () => { 
    it('Should Login success with username', async () => {
        const url = 'http://localhost:3005/login';
        const res = await tools.requestToken(url ,userLogin);
        expect(typeof res.user).toBe('object');
        expect(typeof res.token).toBe('string');
        expect(res.success).toBe(true);
    })

    it('Should Login Error with username', async () => {
        const url = 'http://localhost:3005/login';
        const res = await tools.requestToken(url ,userLoginError);
        expect(res.success).toBe(false);
    }) 

    it('Should Register success ', async () => {
        const url = 'http://localhost:3005/register';
        const res = await tools.requestToken(url ,userRegister);
        expect(typeof res.user).toBe('object');
        expect(typeof res.token).toBe('string');
        expect(res.success).toBe(true);
    })

    it('Should Register Error ', async () => {
        const url = 'http://localhost:3005/register';
        const res = await tools.requestToken(url ,userRegisterError);
        expect(res.success).toBe(false);
    })
});