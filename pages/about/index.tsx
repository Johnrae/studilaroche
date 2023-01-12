import { createClient } from '../../prismic/client'

export default function AboutPage({ data }: { data: any | null }) {
  console.log(data)
  return (
    <div>
      <h1>about</h1>
      <span></span>
    </div>
  )
}

export async function getStaticProps() {
  const client = createClient()
  const data = await client.getSingle('about_page')
  return {
    props: {
      data,
    },
  }
}
