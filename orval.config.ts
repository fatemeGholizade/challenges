import { defineConfig } from "orval";

export default defineConfig({
  arad_web_panel: {
    output: {
      mode: "split",
      target: "src/services/api/endpoints/aradRestApi.ts",
      schemas: "src/services/api/model",
      mock: false,
      override: {
        mutator: {
          path: "src/services/axios.ts",
          name: "axios",
        },
      },
    },
    input: {
      target: "src/services/api.yaml",
    },
  },
});
