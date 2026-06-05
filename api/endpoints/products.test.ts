const BASE_URL = 'https://fakestoreapi.com';

describe('API Produits', () => {

  test('GET /products — retourne la liste des produits', async () => {
    const response = await fetch(`${BASE_URL}/products`);
    expect(response.status).toBe(200);
    
    const data = (await response.json()) as unknown[];
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('GET /products/:id — retourne un produit', async () => {
    const response = await fetch(`${BASE_URL}/products/1`);
    expect(response.status).toBe(200);
    
    const data = (await response.json()) as Record<string, unknown>;
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('title');
    expect(data).toHaveProperty('price');
  });

  test('POST /products — créer un produit', async () => {
    const newProduct = {
      title: 'Test Product',
      price: 29.99,
      description: 'Un produit de test',
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/test.jpg'
    };

    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    });
    expect([200, 201]).toContain(response.status);
    
    const data = (await response.json()) as Record<string, unknown>;
    expect(data).toHaveProperty('id');
  });

});