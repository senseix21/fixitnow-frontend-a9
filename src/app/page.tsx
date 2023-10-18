'use client'
import { useServicesQuery } from '@/redux/api/serviceApi';
import Image from 'next/image'

export default function Home() {
  const { data, isLoading } = useServicesQuery({});
  console.log(data);

  return (
    <div>Hello world</div>
  )
}
