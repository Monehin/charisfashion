import Image from 'next/image';

const Slider = ({ images }) => {
  const [image1] = images;
  const imageUrl = image1.url.replace(new RegExp('(.*/)[^/]+$'), '$1').trim();
  const imageSize = image1.formats.large;
  return (
    <div className='relative flex items-center justify-center '>
      <Image
        className=' object-contain'
        className=' object-cover !rounded-lg'
        src={`${imageUrl}${imageSize.hash}${imageSize.ext}`}
        height='600'
        width='1200'
      />
    </div>
  );
};

export default Slider;
