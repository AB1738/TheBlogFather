
import { DashBoardPropTypes } from "./MainChart";
import { Card } from "../ui/card";
import { View } from "lucide-react";
const TotalViewsComponent = ({posts}:DashBoardPropTypes) => {

  const views=posts.reduce((acc,post)=>{
    acc+=post.viewCount
    return acc
  },0)
  return (
   <Card className="w-full sm:w-[50%] h-[300px] flex justify-center items-center bg-purple-600/5 dark:bg-purple-500/60">
        <View size={72}/>
        <p className="font-semibold text-xl"> Total Views: <span className="font-bold">{views} </span> </p>
   </Card>
  );
};

export default TotalViewsComponent;

