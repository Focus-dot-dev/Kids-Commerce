import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 1",
      title: "Abstract Design",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 2",
      title: "Minimalist Layout",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 3",
      title: "Colorful Composition",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 4",
      title: "Geometric Patterns",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 5",
      title: "Modern Typography",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design 6",
      title: "Brand Identity",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Design Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-[3/2] w-full">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="object-cover transition-transform duration-300 hover:scale-105 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{image.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
