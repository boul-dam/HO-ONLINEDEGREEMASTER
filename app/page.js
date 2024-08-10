import Bannertop from "@/components/bannertop";
import Carous from "@/components/carous";
import Course from "@/components/course";
import Cta from "@/components/cta";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {

  return (
    <div className=" relative">
         
      <Cta />
      <Course />
     
    </div>
  );
}
