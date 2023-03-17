import { height, Stack } from "@mui/system";
import { categories } from "../utils/constants";
import React, { useState } from "react";

const Sidebar = ({selctedcategory,Setselctedcategory}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, key) => (
        <button
          className="category-btn"
          key={key}
          style={{
            background: category.name === selctedcategory && "#Fc1503",
            color: "#fff",
          }}
          onClick={()=>Setselctedcategory(category.name)}
        >
          <span
            style={{
              color: category.name === selctedcategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
