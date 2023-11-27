import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";

const ConfirmAndDeleteContest = ({ item, contestRefetch }) => {
  const instance = useAxiosHook();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await instance.delete(`/contest/${item?._id}`);
        const fetchData = await res.data;
        if (fetchData.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          contestRefetch();
        }
      }
    });
  };

  const handleConfirm = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await instance.patch(`/creatorUpdateContest/${item?._id}`, {
          status: "approved",
        });
        const fetchData = await res.data;
        if (fetchData.success) {
          Swal.fire({
            title: "Confirm!",
            text: "Your Status is update.",
            icon: "success",
          });
          contestRefetch();
        }
      }
    });
  };
  return (
    <div>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button onClick={handleDelete}>
          <DeleteIcon />
        </Button>
        <Button disabled={item?.status === "approved"} onClick={handleConfirm}>
          Confirm
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ConfirmAndDeleteContest;
