import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const fetchEntries = async (contentType) => {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
    });
    return entries.items;
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
};
