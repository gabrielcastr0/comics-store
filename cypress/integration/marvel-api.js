/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const md5 = require("md5");

describe("Marvel Comics", () => {
  it("Resultado da busca dos hqs da Marvel", () => {
    const date = new Date();
    const timestamp = date.getTime();
    const publicKey = "3b8aff6e86f1f335d4bdbe20817641c6";
    const privateKey = "165fa408f0c01879664bb3f80983f958e6eb6ea2";
    const hash = md5(timestamp + privateKey + publicKey);

    cy.request(
      `/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    ).then((response) => {
      expect(response.body).to.have.property("code", 200);
    });
  });
});
