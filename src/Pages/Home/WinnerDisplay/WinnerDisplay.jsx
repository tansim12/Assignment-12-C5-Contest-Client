import { useState, useEffect, useMemo } from "react";
import useMeasure from "react-use-measure";
import { useTransition, a } from "@react-spring/web";
import shuffle from "lodash.shuffle";
import styles from "./styles.module.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useWinnerAndChartData from "../../../Hooks/useWinnerAndChartData";


// todo initial  data insert  
const data2 =  [
    { css: 'https://i.ibb.co/xhwDWMS/photo-1535713875002-d1d0cf377fde-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg', height: 280 },
    { css: 'https://i.ibb.co/2MFns80/photo-1568602471122-7832951cc4c5-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg', height: 280 },
    { css: 'https://i.ibb.co/Jp2kJB1/premium-photo-1689568126014-06fea9d5d341-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg', height: 280 },
    { css: 'https://i.ibb.co/n3K6sLs/photo-1485988865867-f2549dfe1dc7-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg', height: 280 },
    { css: 'https://i.ibb.co/xz9bwss/photo-1607746882042-944635dfe10e-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg', height: 280 },
    { css: 'https://i.ibb.co/72xPwnB/premium-photo-1688739352540-a75b102d8551-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg', height: 280 },
    { css: 'https://i.ibb.co/5L3S9wR/photo-1474176857210-7287d38d27c6-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg', height:280 },
    { css: 'https://i.ibb.co/qMqKpwH/premium-photo-1688350808212-4e6908a03925-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg', height:280 }
  ]


  function WinnerDisplay() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("xl"));
    const { totalWinnerData } = useWinnerAndChartData();
    
    const myData = totalWinnerData?.allWinnerImage;
    const data = Array.isArray(myData)
      ? myData.slice(0, 8)?.map((url) => ({
          css: url,
          height: 280,
        }))
      : data2;
  
    const getColumns = () => {
      if (matches) return 5;
      if (theme.breakpoints.up("lg")) return 4;
      if (theme.breakpoints.up("md")) return 3;
      return 2; // default value for smaller screens
    };
  
    const columns = getColumns();
    const [ref, { width }] = useMeasure();
    const [items, setItems] = useState(data);
  
    useEffect(() => {
      const t = setInterval(() => {
        setItems(shuffle(items));
      }, 2000);
      return () => clearInterval(t);
    }, [items]);
  
    const [heights, gridItems] = useMemo(() => {
      let heights = new Array(columns).fill(0);
      let gridItems = items?.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights));
        const x = (width / columns) * column;
        const y = (heights[column] += child.height / 2) - child.height / 2;
        return {
          ...child,
          x,
          y,
          width: width / columns,
          height: child.height / 2,
        };
      });
      return [heights, gridItems];
    }, [columns, items, width]);
  
    const transitions = useTransition(gridItems, {
      key: (item) => item.css,
      from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
      enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
      update: ({ x, y, width, height }) => ({ x, y, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25,
    });
  
    return (
      <div
        ref={ref}
        className={styles.list}
        style={{ height: Math.max(...heights) }}
      >
        {transitions((style, item) => (
          <a.div style={style}>
            <div
              style={{
                backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)`,
              }}
            />
          </a.div>
        ))}
      </div>
    );
  }
  
  export default WinnerDisplay;