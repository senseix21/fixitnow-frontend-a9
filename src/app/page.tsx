'use client'
import BannerCarousel from '@/components/ui/BannerCarousel';
import AboutUs from '@/components/ui/aboutUs';
import Category from '@/components/ui/categories';
import FeaturedService from '@/components/ui/featuredService';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import UpcomingService from '@/components/ui/upcomingServices';
import WhyUs from '@/components/ui/whyus';
import TestimonialsSection from '@/components/ui/testimonials';
import { testimonialsData } from '@/constants/data';
import FeedbackSection from '@/components/ui/feedback';
import Stats from '@/components/ui/stats';
import ProjectsGallery from '@/components/ui/projectsGallery';
import TeamSection from '@/components/ui/teamSection';
import BlogSection from '@/components/ui/blogSection';

export default function Home() {
  const images = [
    'https://www.constructionheroes.com/about-us/images/hero-img.jpg',
    'https://assets.entrepreneur.com/static/20190314083404-handyman-hero-image1.jpg',
    'https://cdn.iser.vc/static/articles/banners/2020/electrician1.JPG',
    'https://www.constructionheroes.com/about-us/images/hero-img.jpg',
    'https://i.ibb.co/pd4wW2N/zmk-hero-2.png'

  ];

  const headings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4'];

  return (
    <div data-theme='winter'>
      <Navbar />
      <div className="min-h-screen">
        <BannerCarousel images={images} headings={headings} />
        <Stats />
        <Category />
        <FeaturedService />
        <AboutUs />
        <ProjectsGallery />
        <UpcomingService />
        <TestimonialsSection testimonials={testimonialsData} />
        <TeamSection />
        <FeedbackSection />
        <BlogSection />


      </div>
      <Footer />

    </div>
  )
}
