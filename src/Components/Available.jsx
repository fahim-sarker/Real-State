import React from "react";
import Container from "./Container";
import Featureheaderreusable from "./Featureheaderreusable";
import Dreamcardreusable from "./Dreamcardreusable";

const properties = [
  {
    id: 1,
    title: "Luxurious Villa",
    location: "New York",
    price: "$1,500,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xOV9tb2Rlcm5faG91c2VfaXNvbGF0ZWRfb25fd2hpdGVfYmFja2dyb3VuZF9lOTdkNjgxZC1mN2U1LTRmMjUtYTllYi1mNjJlOWJlN2U3ZDIucG5n.png",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Los Angeles",
    price: "$750,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8yNl9pc29tZXRyaWNfM2RfcmVuZGVyX29mX2FfbW9kZXJuX2hvdXNlX2lzb2xhdF81ZWIzN2IxMC1iZmVjLTQ5MjQtYjBjZi04MGE5NDc0NDU4YzBfMS5wbmc.png",
  },
  {
    id: 3,
    title: "Beachside Bungalow",
    location: "Miami",
    price: "$2,000,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV80NV9waG90b2dyYXBoX29mX3R3b19mbG9vcnNfaG91c2Vfc21hbGxfZGVzaWduX19kMWI0MDViYi01MjJkLTRkYTktOWI4NC1kYjQ5MTlhMTdmOWJfMS5wbmc.png",
  },
  {
    id: 4,
    title: "Countryside Cottage",
    location: "Texas",
    price: "$500,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV80X3Bob3RvX29mX2FfbW9kZXJuX2FyY2hpdGVjdHVyZV9ob3VzZV9pc29sYXRlZF9iYjRkZDkxNC1mNzgzLTRhZDgtOGJlNC1jZGZkZTA0NzA3MGVfMS5wbmc.png",
  },
  {
    id: 5,
    title: "Luxury Sky Villa",
    location: "Chicago",
    price: "$3,000,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://e7.pngegg.com/pngimages/819/947/png-clipart-house-home-inspection-mt-juliet-real-estate-house-building-condominium.png",
  },
  {
    id: 6,
    title: "Skyline Residence",
    location: "Paris",
    price: "$2,200,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMThfYV9yZWFsaXN0aWNfcGhvdG9fb2Zfc2lkZV9wZXJzcGVjdGl2ZV9vZl9hX21vZF8wM2JmYjEyMy05ZDA1LTQyOTgtYmExOC1mOWFkOTBkNzhlNzdfMS5wbmc.png",
  },
  {
    id: 7,
    title: "High-rise Retreat",
    location: "Switzerland",
    price: "$2,300,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L2Rlc2lnbndpdGhtZTA5X3JlYWxpc3RpY19mbGF0X2Zyb250X3ZpZXdfcGhvdG9fb2ZfYV9tb2Rlcm5faG91c18yOGNkZWNjOS1jYTg4LTQ3N2ItODZhMS03YTIxOGE3YzFiMzgucG5n.png",
  },
  {
    id: 8,
    title: "Urban Penthouse",
    location: "Canada",
    price: "$2,400,000",
    room: "Bedrooms",
    washroom: "Bathrooms",
    imageUrl:
     "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV80X3Bob3RvX29mX2FfbW9kZXJuX2FyY2hpdGVjdHVyZV9ob3VzZV9pc29sYXRlZF9iYjRkZDkxNC1mNzgzLTRhZDgtOGJlNC1jZGZkZTA0NzA3MGVfMS5wbmc.png",
  },
];

const Available = () => {
  return (
    <>
      <section className="lg:py-20 py-10 lg:px-0 px-2">
        <Container>
          <Featureheaderreusable
            content1="Properties"
            content2="Grab your Dream Property"
            content3=" There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form."
          />
          <div className="flex flex-wrap justify-between items-center">
            {properties.map((items) => (
              <div className="lg:w-[24%] w-[48%] mb-10">
                <Dreamcardreusable
                  image={items.imageUrl}
                  title={items.title}
                  price={items.price}
                  item={items.room}
                  item1={items.washroom}
                  location={items.location}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Available;
