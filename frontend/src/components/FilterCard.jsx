import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-[#e3edf7] p-5 rounded-lg shadow-md border border-gray-200">
      {/* Filter Title */}
      <h1 className="font-semibold text-xl text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 mb-4 border-t border-gray-300" />

      {/* Filter Options */}
      <RadioGroup value={selectedValue} onValueChange={changeHandler} className="space-y-6">
        {fitlerData.map((data, index) => (
          <div key={index}>
            {/* Section Title */}
            <h2 className="text-lg font-medium text-gray-700 mb-2 capitalize">
              {data.fitlerType}
            </h2>
            {/* Radio Options */}
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-3 my-2">
                  <RadioGroupItem
                    value={item}
                    id={itemId}
                    className="border-gray-300 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                  <Label
                    htmlFor={itemId}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-150 cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
