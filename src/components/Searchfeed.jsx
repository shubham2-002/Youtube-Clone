import { Typography } from "@mui/material";
import { Box,} from "@mui/system";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromapi";
import { useParams } from "react-router-dom";


const Searchfeed = () => {
 const {searchTerm} = useParams()
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setvideos(data.items);
    });
  }, [searchTerm]);
  // usefetchFromAPI(`search?part=snippet&q=${selectedCateogry}`).then((data)=>{
  //   setvideos(data.items)
  // })

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        sx={{ color: "#fff" }}
        mb={2}
      >
        Search Result for <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default Searchfeed;
