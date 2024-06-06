import React from "react";
function QuotesCard(props) {
  const { quote, author, id } = props.quote;
  console.log(quote);
  return (
    <figure
      className="max-w-screen-md mx-auto h-[100%] flex flex-col justify-center items-center"
      key={id}
    >
      <svg
        className="w-10 h-10 mb-3 text-red-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p className="text-2xl italic font-medium px-4">{quote}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
          <cite className="pe-3 font-medium">{author}</cite>
        </div>
      </figcaption>
    </figure>
  );
}

export default QuotesCard;
