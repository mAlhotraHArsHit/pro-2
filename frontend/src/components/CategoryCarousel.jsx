import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="my-16 mx-auto max-w-4xl text-center">
      <h2 className="text-3xl font-bold text-[#1f2937] mb-6">
        Trending Job Categories
      </h2>
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent className="flex gap-4">
          {category.map((cat, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full border-black text-[#1f2937] hover:bg-[#1f2937] hover:text-white transition-all ease-in-out duration-200 shadow-lg px-6 py-3"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-[#1f2937] hover:text-gray-700" />
        <CarouselNext className="text-[#1f2937] hover:text-gray-700" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
