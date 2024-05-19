import { MigrationFunction } from "contentful-migration";
// "magazine-migration": "node_modules/.bin/ts-node node_modules/.bin/contentful-migration --config config/config.json migrations/01-create-magazine.migration.ts --yes"

const options = {
  environmentId: "master",
  host: "api.contentful.com",
  managementToken: "CFPAT-plWiWydZvghez65Q8BREMxj3P04T_dhHVi88gGfJPE4",
  spaceId: "938kmtss42zo",
};
const migration: MigrationFunction = (migration, options) => {
  // Create Magazine content type
  const magazine = migration
    .createContentType("magazine")
    .name("Magazine")
    .description("A magazine content type");

  // Define fields for Magazine content type
  magazine
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true)
    .localized(true)
    .validations([{ unique: true }]);

  magazine
    .createField("authors")
    .name("Authors")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["author"] }],
    })
    .required(true);

  magazine
    .createField("categories")
    .name("Categories")
    .type("Array")
    .items({
      type: "Link",
      linkType: "Entry",
      validations: [{ linkContentType: ["category"] }],
    })
    .required(true);

  magazine
    .createField("publicationDate")
    .name("Publication Date")
    .type("Date")
    .required(true);

  magazine.createField("content").name("Content").type("Text").localized(true);

  migration.transformEntries({
    contentType: "magazine",
    from: [],
    to: [],
    shouldPublish: true,
    transformEntryForLocale: (entry, api) => {
      
      const fields = {
        title: {
          "en-US": "Super magazine vol 1",
        },
        authors: {
          "en-US": [
            {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: "3hrk7dl0Yet0cpL3uuLNgu",
              },
            },
          ],
        },
        categories: {
          "en-US": [
            {
              sys: {
                type: "Link",
                linkType: "Entry",
                id: "73uO681GQuu7jCfFiwP4oi",
              },
            },
          ],
        },
        publicationDate: {
          "en-US": "2024-05-12T00:00:00Z",
        },
        content: {
          "en-US": "Shalala shalaluu luluuuu",
        },
      };

      return {
        fields,
      };
    },
  });
};

module.exports = migration;
