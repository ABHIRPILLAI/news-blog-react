// BlogCard.jsx

import React from 'react';

function BlogCard({ title, description, date, image, link }) {
    return (
        <div className="w-full min-w-[300px] max-w-[300px] md:max-w-[unset] md:min-w-[400px] min-h-[528px] h-full mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
                <a href={link}>
                    <img
                        className="rounded-t-lg"
                        src={image}
                        alt="Blog post cover"
                    />
                </a>
                <div className="p-5 min-h-[300px]  md:min-h-[263px]">
                    <a href={link}>
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                            {title} - {link}
                        </h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">
                        {description}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{date}</p>
                    <a
                     style={{
                        background: "linear-gradient(90deg, #013D83 0%, #b7c9da 100%)",
                      }}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        href={`/all-news?id=${link}`}
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
