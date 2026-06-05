const BASE_URL = 'https://dummyjson.com';

describe('API Produits', () => {

  test('GET /products — retourne la liste des produits', async () => {
    const response = await fetch(`${BASE_URL}/products`);
    expect(response.status).toBe(200);
    const data = (await response.json()) as Record<string, unknown>;
    expect(Array.isArray((data as any).products)).toBe(true);
    expect(((data as any).products as unknown[]).length).toBeGreaterThan(0);
  });

  test('GET /products/:id — retourne un produit', async () => {
    const response = await fetch(`${BASE_URL}/products/1`);
    expect(response.status).toBe(200);
    const data = (await response.json()) as Record<string, unknown>;
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('price');
  });

  test('POST /products/add — créer un produit', async () => {
    const response = await fetch(`${BASE_URL}/products/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Test Product', price: 29.99 })
    });
    expect([200, 201]).toContain(response.status);
    const data = (await response.json()) as Record<string, unknown>;
    expect(data).toHaveProperty('id');
  });

});
