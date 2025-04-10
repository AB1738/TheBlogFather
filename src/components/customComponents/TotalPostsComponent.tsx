
import { DashBoardPropTypes } from "./MainChart";
import { Card } from "@/components/ui/card";
import { ScrollText } from 'lucide-react';


const TotalPostsComponent = ({posts}:DashBoardPropTypes) => {
  return (
    <Card className="w-full sm:w-[50%] h-[300px] flex justify-center items-center bg-purple-600/5 dark:bg-purple-500/60">
      <ScrollText size={72}/>
     <p className="font-semibold text-xl"> Blog Posts Created: <span className="font-bold">{posts.length} </span> </p>
    </Card>
  );
};

export default TotalPostsComponent;
