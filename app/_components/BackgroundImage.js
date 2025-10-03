import Image from "next/image";

export function BackgroundImage() {
  return (
    <div className="absolute inset-0 top-0 left-0 w-screen h-screen z-[-1]">
      <Image
  src="/todoezelbg.jpg"
  alt="Background"
  fill
  priority
  placeholder="blur"
  blurDataURL="/todoezelbg.jpg"
  className="object-cover object-center invert-20"
/>
    </div>
  );
}