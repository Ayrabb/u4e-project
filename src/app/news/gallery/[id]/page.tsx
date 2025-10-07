import GalleryClient from "../GalleryClient";

interface GalleryPageProps {
  params: { id: string };
}

const GalleryPage = async ({ params }: GalleryPageProps) => {
  const { id } = await params; // unwrap params safely

  return <GalleryClient id={id} />;
};

export default GalleryPage;