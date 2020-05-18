import express from 'express';
import bodyParser from 'body-parser';
import { authorRouter } from '../../src/routers/author-router';
import * as authorService from '../../src/services/author-service';
import request from 'supertest';

/**Mock Service Layer */
jest.mock('../../src/services/author-service');
const mockAuthorService = authorService as any;

/**Test Express server & middleware */
const app = express();
app.use(bodyParser.json());
app.use('/authors', authorRouter);




/**Request fake http methods */
describe('GET: /authors',() => {
    //GET success test
    test('Returns normal app with status 200', async () => {
        mockAuthorService.getAllAuthors.mockImplementation( async () => []);//mockAuthorService returning Object
        
        await request(app)
            .get('/authors') //Send request
            .expect('content-type', 'application/json; charset=utf-8') // Expect in response content-type JSON
            .expect(200); //SendStatus(200)
    });

    //Expected server error test
    test('Returns 500 status from throw error', async () => {
        mockAuthorService.getAllAuthors.mockImplementation( async () => {throw new Error()});
        
        await request(app)
            .get('/authors')
            .expect(500);
    });
});
/*
describe('POST: /author', () => {
    //Post success test
    test('Successful create should return status 201', async () => {
        mockAuthorService.saveAuthor.mockImplementation(async () => ({}));
        const payload = {
            firstName: 'Test',
            lastName: 'Create',
            email: "new.create@email.com"
        };

        await request(app)
            .post('/authors')
            .send(payload)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(201);
    });

    //Expected server error test
    test('Returns 500 status from throw error', async () => {
        mockAuthorService.saveAuthor.mockImplementation(async () => {throw new Error()}); 
        const payload = {
            firstName: 'Test',
            lastName: 'Create',
            email: "new.create@email.com"
        };

        await request(app)
            .post('/authors')
            .send(payload)
            .expect(500);
    });
});

describe('GET: /authors/:id', () => {
    //Get success test
    test('Returns normal app with status 200', async () => {
        mockAuthorService.getAuthorById.mockImplementation( async () => ({}));

        await request(app)
            .get('/authors/1')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(200);
    });

    //Expected server error test
    test('Returns 404 status from throw error', async () => {
        mockAuthorService.getAuthorById.mockImplementation( async () => {0}); //insert value 0 as object
        
        await request(app)
            .get('/authors/1')
            .expect(404);
    });

    //Expected server error test
    test('Returns 500 status from throw error', async () => {
        mockAuthorService.getAuthorById.mockImplementation( async () => {throw new Error()});
        
        await request(app)
            .get('/authors/1')
            .expect(500);
    });
});
*/

/**
 * test GET /people/:id
// 1. Write test that asserts that normal behavior should return a JSON payload with status 200
// 2. Write test that asserts if no object is returned (service returns falsy) status 404
// 3. Write test that asserts if service throws error, status 500
 */

