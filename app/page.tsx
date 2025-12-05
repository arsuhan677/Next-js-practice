import Image from "next/image";
import img from "@/public/images/image.png"

export default function Home() {
    return (
    <main>
      <div className="bg-red-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, iure perferendis excepturi veritatis voluptates in est adipisci voluptate ea, non, ipsam itaque totam tempora optio nihil sed asperiores consectetur ad magnam? Nobis vel similique molestiae, velit alias modi? Facere tempora repellendus iusto sint unde quis quam eaque doloremque aut et!
      
    </div>
    <div>
      <Image placeholder="blur" src={img} alt="images" />
    </div>
    </main>
  );
}
