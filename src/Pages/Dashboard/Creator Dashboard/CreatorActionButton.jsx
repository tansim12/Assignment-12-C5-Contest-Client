import { Button, ButtonGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import useAxiosHook from "../../../Hooks/useAxiosHook";
import { Link, useNavigate } from "react-router-dom";

const CreatorActionButton = ({ item, allContestDataRefetch }) => {
const navigate = useNavigate()
const handleUpdateLink=()=>{
  navigate(`/dashboard/creatorUpdateContest/${item?._id}`)
}

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
          allContestDataRefetch();
        }
      }
    });
  };

 
  // todo handle submission 
  const handleSubmission = () => {
    console.log("submission");
  };

  return (
    <div>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {/* delete button  */}
        <Button
          onClick={handleDelete}
          disabled={item?.status === "approved"}
          color="error"
        >
          <DeleteIcon />
        </Button>

        {/* edit button  */}
        
          <Button 
          onClick={handleUpdateLink}
          disabled={item?.status === "approved"} color="secondary">
            <EditIcon />
          </Button>
       

        {/* submission button   */}
        {item?.status === "approved" && (
          <Button
            onClick={handleSubmission}
            disabled={item?.winner_status}
            variant="contained"
          >
            Submission
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default CreatorActionButton;
