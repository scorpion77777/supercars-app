import Commerce from "@chec/commerce.js";

let commerce = null;

function getCommerce(commercePublicKey) {
  if (commerce) {
    return commerce;
  } else {
    const publicKey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
    const devEnviroment = process.env.Node_ENV === "development";

    if (devEnviroment && !publicKey) {
      throw Error("Commerce public key is required in development mode");
    }
    commerce = new Commerce(publicKey, devEnviroment);
    return commerce;
  }
}
export default getCommerce;
