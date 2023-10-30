/* eslint-disable */
// all.scripts: scripts that are used on all pages
// PAGENAME.scripts: scripts that are used on the associated page
// scripts accepts an array of strings that are script URLs to inject into the head of the page.
// PAGENAME.title accepts a string. The string is the title that will be displayed in the browser tab and
// will be displayed when shared on social media.
// title also accepts an array of strings. The first string is the title and the second will be
// displayed when shared on social media. If a 3rd string is provided the 3rd string will be
// displayed when shared on Twitter.
// PAGENAME.description accepts a string. The string is the description that will be displayed in the
// browser tab and will be displayed when shared on social media.
// description also accepts an array of strings. The first string is the description that will
// be displayed when shared on social media. If a 3rd string is provided the 3rd string will be
// displayed when shared on Twitter.
export const HeadTags = {
  all: {
    siteUrl: "https://www.speakupinbronchiectasis.com",
    scripts: [],
  },
  index: {
    scripts: [],
    title: ["Speak Up In Bronchiectasis | Educational Website", "Learn about bronchiectasis", "Learn about bronchiectasis at Speak Up In BE"],
    description: "Updates, education, and support for people living with bronchiectasis (BE). Sign up to receive information and resources from Speak Up In BE",
    image: ["/images/registration-page-og.png"],
  },
  survey: {
    title: ["Survey | Speak Up In Bronchiectasis", "Take a survey", "Take a survey"],
    description: [
      "Take our survey to tell us which bronchiectasis (BE) topics you’d like to know more about.",
      "Tell us which bronchiectasis (BE) topics you’d like to know more about.",
      "Tell us which bronchiectasis (BE) topics you’d like to know more about.",
    ],
    image: ["/images/registration-page-og.png"],
    slug: "survey",
  },
  pageNotFound: {
    title: ["Page Not Found | Speak Up In Bronchiectasis"],
    description: "",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
  internalServerError: {
    title: ["Internal Server Error | Speak Up In Bronchiectasis"],
    description: "",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
  unsubscribe: {
    title: ["Unsubscribe | Speak Up In Bronchiectasis", "Unsubscribe", "Unsubscribe"],
    description: "You can unsubscribe from updates and information about bronchiectasis (BE) from SpeakUpInBronchiectasis.com.",
    image: ["/images/registration-page-og.png"],
    slug: "unsubscribe",
  },
  siteMap: {
    title: ["Site Map | Speak Up In Bronchiectasis"],
    description: "Use the site map to navigate through the site and learn more about SpeakUpInBronchiectasis.com.",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
  accessibilityStatement: {
    title: ["Accessibility Statement | Speak Up In Bronchiectasis"],
    description: "",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
  unseenRituals: {
    title: ["Unseen Rituals in BE—Living with BE | Speak Up In Bronchiectasis", "See the unseen rituals of BE", "See the unseen rituals of BE"],
    description: [
      "Explore what real people are doing to live with and handle their bronchiectasis (BE) and add your unique habits to our community mural today.",
      "Explore what real people are doing to live with and handle their bronchiectasis (BE) and add your unique habits to our community mural today.",
      "Explore what real people are doing to live with and handle their bronchiectasis (BE) and add your unique habits to our community mural today.",
    ],
    image: ["/images/image-OG-mural-bronchiectasis-unseen-ritual-collage-2.png"],
    slug: "unseen-rituals",
  },
  JodiSeenPreview: {
    title: ["Jodi's Story Preview | Speak Up In Bronchiectasis"],
    description: "",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
  AmberSeenPreview: {
    title: ["Amber's Story Preview | Speak Up In Bronchiectasis"],
    description: "",
    image: ["/images/registration-page-og.png"],
    noIndex: true,
  },
};
