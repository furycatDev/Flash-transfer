import { Grid, Typography } from "@mui/material";
import React from "react";
// import { useStyles } from "../../CssFile";
// import AppButton from "../AppButton";
import right from "../../assests/Images/blueright.png";
import right2 from "../../assests/Images/blueright2.png";
import "../../font.css/index.css";

import carve from "../../assests/Images/carve.png";

import { Box } from "@mui/system";

export interface data {
  text?: any;
  des?: string;
  imgright?: any;
  img?: any;
  text?: any;
  color?: any;
}
const Tabh = ({ des, text,color,img, imgright } : data) =>  {
  // const classes = useStyles();
  const tabs = [
    {
      img: carve,
      imgright: right,
      color: "black",
      text: "Reciver’s info",
      des: "Vitae sed mi luctus laoreet.",
    },
    {
      img: carve,
      imgright: right,
      color: "black",
      text: "Payment Method",
      des: "Cursus semper viverra.",
    },
    {
      img: carve,
      imgright: right,
      color: "black",

      text: "Review & Confirm",
      des: "Penatibus eu quis ante.",
    },
    {
      img: carve,
      imgright: right2,
      text: "reCeipt",
      color: "#4F46E5",
      des: "Penatibus eu quis ante.",
    },
  ];
  return (
    <Grid
      sx={{
        height: "80px",
        display: "flex",
        borderLeft: { lg: "none", xs: "2px solid blue" },
        marginLeft: { lg: "0px", xs: "10px" },
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: { lg: "flex", xs: "none" } }}>
          <img src={img} />
        </Box>
        <img src={imgright} style={{ margin: "15px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.7px !important",
              fontFamily: "Inter !important",
              fontSize: "12px !important",
              fontWeight: "600 !important",
              lineHeight: "16px !important",
            }}
          >
            {/* ads */}
            {text}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter !important",
              fontSize: "14px !important",
              fontWeight: "500 !important",
              lineHeight: "20px !important",
              color: "#6A6A6A" || color,
            }}
          >
            {des}
          </Typography>
          {/* <img src={i.img} style={{ margin: "15px" }} /> */}
        </Box>
      </Box>
    </Grid>
  );
};

export default Tabh;
