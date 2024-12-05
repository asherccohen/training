const { https, request } = require('./api');

describe('API call using Promises', () => {

  it('should load data using https', async () => {
    const data = await https();
    expect(data).toBeDefined();
    expect(data).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });

  it('should load data using request', async () => {
    const data = await request();
    expect(data).toBeDefined();
    expect(data).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});