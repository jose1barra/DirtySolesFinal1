import axios from 'axios';

export const getSneakers = async () => {
  const sneakers = await (
    await axios.get("http://localhost:13000/products")
  ).data;
  return sneakers;
};

export const getSneakerDetails = async (id) => {
    const sneakerDetails = await (await axios.get(`http://localhost:13000/products/${id}`)).data; 
    return sneakerDetails;
}
