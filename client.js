import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "3x14gyw8",
  dataset: "production",
  apiVersion: "2021-08-31", // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});