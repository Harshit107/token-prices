import fetch from "node-fetch";
import { pick } from "ramda";

const TOKENS = [
  "meta-token.near",
  "token.v2.ref-finance.near",
  "token.burrow.near",
];

const fetchPrices = async () => {
  const response = await fetch("https://indexer.ref.finance/list-token-price");
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

const main = async () => {
  try {
    const prices = await fetchPrices();
    const selectedPrices = pick(TOKENS, prices);
    console.info(JSON.stringify(selectedPrices, null, 2));
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();
