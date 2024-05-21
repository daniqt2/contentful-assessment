module.exports = function (migration) {
  const book = migration.editContentType("book");

  book.editField("status").validations([
    {
      in: ["Available", "On loan", "Reserved", "Out of Stock"],
    },
  ]);

  migration.transformEntries({
    contentType: "book",
    from: ["status"],
    to: ["status"],
    transformEntryForLocale: async (fromFields, currentLocale) => {
      if (fromFields.status[currentLocale] === "Sold") {
        return {
          status: "Out of Stock",
        };
      }
    },
  });

  book.createField("pages").name("Pages").type("Number").required(false);
};
