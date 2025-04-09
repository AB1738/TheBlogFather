"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



export interface DashBoardPropTypes{
    posts:{
        id: string;
        title: string;
        description: string;
        blogPostText: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        viewCount: number;
    }[]
}
const MainChart = ({posts}:DashBoardPropTypes) => {
    const data=posts.map((post,idx)=>(
        {
            Name: `Post ${idx+1}`,
            Views:post.viewCount
        }
    ))
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <LineChart data={data} margin={{ top: 20 }} accessibilityLayer>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Views"
          stroke="#7C3AED"
          activeDot={{ r: 8 }}
        ></Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MainChart;
