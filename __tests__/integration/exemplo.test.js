/* eslint-disable no-undef */

import request from 'supertest';
import app from '../../src/app';
import factory from '../factories';


describe('Exemplo', () => {
	it('Deve cadastrar', async () => {
		const exemplo = await factory.attrs('Exemplo');

		const response = await request(app)
			.post('/exemplos')
			.send(exemplo);

		expect(response.body).toHaveProperty('id');
	});

	it('Deve listar', async () => {
		const response = await request(app).get('/exemplos');
		expect(response.body[0]).toHaveProperty('id');
	});

	it('Deve exibir', async () => {
		const response = await request(app).get('/exemplos/1');
		expect(response.body).toHaveProperty('id');
	});

	it('Deve atualizar', async () => {
		const exemplo = await factory.attrs('Exemplo');
		
		const response = await request(app)
			.put('/exemplos/1')
			.send(exemplo);

		expect(response.body).toHaveProperty('id');
	});

	it('Deve remover', async () => {
		
		const response = await request(app).delete('/exemplos/1');
		expect(response.status).toBe(200);
	});
});
