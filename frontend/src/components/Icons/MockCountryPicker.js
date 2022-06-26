/* eslint-disable react/jsx-key */
import React from "react";
import { createIcon } from "@chakra-ui/react";

export default createIcon({
  displayName: "TeamIcon",
  viewBox: "0 0 68 20",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  // eslint-disable-next-line no-sparse-arrays
  path: [
    <rect y="2.5" width="20" height="13.75" fill="#EEF3F8" />,
    <rect y="2.5" width="11.25" height="8.75" fill="#41479B" />,
    <rect x="11.25" y="2.5" width="8.75" height="1.25" fill="#DC251C" />,
    <rect x="11.25" y="5" width="8.75" height="1.25" fill="#DC251C" />,
    <rect x="11.25" y="7.5" width="8.75" height="1.25" fill="#DC251C" />,
    <rect x="11.25" y="10" width="8.75" height="1.25" fill="#DC251C" />,
    <rect y="12.5" width="20" height="1.25" fill="#DC251C" />,
    <rect y="15" width="20" height="1.25" fill="#DC251C" />,
    <rect x="1.25" y="3.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="3.75" y="3.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="6.25" y="3.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="8.75" y="3.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="1.25" y="6.25" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="3.75" y="6.25" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="6.25" y="6.25" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="2.5" y="7.5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="5" y="7.5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="7.5" y="7.5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="2.5" y="5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="5" y="5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="7.5" y="5" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="8.75" y="6.25" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="1.25" y="8.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="3.75" y="8.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="6.25" y="8.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <rect x="8.75" y="8.75" width="1.25" height="1.25" fill="#C5D0EC" />,
    <path
      d="M35.9148 4.81818H37.1477V11.5597C37.1477 12.2557 36.9837 12.8771 36.6555 13.424C36.3307 13.9676 35.8717 14.3968 35.2784 14.7116C34.6851 15.0232 33.9891 15.179 33.1903 15.179C32.3916 15.179 31.6955 15.0232 31.1023 14.7116C30.509 14.3968 30.0483 13.9676 29.7202 13.424C29.3954 12.8771 29.233 12.2557 29.233 11.5597V4.81818H30.4659V11.4602C30.4659 11.9574 30.5753 12.3999 30.794 12.7876C31.0128 13.1721 31.3243 13.4754 31.7287 13.6974C32.1364 13.9162 32.6236 14.0256 33.1903 14.0256C33.7571 14.0256 34.2443 13.9162 34.652 13.6974C35.0597 13.4754 35.3712 13.1721 35.5866 12.7876C35.8054 12.3999 35.9148 11.9574 35.9148 11.4602V4.81818ZM45.1781 7.36364C45.1184 6.85985 44.8765 6.46875 44.4522 6.19034C44.028 5.91193 43.5076 5.77273 42.8912 5.77273C42.4404 5.77273 42.046 5.84564 41.7079 5.99148C41.3732 6.13731 41.1113 6.33783 40.9224 6.59304C40.7368 6.84825 40.644 7.13826 40.644 7.46307C40.644 7.73485 40.7086 7.96851 40.8379 8.16406C40.9705 8.3563 41.1395 8.51705 41.345 8.64631C41.5505 8.77225 41.7659 8.87666 41.9913 8.95952C42.2167 9.03906 42.4238 9.10369 42.6127 9.15341L43.6468 9.43182C43.912 9.50142 44.207 9.59754 44.5318 9.72017C44.8599 9.8428 45.1731 10.0102 45.4714 10.2223C45.773 10.4311 46.0216 10.6996 46.2172 11.0277C46.4127 11.3558 46.5105 11.7585 46.5105 12.2358C46.5105 12.786 46.3663 13.2831 46.0779 13.7273C45.7929 14.1714 45.3753 14.5244 44.8251 14.7862C44.2782 15.0481 43.6137 15.179 42.8315 15.179C42.1023 15.179 41.4709 15.0613 40.9373 14.826C40.407 14.5907 39.9894 14.2625 39.6845 13.8416C39.3829 13.4207 39.2122 12.9318 39.1724 12.375H40.4451C40.4783 12.7595 40.6075 13.0777 40.8329 13.3295C41.0616 13.5781 41.35 13.7637 41.698 13.8864C42.0493 14.0057 42.4271 14.0653 42.8315 14.0653C43.3021 14.0653 43.7247 13.9891 44.0993 13.8366C44.4738 13.6809 44.7704 13.4654 44.9892 13.1903C45.2079 12.9119 45.3173 12.5871 45.3173 12.2159C45.3173 11.8778 45.2228 11.6027 45.0339 11.3906C44.845 11.1785 44.5964 11.0062 44.2882 10.8736C43.9799 10.741 43.6468 10.625 43.2889 10.5256L42.036 10.1676C41.2406 9.93892 40.6109 9.61245 40.1468 9.18821C39.6828 8.76397 39.4508 8.20881 39.4508 7.52273C39.4508 6.95265 39.6049 6.45549 39.9132 6.03125C40.2247 5.60369 40.6423 5.27225 41.166 5.03693C41.693 4.7983 42.2813 4.67898 42.9309 4.67898C43.5872 4.67898 44.1705 4.79664 44.6809 5.03196C45.1913 5.26397 45.5957 5.58215 45.894 5.98651C46.1956 6.39086 46.3547 6.8499 46.3713 7.36364H45.1781Z"
      fill="#E2E8F0"
    />,
    ,
    <path
      d="M60.0001 10.7814L63.3001 7.48135L64.2428 8.42402L60.0001 12.6667L55.7574 8.42402L56.7001 7.48135L60.0001 10.7814Z"
      fill="#E2E8F0"
    />,
  ],
});
