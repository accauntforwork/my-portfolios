import React, { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import data from "./data.json";
import Loading from "./components/Loading";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [filteredData, setFilteredData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleButtonClick = (buttonText) => {
    switch (buttonText) {
      case "Top":
        setFilteredData(data.filter((item) => item.top));
        break;
      case "Newest":
        setFilteredData(data.filter((item) => item.newest));
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex gap-4 flex-wrap">
            <button onClick={() => handleButtonClick("Top")}>
              <Button text="Top" />
            </button>
            <button onClick={() => handleButtonClick("Newest")}>
              <Button text="Newest" />
            </button>
            <button onClick={() => handleButtonClick("Reset")}>
              <Button text="Reset" />
            </button>
          </div>
          <hr className="h-1 mx-auto my-4 bg-blue-500 border-0"></hr>
          <div>
            <div className="flex gap-4 justify-center mb-5">
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
                  newest={el.newest}
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
      )}
    </div>
  );
}
export default App;
