export const fetchImages = async () => {
  const res = await fetch('https://api.nafisbd.com/api/images?category=nature&size=landscape&limit=6')
  const data = await res.json()
  return data.images
}