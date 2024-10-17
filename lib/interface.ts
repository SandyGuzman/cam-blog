import { TypedObject } from "@sanity/types";
import { ImageAsset } from "@sanity/types";

export interface simpleBlogCard {
  publishedAt: string | number | Date;
  _createdAt: string | number | Date;
  title: string; 
  currentSlug: string; 
  titleImage: ImageAsset; 
}
export interface fullBlog {
  publishedAt: string | number | Date;
  currentSlug: string; 
  title: string; 
  content: TypedObject | TypedObject[]; 
  titleImage: ImageAsset; 
}
export interface blog {
  title: string;
  currentSlug: string;
  titleImage: ImageAsset;
  _createdAt: string;
}
