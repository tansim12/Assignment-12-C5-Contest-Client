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
    { css: 'https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg', height: 280 },
    { css: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg', height:280 },
    { css: 'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg', height:280 }
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