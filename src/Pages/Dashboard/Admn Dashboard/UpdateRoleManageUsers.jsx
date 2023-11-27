import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";
import toast from "react-hot-toast";

const UpdateRoleManageUsers = ({ item, allUsersRefetch }) => {
  const instance = useAxiosHook();
  const [roleValue, setRoleValue] = useState("");
  const handleChange = (event) => {
    setRoleValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectRole = roleValue;
    console.log(selectRole);
    if (!selectRole) {
      return toast.error("Select your role ...");
    }

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
        await instance
          .patch(`/users/${item?.email}`, {
            role: selectRole,
          })
          .then((response) => {
            if (response.data.success) {
              allUsersRefetch();
              Swal.fire({
                title: "Update!",
                text: "Your file has been Update.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Select Tag</InputLabel>
          <Select
            value={roleValue}
            label="Select Tag"
            onChange={handleChange}
            labelId="demo-simple-select-label"
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"creator"}>Creator</MenuItem>
            <MenuItem value={"User"}>User</MenuItem>
          </Select>
          <Button type="submit" variant="outlined">
            Update
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default UpdateRoleManageUsers;
