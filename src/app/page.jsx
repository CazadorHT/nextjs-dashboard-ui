import Image from "next/image";
import Container from './components/Container'
import Navbar from "./components/Navbar";
import Vercel from '../../public/next.svg'
import Footer from "./components/Footer";
import Link from "next/link";


export default function Home() {
  return (
   <main>
      <Container>
          <Navbar />
          <div className="flex-glow text-center p-10">
            <h3 className="text-5xl">NextJs Dashboard</h3>
            <p>Become full-Stack Dev w Nextjs</p>
            <div className="flex justify-center my-10">
              <Image src={Vercel} width={300} height={0} alt="Vercel logo"/>
              <Link href='/welcome'>Cilck Me Go To Main page</Link>
            </div>
          </div>
      </Container>
      <Footer />
   </main>
  );
}
