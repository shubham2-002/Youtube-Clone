import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromapi";

const Feed = () => {
  const [selectedCateogry, SetselectedCateogry] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCateogry}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedCateogry]);
  // usefetchFromAPI(`search?part=snippet&q=${selectedCateogry}`).then((data)=>{
  //   setvideos(data.items)
  // })
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selctedcategory={selectedCateogry}
          Setselctedcategory={SetselectedCateogry}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ color: "#fff" }}
          mb={2}
        >
          {selectedCateogry} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
