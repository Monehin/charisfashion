const imageUrl = (source, size) => {
  const imageUrl = source.url.replace(new RegExp('(.*/)[^/]+$'), '$1').trim();
  const imageSize = source.formats[size];

  return `${imageUrl}${imageSize.hash}${imageSize.ext}`;
};

export default imageUrl;
