import * as React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import hostImage from "../../../Hooks/hostImage";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useAuthContext from "../../../Hooks/useAuthContext";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { newUpdateProfile } = useAuthContext();
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
    const name = data?.name;

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
        await newUpdateProfile(name, image).then(() => {
          Swal.fire({
            title: "Update!",
            text: "Your file has been Update.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid>
            <TextField
              {...register("name", { required: true })}
              autoComplete="given-name"
              name="name"
              sx={{ width: "80%" }}
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
        </Grid>

        <Grid my={2}>
          <Button
            component="label"
            variant="outlined"
            sx={{ width: "80%", p: 2 }}
            startIcon={<CloudUploadIcon />}
          >
            Upload Image
            <input
              style={{ display: "none" }}
              {...register("image", { required: true })}
              type="file"
              name="image"
            />
          </Button>
          {errors.image && (
            <Typography variant="body2" color="#d32f2f">
              This field is required
            </Typography>
          )}
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: "80%" }}
        >
          Update
        </Button>
      </form>
    </div>
  );
};
export default UpdateProfile;
