import { Hero3D } from "@/components/home/Hero3D";
import { Problems3D } from "@/components/home/Problems3D";
import { Solution3D } from "@/components/home/Solution3D";
import { Features3D } from "@/components/home/Features3D";
import { NightGuardian3D } from "@/components/home/NightGuardian3D";
import { Testimonials3D } from "@/components/home/Testimonials3D";
import { CTA3D } from "@/components/home/CTA3D";

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <Problems3D />
      <Solution3D />
      <Features3D />
      <NightGuardian3D />
      <Testimonials3D />
      <CTA3D />
    </>
  );
}
