import { Avatar, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export function Monial({ person, about }) {

  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar
          size="lg"
          variant="circular"
          src={person?.person_photo || about?.company_photo}
          alt="tania andrew"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {person?.person_name || about.company_name}
            </Typography>

          </div>
          <Typography color="blue-gray">Frontend Lead @ Google</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          {person?.person_detail || about.company_detail}
        </Typography>
      </CardBody>
    </Card>
  );
}

