export default function ProfileCard({ imageUrl, gradient }: { imageUrl: string; gradient: string }) {
    return (
      <div className="flex justify-center items-center bg-gray-100">
        {/* Profile Card Container */}
        <div
          className={`relative w-28  h-28 lg:w-56 lg:h-56 rounded-full ${gradient} flex justify-center items-end overflow-hidden`}
        >
          {/* User Image */}
          <img
            src={imageUrl}
            alt="Profile"
            className="absolute bottom-0  w-20  lg:w-auto lg:object-fill h-auto"
          />
        </div>
      </div>
    );
  }
  