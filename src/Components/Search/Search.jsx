import { useTheme } from "@emotion/react";
import { Grid, TextField, Typography, Button, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";

const Search = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:900px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // Handle form submission here
    const search = data?.search 
    console.log(search);
  };

  return (
    <Grid container justifyContent="center" textAlign={matches ? "center" : ""}>
      <Grid item xs={12} sx={{ py: 4 }}>
        <Typography variant="h4" color={theme.palette.primary.main} fontWeight={800}>
          Contest Craze Adventure
        </Typography>

        <Typography variant="body1" color={theme.palette.grayColor.main} fontWeight={800} my={3}>
          Join a world of contests where skills meet opportunity, showcasing your brilliance and carving your path to unprecedented success.
        </Typography>
      </Grid>

      {/* Form section */}
      <Grid item xs={12} sm={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                {...register("search", { required: true })}
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
