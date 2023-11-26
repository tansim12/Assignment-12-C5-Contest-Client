import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import MyDateRangeComponent from "./MyDateRangeComponent";
import React from "react";

const AddContest = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const img = data?.image[0];
  };
  return (
    <div
      style={{
        width: "100%",
        minHeight: "calc(100vh-40px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#333",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px",
            "@media (min-width: 768px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="contestName"
                fullWidth
                id="Name"
                label="Contest Name"
                autoFocus
              />
              {errors.contestName && (
                <Typography variant="body2" color={"#d32f2f"}>
                  This field is required
                </Typography>
              )}
            </Grid>

            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <label htmlFor="location" style={{ color: "#333" }}>
                Select Availability Range
              </label>
            
              <MyDateRangeComponent></MyDateRangeComponent>
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                fullWidth
                id="Name"
                label="pogp"
                autoFocus
              />
              {errors.name && (
                <Typography variant="body2" color={"#d32f2f"}>
                  This field is required
                </Typography>
              )}
            </Grid>

            <div
              style={{
                padding: "1rem",
                backgroundColor: "#fff",
                width: "100%",
                margin: "auto",
                borderRadius: "8px",
                border: "2px dashed #ccc",
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#fff",
                  width: "100%",
                  margin: "auto",
                  borderRadius: "8px",
                  border: "2px dashed #ccc",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <label
                    htmlFor="image"
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#F43F5E",
                      color: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontWeight: "600",
                      padding: "4px 12px",
                      "&:hover": { backgroundColor: "#F43F5E" },
                    }}
                  >
                    Upload Image
                    <input
                      style={{ display: "none" }}
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      // onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                fullWidth
                id="Name"
                label=" Name"
                autoFocus
              />
              {errors.name && (
                <Typography variant="body2" color={"#d32f2f"}>
                  This field is required
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                fullWidth
                id="Name"
                label=" Name"
                autoFocus
              />
              {errors.name && (
                <Typography variant="body2" color={"#d32f2f"}>
                  This field is required
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                {...register("name", { required: true })}
                autoComplete="given-name"
                name="name"
                fullWidth
                id="Name"
                label=" Name"
                autoFocus
              />
              {errors.name && (
                <Typography variant="body2" color={"#d32f2f"}>
                  This field is required
                </Typography>
              )}
            </Grid>
          </div>
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "1.5rem" }}
          //   disabled={loading}
          //   onClick={handleSubmit}
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddContest;
