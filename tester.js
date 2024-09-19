const {
  createStoreClient,
  createShopifyRecommendationClient,
} = require("@reconvert/microservice-clients");

const msConfig = {
  env: "development",
  platform: "shopify",
};

const storeClient = createStoreClient(msConfig, console);
// const shopifyRecommendationClient = createShopifyRecommendationClient(msConfig, console);

test();

async function test() {
  try {
    const response = storeClient.getProduct();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
