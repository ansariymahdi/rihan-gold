export const compressFile = async (
  event,
  setcompressedFile,
  setbase64Image
) => {
  const imageCompression = require("browser-image-compression")?.default,
    imageFile = event.target.files[0];

  try {
    const compressedFile = await imageCompression(imageFile, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    });

    imageCompression.getDataUrlFromFile(compressedFile).then((res) => {
      setbase64Image(res);
    });

    setcompressedFile(compressedFile);
  } catch (e) {
    setcompressedFile(imageFile);
  }
};
