import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = SanityClient({
  projectId: 'ihdlzz1g',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
})

const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
export default client

// https://deliverooapi.sanity.studio/
// react-native-svg - expected version: 12.3.0 - actual version installed: 9.13.3
