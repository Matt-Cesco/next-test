import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: "3x14gyw8",
  dataset: "production",
  apiVersion: "2022-11-13",
  useCdn: true,
});