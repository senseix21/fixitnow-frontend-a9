import AboutUs from '@/components/ui/aboutUs';
import Category from '@/components/ui/categories';
import FeaturedService from '@/components/ui/featuredService';
import Footer from '@/components/ui/footer';
import HeroBanner from '@/components/ui/hero';
import Navbar from '@/components/ui/navbar';
import WhyUs from '@/components/ui/whyus';

export default function Home() {


  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <HeroBanner />
        <Category />
        <WhyUs />
        <FeaturedService />
        <AboutUs />

      </div>
      <Footer />

    </>
  )
}
