import React from 'react'
import PostHeader from './PostHeader';
import classes from './PostContent.module.css'
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
export default function PostContent(props) {
  const {post} =props
    const imagePath=`/images/posts/${post.slug}/${post.image}`;
    const customRenderers={


        paragraph(paragraph){
            const {node}=paragraph
            if(node.children[0].type==='image'){
                const image=node.children[0];

                return
                    <div>
                        <Image src={`/images/posts/${post.slug}/${image.src}`}  width={600} height={300} alt={image.alt}/>
                    </div>

            }
        }


    }
  return (
    <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath}/>
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
