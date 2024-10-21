import { Button, Card, CardBody, CardFooter, IconButton, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux"
import CutomDialog from "../../ui/CutomDialog";
import { useNavigate } from "react-router";

const AllPosts = () => {




  const { posts } = useSelector((state) => state.postSlice);
  const nav = useNavigate();
  return (
    <div>
      {
        posts.map((post, i) => {
          return <Card key={post.id} className="mt-6 w-96">
            <CardBody>
              <img src={post.imageReview} alt="" />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {post.title}
              </Typography>
              <Typography>
                {post.detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
              <Button>Read More</Button>
              <div className="space-x-5">
                <IconButton
                  onClick={() => nav(`/edit-form/${post.id}`)}
                  color="green">
                  <i className="fas fa-edit" />
                </IconButton>
                <CutomDialog index={i} />
              </div>

            </CardFooter>
          </Card>;
        })
      }




    </div>
  )
}
export default AllPosts