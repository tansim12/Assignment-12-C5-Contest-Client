import { useTheme } from "@emotion/react";
import { Grid, TextField, Typography, Button, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";

const Search = ({setSearchValue}) => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:900px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const search = data?.search 
    setSearchValue(search)
   
  };

  return (
    <Grid container p={2} justifyContent="center" textAlign={matches ? "center" : ""}>
      <Grid item xs={12} sx={{ py: 4 }}>
        <Typography variant="h4" color={theme.palette.primary.main} fontWeight={800}  data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
          Contest Craze Adventure
        </Typography>

        <Typography variant="body1" color={theme.palette.grayColor.main} fontWeight={800} my={3} data-aos="fade-right">
          Join a world of contests where skills meet opportunity, showcasing your brilliance..
        </Typography>
      </Grid>

      {/* Form section */}
      <Grid item xs={12} sm={12} data-aos="fade-up" data-aos-duration="1500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                {...register("search", )}
                autoComplete="given-name"
                name="search"
                fullWidth
                id="Name"
                label="Search"
                autoFocus
                variant="outlined"
                error={!!errors.search}
                helperText={errors.search && "This field is required"}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ height: "100%" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Search;
