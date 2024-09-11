import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react"
import { useNavigate } from "react-router"

const ListCard = ({ categories }) => {
  const nav = useNavigate();
  return (
    <Card className="w-96">
      <CardBody>

        <div className="divide-y divide-gray-200">
          {categories.map(({ strCategory, strCategoryThumb, strCategoryDescription }, index) => (
            <div onClick={() => nav(`/items/${strCategory

              }`)}

              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0 cursor-pointer"
            >
              <div className="flex items-start gap-x-6">
                <Avatar size="lg" src={strCategoryThumb} alt={strCategoryThumb} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strCategory}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {strCategoryDescription.substring(0, 100) + '....'}
                  </Typography>
                </div>
              </div>

            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
export default ListCard