import Image from "next/image";
import im1 from "../public/image/bba1.png";
const Carous = ()=>{
    return(
        <div className="carousel rounded-box w-64">
          <div className="carousel-item w-full">
            <Image src={im1} width={100} height={100} 
            sizes="100vw" 
            style={{ width: '100%', height: 'auto' }} />
          
          </div>
        </div>
    )
}

export default Carous;