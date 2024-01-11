import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(10);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://fakestoreapi.com/users?limit=${page}`
      );
      const data = await response.json();
      console.log(data);

      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 10);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      /*
       *window.innerHeight: This is a property that returns the inner height of the browser window in pixels.
       *document.documentElement.scrollTop: This returns the number of pixels the document has already been
       *scrolled vertically (from the top).
       *document.documentElement.offsetHeight: This property returns the height of the entire document,
       *including any part of the document that is not currently visible due to scrolling.
       */
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  console.log(error);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        items.map((user) => (
          <div
            key={user?.id}
            style={{
              border: "1px solid black",
              padding: "20px",
              margin: "10px",
            }}
          >
            <div>{user?.email}</div>
            <div>{user?.username}</div>
            <div>{user?.name.firstname}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
