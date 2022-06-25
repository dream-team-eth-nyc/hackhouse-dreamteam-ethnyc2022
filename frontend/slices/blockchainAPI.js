import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blockchainApi = createApi({
  name: "blockchainApi",
  baseQuery: fetchBaseQuery({
    url: "https://api.blockchain.info/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept: application/json");
      headers.set("Content-Type", "application/json");
      return headers
    },
  }),
  // tagTypes: ["blockchain"],
  endpoints: (builders) => ({
    // insert api calls here as needed
    getBlock: (blockHash) =>
      builders.get("https://api.blockchain.info/v2/rawblock/" + blockHash),
  }),
});
    
export const {
  //queries and mutations
} = blockchainApi;