import { globalInstance } from "./useGlobalInstance";

const hostImage = async (fromData) => {
  const res = await globalInstance.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    fromData
  );
  const fetchData = await res.data;

  return fetchData?.data?.display_url;
};

export default hostImage;
