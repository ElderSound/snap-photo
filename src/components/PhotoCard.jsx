export default function PhotoCard({ photo, onClick }) {
  return (
    <div
      className="overflow-hidden rounded cursor-pointer"
      onClick={() => onClick(photo)}
    >
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className="w-full h-40 object-cover transition-transform duration-800 transform hover:scale-105"
      />
    </div>
  );
}