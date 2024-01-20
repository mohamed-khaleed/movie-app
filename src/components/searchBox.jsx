


function SearchBox({searchQuery,setSearchQuery,setMovies}) {
  //  const apiKey="bebea00a770e7201f372567aaed2893a"
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery};`
  //     )
  //     .then((res) => {
  //       if (searchQuery) {
  //         console.log("bye")
  //         console.log(searchQuery)
  //         // setMovies(res.data.page.results);
  //         console.log(res.data.results)
          
  //       }
       
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [searchQuery,setMovies]);

  // const handleSearch =function(){
  //   console.log("hi")
  //   console.log(searchQuery)
    
  // }
  
  
  return (
    <div className=" search-box p-5 mb-4   bg-main-color">

      <h2 className="secondary-color fw-medium h1 text-capitalize">welcome to our movie app</h2>
      <p className="secondary-color">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, totam?
      </p>
      <div className="search-box-info  "> 
        <div className="row  justify-content-between">
          <div className="col-9">
            <input
              type="text"
              className="form-control bg-secondary-color "
              placeholder="enter a movie title"
              aria-label="enter a movie title"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-3 ">
          <button  className=" bg-secondary-color main-color  search-btn">search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
