## Before starting

This is not a template repository for the assestment. Here you will only find the tasks to be carried out and a couple of instructions. Read them carefully

1. Create an empty [Contentful](https://www.contentful.com/) space
    1. Get [Space Id](https://www.contentful.com/help/find-space-id/)
    2. Generate a [Contentful Management Token](https://www.contentful.com/help/personal-access-tokens/#what-is-the-cma-tokens-admin-view) (CMA)
2. Paste the **Space Id** and **CMA Token** at `config/import.json` file.
3. Execute `npm install` and then `npm run import`
4. You should now have your space configured with 3 content types, 2 locales and several entries.
```jsx
// Book Content Type
{
	title: { type: 'Symbol', required: true, localized: true },
	authors: { type: 'Array', required: true },
	status: { type: 'Symbol' },
	categories: { type: 'Array', required: true },
	description: { type: 'RichText', localized: true }
}
// Category Content Type
{
	name: { type: 'Symbol', required: true, localized: true },
	description: { type: 'Text', localized: true }
}
// Author Content Type
{
	name: { type: 'Symbol', required: true, unique: true },
	nationality: { type: 'Symbol', localized: true },
	biography: { type: 'Text', localized: true }
}


// Locale 1
{
	"name": "English (United States)",
    "code": "en-US",
}
// Locale 2
{
    "name": "Spanish",
    "code": "es",
}
```
⚠️ The code must be pushed to the following [Gitlab]() organisation. Don't forget to use git!

## Task 1 - Creating a Content Type

Develop a script using the [contentful-migration](https://github.com/contentful/contentful-migration) library. The script should be able to:
- Create a new Content Type with the following fields:
```
Magazine (id: magazine)
    - Title (id: title): Short Text - Required, unique, localized.
    - Authors (id: authors): References (author) - Required.
    - Categories (id: categories): References (category) - Required.
    - Publication date (id: publicationDate): Date - Required.
    - Content (id: content): Long Text - Localized.
```
- Create an entry of the Content Type Magazine, adding values to all fields.

## Task 2 - Modifying a Content Type

- Develop a script using the [contentful-migration](https://github.com/contentful/contentful-migration) library. The script should be able to:
    - Modify the already created **Book** content type as follows:
        - Remove `Sold` as one of the validation values for the `status` field and migrate the content with `Sold` value to `Out of Stock`.
        - Add field `Pages`: Type `Number`.

## Task 3 - Contentful GitLab CI/CD

- Use GitLab CI/CD to implement a basic pipeline that performs the build and execution of the scripts from Task 1 and Task 2 iteratively.

## Task 4 - VueJS

- Develop a Vue component that displays the entries retrieved from Contentful using the Contentful API.
- The component should be able to receive the data and render it properly in the user interface.
- Integrate the component into a simple of a Vue application.
- Develop some Unit Testing for the Vue component (Bonus Task)

## Task 5 - VueJS GitLab CI/CD

- Use GitLab CI/CD to implement a basic pipeline that performs the build and deployment of a Vue application.