import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/a0faa3dd-de7a-4d52-8947-fa784eb6e67d-u8zo2p.jpg",
  "https://utfs.io/f/35d63e16-7576-407c-9a62-78b2a89a760d-qg0noh.jpg",
  "https://utfs.io/f/30dc3c3b-7fc4-4671-86c5-cc839eb4d3e4-uqt0an.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="p-4">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <img key={image.id} src={image.url} className="w-48" />
        ))}
      </div>
    </main>
  );
}
