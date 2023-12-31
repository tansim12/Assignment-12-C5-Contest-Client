import { Grid, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import useWinnerContestDataByFindUser from "../../../Hooks/useWinnerContestDataByFindUser";
import useTotalParticipantCount from "../../../Hooks/useTotalParticipantCount";


const ProfilePieChart = () => {
  const { winnerData } = useWinnerContestDataByFindUser();
  const { totalParticipant } = useTotalParticipantCount();

  const data = [
    { name: "Participant", value: totalParticipant?.totalCount },
    { name: "Winning", value: winnerData?.winnerCount },
  ];

  const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Grid>
      {totalParticipant?.totalCount ? (
        <Grid width={300} height={200}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      ) : (
        <Typography
          sx={{ color: "red" }}
          variant="h4"
          fontWeight={700}
          textAlign={"center"}
        >
          You have no Win percentage
        </Typography>
      )}
    </Grid>
  );
};

export default ProfilePieChart;
