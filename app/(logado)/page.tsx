export default function Principal() {
  return (
    <div className="grid gap-4 mt-16 p-5  max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img
          className="w-2/4 rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt="Imagem home"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <img
            className="h-auto max-w- rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Imagem home"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt="Imagem home"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt="Imagem home"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt="Imagem home"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt="Imagem home"
          />
        </div>
      </div>
    </div>
  );
}
