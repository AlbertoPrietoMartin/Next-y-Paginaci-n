
'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();
  
  return (
    <div>
      <h1>Hello worlcito!</h1>
      <Link href="/laotra">Si pinchas aquí te lleva a la otra</Link>
      <p
        onClick={()=>{
          router.push("/laotra");
        }}
      >
      </p>
      <img
        src="/rowlet.jpeg"
        onClick={()=>{
          router.push("/laotra");
        }}
      />

    </div>
  );
};

export default Home;
