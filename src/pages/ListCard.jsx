import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Screenshot72 from './Screenshot 72.png'

const ListCard = ({ photo }) => {
  return (
    <div className=' mx-auto bg-deep-orange-300 rounded-3xl'>
      <Card className="m-4 w-88 bg-red-900">
        <CardHeader color="blue-gray " className="  w-[200px] mx-auto mt-6">
          <img className=' h-[200px] w-[200px]   bg-red-900 rounded-2xl '
            src={Screenshot72}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className=' bg-red-900 '>
          <Typography variant="h5" color="blue-gray" className="mb-2  mx-auto">
            <p>Love Letter to Sujata </p>
          </Typography>
          <Typography className='text-pink-100 italic'>
            From the moment our paths crossed, my heart found a rhythm it never knew it was missing. Every day with you feels like a new chapter in the most beautiful story I’ve ever read. Your laughter is my favorite symphony, and your smile, a beacon that guides me through even the stormiest days.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0" />
      </Card>
    </div>
  );
};

export default ListCard;
