import React from "react";
import { createIcon } from "@chakra-ui/react";

export default createIcon({
  displayName: "PlugIcon",
  viewBox: "0 0 100 100",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: <path d="M76.667 10H23.333C16 10 10 16 10 23.333V90H16.667V23.333C16.667 19.656 19.657 16.666 23.334 16.666H76.667C80.342 16.666 83.333 19.656 83.333 23.333V76.666C83.333 80.341 80.342 83.332 76.667 83.332H33.333C31.496 83.333 30 81.839 30 80L29.995 75.41C30.033 75.107 30.299 74.46 30.404 74.309L39.93 64.785C45.039 67.793 51.706 67.148 56.094 62.761L63.167 55.691L67.881 60.404L72.595 55.691L65.525 48.62L74.952 39.191L70.238 34.478L60.811 43.908L56.094 39.191L65.525 29.764L60.811 25.05L51.38 34.477L44.31 27.407L39.596 32.12L44.31 36.834L37.24 43.907C32.85 48.294 32.207 54.96 35.217 60.071L25.691 69.596C24.396 70.891 23.335 73.453 23.335 75.285V80C23.335 85.518 27.813 90 33.335 90H76.668C84.001 90 90 84.001 90 76.667V23.333C90 16 84.001 10 76.667 10ZM41.953 48.62L49.023 41.548L58.454 50.977L51.38 58.047C48.782 60.645 44.551 60.645 41.953 58.047C39.352 55.449 39.352 51.218 41.953 48.62Z" fill="white"/>,
});