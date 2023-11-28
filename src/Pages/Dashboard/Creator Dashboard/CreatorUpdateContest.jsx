import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import TextField from "@mui/material/TextField";
  import { useForm } from "react-hook-form";
  import MyDateRangeComponent from "./CreateContestCalender";
  import React, { useState } from "react";
  import hostImage from "../../../Hooks/hostImage";
  import toast from "react-hot-toast";
  import useAuthContext from "../../../Hooks/useAuthContext";
  import Swal from "sweetalert2";
  import useAxiosHook from "../../../Hooks/useAxiosHook";
import useFindOneContest from "../../../Hooks/useFindOneContest";
import { useNavigate, useParams } from "react-router-dom";
import Heading from "../../../shared/Heading";
import { Helmet } from "react-helmet-async";
  const allTags = ["Article", "Business", "Gaming", "Photography", "Music"];
  
  const CreatorUpdateContest = () => {
    const {_id} = useParams() 
    const { oneContestData, oneContestRefetch } = useFindOneContest(_id)
    
    const { user } = useAuthContext();
    const instance = useAxiosHook();
    const navigate =useNavigate()
    const [tagValue, setTagValue] = React.useState("");
    const [dateValue, setDateValue] = useState([]);
    const handleChange = (event) => {
      setTagValue(event.target.value);
    };
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
      const img = data?.image[0];
      const fromData = new FormData();
      fromData.append("image", img);
      const image = await hostImage(fromData);
      const contest_name = data?.contest_name;
      const tag = tagValue;
      const price = parseInt(data?.price);
      const rating = parseInt(data?.rating);
      const description = data?.description;
      const from = dateValue[0]?.startDate;
      const to = dateValue[0]?.endDate;
  
      const creatorInfo = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      };
      if (!tag) {
        return toast.error("Select Your Tag");
      }
    
      if (!from || !to) {
        return toast.error("Select Your Dates");
      }
  
      const info = {
        contest_name,
        image,
        tag,
        price,
        rating,
        description,
        total_join: 0,
        status: "pending",
        winner_status: false,
        creatorInfo,
        from,
        to,
      };
     
  
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await instance.patch(`/creatorUpdateContest/${oneContestData?._id}` , info);
          const fetchData = await res.data;
          if (fetchData.success) {
            Swal.fire({
              title: "Updated!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            oneContestRefetch()
            navigate("/dashboard/myCreated")
          }
        }
      });
    };
  
    return (

      <Grid>
        <Helmet><title>Update Contest</title></Helmet>
         <Grid sx={{ mb: 5 }}>
        <Heading
          title={"----UPDATE----"}
          additionalInfo={"Transforming Lifestyles, One Step at a Time"}
          subtitle={
            "Celebrating Innovation and Originality in [Specific Field or Industry"
          }
        />
      </Grid>
      

      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#333",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <TextField
                  {...register("contest_name", { required: true })}
                  autoComplete="given-name"
                  name="contest_name"
                  fullWidth
                  defaultValue={oneContestData?.contest_name}
                  label="Contest Name"
                  autoFocus
                />
                {errors.contest_name && (
                  <Typography variant="body2" color="#d32f2f">
                    This field is required
                  </Typography>
                )}
  
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Tag
                  </InputLabel>
                  <Select
                    value={tagValue}
                    label="Select Tag"
                    onChange={handleChange}
                    defaultValue={oneContestData?.tag}
                    labelId="demo-simple-select-label"
                  >
                    {allTags?.map((tag) => (
                      <MenuItem key={tag} value={tag}>
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
  
            <Grid item xs={12} lg={6}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <TextField
                  {...register("rating", {
                    required: "This field is required",
                    min: {
                      value: 1,
                      message: "Rating should not be less than 1",
                    },
                    max: {
                      value: 5,
                      message: "Rating should not be more than 5",
                    },
                  })}
                  autoComplete="given-name"
                  name="rating"
                  fullWidth
                  type="number"
                  label="Rating"
                  defaultValue={oneContestData?.rating}
                  autoFocus
                />
                {errors.rating && (
                  <Typography variant="body2" color="#d32f2f">
                    {errors.rating.message}
                  </Typography>
                )}
  
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
                          backgroundColor: "#1565c0",
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
                          name="image"
                          id="image"
                          {...register("image", { required: true })}
                          type="file"
                        />
                      </label>
                    </div>
                  </div>
                </div>
  
                <Box sx={{ position: "relative" }}>
                  {/* Calendar Component */}
                  <MyDateRangeComponent
                    setDateValue={setDateValue}
                    dateValue={dateValue}
                    style={{ position: "absolute", top: 0, right: 0 }}
                  />
                </Box>
              </Box>
  
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <TextField
                  {...register("price", {
                    required: "This field is required",
                    min: {
                      value: 1,
                      message: "Price should not be less than 1",
                    },
                  })}
                  autoComplete="given-name"
                  name="price"
                  fullWidth
                  type="number"
                  defaultValue={oneContestData?.price}
                  label="Price"
                />
                {errors.price && (
                  <Typography variant="body2" color="#d32f2f">
                    {errors.price.message}
                  </Typography>
                )}
                <TextField
                  {...register("description", {
                    required: "This field is required",
                    min: {
                      value: 10,
                      message: "Description should not be less than 10",
                    },
                    max: {
                      value: 250,
                      message: "Description should not be more than 255",
                    },
                  })}
                  autoComplete="given-name"
                  name="description"
                  fullWidth
                  multiline
                  maxRows={10}
                  defaultValue={oneContestData?.description}
                  label="Description"
                />
                {errors.description && (
                  <Typography variant="body2" color="#d32f2f">
                    {errors.description.message}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: "1.5rem" }}
          >
            Update
          </Button>
        </form>
      </div>
      </Grid>
    );
  };
  
  
export default CreatorUpdateContest;