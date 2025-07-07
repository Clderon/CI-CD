const productsDAO = require("../dao/productsDAOForTest");

describe("productsDAO", () => {
  let mockConnection;
  let dao;

  beforeEach(() => {
    // Simulamos el método .query de MySQL
    mockConnection = {
      query: jest.fn(),
    };
    dao = new productsDAO(mockConnection);
  });

  test("list() debe retornar productos si no hay error", async () => {
    const fakeProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    // Simulamos respuesta exitosa
    mockConnection.query.mockImplementation((sql, callback) => {
      callback(null, fakeProducts);
    });

    const result = await dao.list();
    expect(result).toEqual(fakeProducts);
  });

  test("list(limit) debe usar límite si se pasa", async () => {
    const fakeProducts = [{ id: 1, name: "Limited Product" }];

    // Simulamos respuesta exitosa con límite
    mockConnection.query.mockImplementation((sql, limit, callback) => {
      callback(null, fakeProducts);
    });

    const result = await dao.list(1);
    expect(mockConnection.query).toHaveBeenCalledWith(
      "select * from products LIMIT ?",
      1,
      expect.any(Function)
    );
    expect(result).toEqual(fakeProducts);
  });

  test("list() debe rechazar si hay error", async () => {
    // Simulamos un error
    mockConnection.query.mockImplementation((sql, callback) => {
      callback(new Error("DB error"), null);
    });

    await expect(dao.list()).rejects.toThrow("DB error");
  });
});
