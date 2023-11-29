
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const  SuccessGalary=()=> {
  return (
    <ImageList
      sx={{
        width: "100%",
        height: "100vh",
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
        objectFit:"cover"
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows} sx={{objectFit:"cover"}}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
export default SuccessGalary;

const itemData = [
  {
    img: 'https://i.ibb.co/8YqYgxk/VR-Awards-2018-award-ceremony-production.jpg',
    title: 'Breakfast',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://i.ibb.co/p3jKmGn/photo-1594122230689-45899d9e6f69-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://i.ibb.co/XFNtyMW/FPH-9736-jpg-width-481-name-FPH-9736.jpg',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://www.cinderellaeco.com//images/articles/1570524181650_design_awards.jpg',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://i.ibb.co/BPd9ySx/kimmel.jpg',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://i.ibb.co/jfVsRvF/VP-stage22-event.jpg',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://i.ibb.co/cry3HzM/o-OSCAR-STAGE-ELLEN-facebook.jpg',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://i.ibb.co/dMfgHzs/photo-1571645163064-77faa9676a46-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://i.ibb.co/dMfgHzs/photo-1571645163064-77faa9676a46-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://i.ibb.co/2hCmwGD/premium-photo-1661901829247-0358bd917858-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://i.ibb.co/xYTVcYr/4d4b7635-20190410120555-930x584.jpg',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://i.ibb.co/34DG2R3/photo-1656761961798-867fd171aa77-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg',
    title: 'Bike',
    author: '@southside_customs',
  },
];