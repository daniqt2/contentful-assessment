const migration = (migration) => {
  const magazine = migration
    .createContentType("magazine")
    .name("Magazine")
    .description("A magazine content type");

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
};

module.exports = migration;
