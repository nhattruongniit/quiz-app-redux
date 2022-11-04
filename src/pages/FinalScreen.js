import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { handleChangeAmount, handleChangeScore } from "../redux/actions";

const FinalScreen = () => {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.question);

  const handleBackToSettings = () => {
    disptach(handleChangeScore(0));
    disptach(handleChangeAmount(50));
    navigate("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        back to settings!
      </Button>
    </Box>
  );
};

export default FinalScreen;