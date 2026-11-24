import { axiosInstance } from "../config/axiosInstance";

  export let getProductsData = async()=>
  {
    try {
      console.log("api function called");
      let res= await axiosInstance.get("/products")
      console.log(res);
      return res.data.products;
    } catch (error) {
      console.log("Error in fetching products",error);
    }
    
  }