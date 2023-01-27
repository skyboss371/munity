import React from 'react'

export const Article = (props) => {

  return (
    <>
    {/* // <!-- Column --> */}
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            {/* <!-- Article --> */}
            <article className="rounded-lg shadow-lg">
                <a href="#">
                <img alt="Placeholder" class="rounded-md block h-auto w-full" src={props.article.image}/>
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {props.article.title}
                        </a>
                    </h1>
                 
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p className="ml-2 text-sm">
                            {props.article.author}
                        </p>
                 
                    </a>
                    <p className="text-grey-darker text-sm ml-auto">
                        {props.article.date}
                    </p>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
            {/* <!-- END Article --> */}
        </div>
        {/* <!-- END Column --> */}
    </>
  )
}
