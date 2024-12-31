import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "zjsm6jfa",
  dataset: "production",
  apiVersion: '2022-03-07',
  useCdn: true,
});
