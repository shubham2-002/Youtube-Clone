import { Box, Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromapi";
import ReactPlayer from "react-player";
import { Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { ChannelCard, ChannelDetail, Videos } from ".";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideosDetail] = useState(null);
  const [channelDetail, SetchannelDetail] = useState([null]);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetail(data?.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={"1"}>
          <Box sx={{ width: "95%", position: "sticky", top: "70px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" fontWeight={"bold"} color={"#fff"} p={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
            >
              <Link to={`channel/${channelId}`}>
                <Typography variant="h6" color="#fff" pl={2}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: 2 }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} alignItems="center" gap={"20px"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, justifyContent: "space-evenly" }}
                  pr={2}
                >
                  {parseInt(likeCount).toLocaleString()}{" "}
                  <ThumbUpOutlinedIcon sx={{ pl: "5px", fontSize: "20px" }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems={"center"}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
