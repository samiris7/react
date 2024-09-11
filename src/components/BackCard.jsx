import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

const BackCard = ({ meal }) => {
  const nav = useNavigate();
  return (

    <Card
      onClick={() => nav(`/item-detail/${meal.idMeal}`)}
      shadow={false}
      className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
        style={{ backgroundImage: `url(${meal.strMealThumb})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {meal.strMeal}
        </Typography>

      </CardBody>
    </Card>

  )
}
export default BackCard