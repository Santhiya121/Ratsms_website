import Image from "next/image";

const ImageComponent = () => {
  return (
    <div>
      <h1>My Logo</h1>
      <Image 
        src="/images/logo.jpg" 
        alt="Logo" 
        width={200} 
        height={100} 
        layout="responsive"
      />
    </div>
  );
};

export default ImageComponent;
