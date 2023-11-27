import { Button, ButtonGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CreatorActionButton = ({ item, allContestDataRefetch }) => {
  const handleDelete = () => {
    console.log("delete");
  };
  const handleEdit = () => {
    console.log("edit");
  };
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
          onClick={handleEdit}
          disabled={item?.status === "approved"}
          color="secondary"
        >
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
