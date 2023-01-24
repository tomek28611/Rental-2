import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../utils/sanity.client';
import urlFor from '../../../../utils/urlFor';
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from '../../../../components/RichTextComponents';
import order from '../../../../components/Order'


type Props = {
    params: {
        slug: string;
    }
}

async function Post({params: {slug}}: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->,
        
    }
    `

    const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28'>
        <section className='space-x-2 border border-orange-500 text-white'>
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                <div className='absolute top-0 w-full opacity-10 blur-sm p-10'>
                    <Image
                        className='object-cover object-center mx-auto'
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
                <section className='p-5 bg-orange-400 w-full'>
                    <div className="flex flex-row md:flex-row justify-between gap-y-5">
                        <div className="">
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p>
                                {new Date(post._createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}

                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                className='founded-full'
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={40}
                                width={40}
                                />
                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                    <div>

                                    </div>
                                </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='italic pt-10'>{post.description}</h2>
                        <div className='flex items-center justify-end mt-auto space-x-2'>
                            {post.categories.map((category) => (
                                <p 
                                key={category._id}
                                className="bg-gray-800 text-white px-3 py-1 rounded-full
                                text-sm font-semibold mt-4">
                                    {category.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="">
                 
                </div>
            </div>
        </section>
   

        <PortableText  value={post.body} components={RichTextComponents} />

        {/* FORM */}
        <div>
        <hr className="border-orange-600 mb-10" />
           <h1 className="text-center font-bold sm:text-2xl md:text-4xl">ORDER YOUR MOTOTBIKE</h1>
           
        <form  action="">
          <label className="block mb-6">
            <span className="text-gray-700">Your name</span>
            <input
              name="name"
              type="text"
              className="
            block
            w-full          
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Full Name"
              required
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="joe@example.com"
              required
            />

            <label className="block mb-6 mt-4">
              <span className="text-gray-700">Phone number</span>
              <input
                name="phone"
                type="text"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="+66 123 456" required
              />
            </label>


          </label>
          <label className="block mb-6">
            <span className="text-gray-700">When you want rent bike?</span>
            <input
              name="day"
              type="date"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700">How many days /min. 3 days/</span>
            <input
              name="days"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="Days" required
            />
          </label>


          <label className="block mb-6">
            <span className="text-gray-700"
            >Chose model you would like to rent ?</span
            >
            <select
              name="model"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          " required
            >
              <option>New Yamaha Airmax</option>
              <option>New Honda PCX </option>
              <option>New Honda Click 160 </option>
              <option>New Honda ADV </option>
              <option>New Yamaha XMAX</option>
              <option>New Harley Davidson</option>
            </select>
          </label>
          <div className="mb-6">
            <div className="mt-2">
              <div>
              
              </div>
              <div>
               
              </div>
            </div>
          </div>
          <div className="mb-6">
           

            <button className='mt-8 bg-slate-400 text-black hover:bg-black/50 hover:text-white'>Reserve Motorbike</button>
          </div>
          <div>

          </div>
          <hr className="border-orange-600 mb-10" />
        </form>

           
           
        </div>
    </article>
  )
}

export default Post;