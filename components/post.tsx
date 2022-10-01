import Image from 'next/image'
import Link from 'next/link'

type Props = {
  post: Record<string, any>
}

const Post = ({ post }: Props) => {
  return (
    <div className='p-4 rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.3)]'>
      <Image
        className='rounded-md'
        src={post.frontmatter.cover_image}
        width={120}
        height={100}
        layout='responsive'
        priority={true}
      />
      <div className=' mb-5 py-1 px-2 text-gray-400'>
        Posted on {post.frontmatter.date}
      </div>
      <h3 className='font-semibold text-orange-600'>{post.frontmatter.name}</h3>
      <p className='mb-2'>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className='inline bg-indigo-400 text-white   py-1 px-4 rounded-md cursor-pointer no-underline text-sm hover:shadow'>
          Read More
        </a>
      </Link>
    </div>
  )
}

export default Post
