// data from prismic.io returns the image src as an absolute url, so no need to set up the full url on loader....
export const prismicLoader = ({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
