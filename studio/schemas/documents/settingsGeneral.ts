export default {
  title: "General Settings",
  name: "settingsGeneral",
  type: "document",
  fields: [
    {
      title: "Canonical URL",
      description: "The root domain or subdomain of your website.",
      name: "canonicalUrl",
      type: "url",
    },
    {
      title: "Contact Email",
      name: "contactEmail",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
          {
            name: "email",
            invert: false,
          }
        ),
    },
    {
      title: "Social Media Profiles",
      name: "socialProfiles",
      type: "array",
      of: [{ type: "socialProfile" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "General Settings",
      };
    },
  },
};
