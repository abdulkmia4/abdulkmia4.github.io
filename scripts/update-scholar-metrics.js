const fs = require("fs");

const API_KEY = process.env.SERPAPI_KEY;
const AUTHOR_ID = "LmleHyEAAAAJ";

if (!API_KEY) {
  console.error("ERROR: SERPAPI_KEY is not set.");
  process.exit(1);
}

const API_URL =
  "https://serpapi.com/search.json" +
  `?engine=google_scholar_author` +
  `&author_id=${AUTHOR_ID}` +
  `&hl=en` +
  `&api_key=${encodeURIComponent(API_KEY)}`;

async function main() {
  console.log("Fetching Google Scholar metrics through SerpApi...");

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `SerpApi returned HTTP ${response.status}`
    );
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(data.error);
  }

  const table = data.cited_by?.table;

  if (!table) {
    throw new Error(
      "Google Scholar metrics were not found in the SerpApi response."
    );
  }

  const citations =
    table.find((item) => item.citations)?.citations?.all ?? null;

  const hIndex =
    table.find((item) => item.h_index)?.h_index?.all ?? null;

  const i10Index =
    table.find((item) => item.i10_index)?.i10_index?.all ?? null;

  console.log("Citations:", citations);
  console.log("h-index:", hIndex);
  console.log("i10-index:", i10Index);

  if (
    citations === null ||
    hIndex === null ||
    i10Index === null
  ) {
    throw new Error(
      "One or more Scholar metrics could not be retrieved."
    );
  }

  const result = {
    citations,
    hIndex,
    i10Index,
    updated: new Date().toISOString()
  };

  fs.writeFileSync(
    "public/scholar-metrics.json",
    JSON.stringify(result, null, 2),
    "utf8"
  );

  console.log("");
  console.log("scholar-metrics.json updated successfully.");
}

main().catch((error) => {
  console.error("");
  console.error("ERROR:", error.message);
  process.exit(1);
});
