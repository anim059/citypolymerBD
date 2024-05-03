import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  private productList: Product[] = [
    {
      code: "p_1",
      name: "Stainless Steel Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 25.99,
      description: "High-quality stainless steel pipe suitable for various industrial applications.",
      img: "pipe1.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_2",
      name: "PVC Pipe",
      category: "Plastic Pipes",
      type: "pipe",
      price: 10.5,
      description: "Durable PVC pipe ideal for plumbing and irrigation systems.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"

    },
    {
      code: "p_3",
      name: "Copper Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 32.75,
      description: "Premium copper pipe known for its excellent conductivity and corrosion resistance.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_4",
      name: "HDPE Pipe",
      category: "Plastic Pipes",
      type: "pipe",
      price: 18.25,
      description: "High-density polyethylene pipe commonly used for water and gas distribution.",
      img: "pipe1.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_5",
      name: "Cast Iron Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 45.99,
      description: "Heavy-duty cast iron pipe suitable for sewage and drainage systems.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_6",
      name: "Galvanized Steel Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 19.99,
      description: "Galvanized steel pipe coated with a layer of zinc to prevent corrosion, suitable for outdoor and high-moisture environments.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_7",
      name: "ABS Pipe",
      category: "Plastic Pipes",
      type: "pipe",
      price: 12.75,
      description: "Acrylonitrile Butadiene Styrene (ABS) pipe commonly used for drain, waste, and vent (DWV) systems in residential and commercial buildings.",
      img: "pipe1.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_8",
      name: "Aluminum Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 28.50,
      description: "Lightweight aluminum pipe with good corrosion resistance, often used in HVAC systems and decorative applications.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_9",
      name: "Polypropylene Pipe",
      category: "Plastic Pipes",
      type: "pipe",
      price: 15.99,
      description: "Polypropylene pipe known for its chemical resistance, suitable for industrial fluid handling and wastewater treatment applications.",
      img: "pipe2.jpg",
      availability : "IN-STOCK"
    },
    {
      code: "p_10",
      name: "Carbon Steel Pipe",
      category: "Metal Pipes",
      type: "pipe",
      price: 35.25,
      description: "Carbon steel pipe suitable for high-pressure and high-temperature applications such as steam systems and oil refineries.",
      img: "pipe1.jpg",
      availability : "IN-STOCK"
    }
  ]

  constructor() { }

  getAllPipeProductListInfo(): Product[] {
    let list = this.productList.filter((product) => {
      return product.type.toLowerCase() === 'pipe'
    })
    return list;
  }

  getProductByCode(code : string): Product | undefined{
    let product = this.productList.find((ele)=> ele.code === code);
    return product;
  }

}
