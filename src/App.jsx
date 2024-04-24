import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import data from "./data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleButtonClick = (buttonText) => {
    switch (buttonText) {
      case "Top":
        setFilteredData(data.filter((item) => item.top));
        break;
      case "A-to-Z":
        setFilteredData(
          data.sort((a, b) => a.projectName.localeCompare(b.projectName))
        );
        break;
      case "Z-to-A":
        setFilteredData(
          data.sort((a, b) => b.projectName.localeCompare(a.projectName))
        );
        console.log(filteredData);
        break;
      case "Reset":
        setFilteredData(data);
        break;
      default:
        console.warn("Unhandled button text:", buttonText);
    }
    setCurrentPage(1);
  };

  const handleFilterBySearch = () => {
    if (searchText) {
      const filteredBySearch = data.filter((item) =>
        item.projectName.toLowerCase().includes(searchText)
      );
      setFilteredData(filteredBySearch);
    } else {
      setFilteredData(data);
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 flex-wrap">
        <button onClick={() => handleButtonClick("Top")}>
          <Button text="Top" />
        </button>
        <button onClick={() => handleButtonClick("A-to-Z")}>
          <Button text="A-to-Z &#8595;" />
        </button>
        <button onClick={() => handleButtonClick("Z-to-A")}>
          <Button text="Z-to-A &#8593;" />
        </button>
        <button onClick={() => handleButtonClick("Reset")}>
          <Button text="Reset" />
        </button>
      </div>
      <hr className="h-1 mx-auto my-4 bg-blue-500 border-0"></hr>
      <div>
        <div className="flex gap-4 justify-center">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchText}
            onChange={handleSearchChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={handleFilterBySearch}
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
          >
            Search
          </button>
          <button
            onClick={() => handleButtonClick("Reset")}
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {currentData.map((el, index) => (
            <Card
              key={index}
              top={el.top}
              projectName={el.projectName}
              imgLink={el.imgLink}
              githubLink={el.githubLink}
              liveLink={el.liveLink}
              technologies={el.technologies}
            />
          ))}
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div id="pagination" className="flex justify-center">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-2 py-1 mx-1 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
export default App;

// import React, { useState, useEffect } from "react";
// import Card from "./components/Card";
// import Button from "./components/Button";
// import data from "./data.json";

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3;
//   const [filteredData, setFilteredData] = useState(data); // Initially empty
//   const [isLoading, setIsLoading] = useState(true); // Flag for loading state
//   const [searchText, setSearchText] = useState("");

//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value.toLowerCase());
//   };

//   const handleButtonClick = (buttonText) => {
//     setIsLoading(true); // Set loading state on button click
//     switch (buttonText) {
//       case "Top":
//         setFilteredData(data.filter((item) => item.top));
//         break;
//       case "A-to-Z":
//         setFilteredData(
//           data.sort((a, b) => a.projectName.localeCompare(b.projectName))
//         );
//         break;
//       case "Z-to-A":
//         setFilteredData(
//           data.sort((a, b) => b.projectName.localeCompare(a.projectName))
//         );
//         break;
//       case "Reset":
//         setFilteredData(data);
//         break;
//       default:
//         console.warn("Unhandled button text:", buttonText);
//     }
//     setCurrentPage(1);
//   };

//   const handleFilterBySearch = () => {
//     setIsLoading(true); // Set loading state on search
//     if (searchText) {
//       const filteredBySearch = data.filter((item) =>
//         item.projectName.toLowerCase().includes(searchText)
//       );
//       setFilteredData(filteredBySearch);
//     } else {
//       setFilteredData(data);
//     }
//     setCurrentPage(1);
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsLoading(false); // Simulate data fetching delay after 3 seconds
//     }, 3000);

//     return () => clearTimeout(timeout); // Cleanup function to prevent memory leaks
//   }, [filteredData, searchText]); // Re-run on data or search text change

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex gap-4 flex-wrap">
//         <button onClick={() => handleButtonClick("Top")}>
//           <Button text="Top" />
//         </button>
//         <button onClick={() => handleButtonClick("A-to-Z")}>
//           <Button text="A-to-Z &#8595;" />
//         </button>
//         <button onClick={() => handleButtonClick("Z-to-A")}>
//           <Button text="Z-to-A &#8593;" />
//         </button>
//         <button onClick={() => handleButtonClick("Reset")}>
//           <Button text="Reset" />
//         </button>
//       </div>
//       <hr className="h-1 mx-auto my-4 bg-blue-500 border-0"></hr>
//       <div>
//         <div className="flex gap-4 justify-center">
//           <input
//             type="text"
//             placeholder="Search projects..."
//             value={searchText}
//             onChange={handleSearchChange}
//             className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
//           />
//           <button
//             onClick={handleFilterBySearch}
//             className="bg-blue-500 text-white px-3 py-1 rounded-md"
//           >
//             Search
//           </button>
//           <button
//             onClick={() => handleButtonClick("Reset")}
//             className="bg-blue-500 text-white px-3 py-1 rounded-md"
//           >
//             Reset
//           </button>
//         </div>

//         {
//           <div className="flex flex-wrap gap-4 justify-center">
//             {currentData.map((el, index) => (
//               <div className={`${isLoading && "skeleton"}`}>
//                 {!isLoading && (
//                   <Card
//                     key={index}
//                     top={el.top}
//                     projectName={el.projectName}
//                     imgLink={el.imgLink}
//                     githubLink={el.githubLink}
//                     liveLink={el.liveLink}
//                     technologies={el.technologies}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         }
//       </div>
//       <hr className="w-48 h-1 mx-auto my-4 bg-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
//       <div id="pagination" className="flex justify-center">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={`px-2 py-1 mx-1 rounded-md ${
//               currentPage === index + 1 ? "bg-blue-500 text-white" : ""
//             }`}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
