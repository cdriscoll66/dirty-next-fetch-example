import { fetchAPI } from "../../lib/api"


const Post = ({ post }) => {
    return (
        <div>Hi I'm here!</div>    )
}

export async function getStaticPaths() {
    const posts = await fetchAPI("/posts")
    return {
      paths: posts.map((post) => ({
        params: {
          slug: post.slug,
        },
      })),
      fallback: false,
    }
  }

  export async function getStaticProps({ params }) {
    const posts = await fetchAPI(`/posts?slug=${params.slug}`)
  
    return {
      props: { post: posts[0] },
      revalidate: 1,
    }
}