import React from "react";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import phone from "../images/Icon (1).png";
import mail from "../images/Icon.png";

const Contacts = () => {

  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  return (
    <div className="bg-gray-100 lg:p-20 ">
      <div className='container  grid md:grid-cols-2 gap-4 mx-auto flex-col'>

        <div color="transparent" shadow={false}>
          <Typography className="font-bold text-sm text-orange-500 ">
            Contact us
          </Typography>
          <Typography>
            Get in Touch with us
          </Typography>
          <Typography>
            Have a question, a suggestion, or just want to say hello? We'd love to hear from you!
          </Typography>
          <div className="flex flex-wrap">
            <div>
              <img src={mail} alt="" />
              <Typography>
                Email
              </Typography>
              <Typography>
                Our friendly team is here to help
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold ">examplemail@gmail.com</a>
            </div>
            <div>
              <img src={phone} alt="" />
              <Typography>
                Phone
              </Typography>
              <Typography>
                Mon-Fri from 8am to 5pm
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold ">+1 (555) 000-0000</a>
            </div>
          </div>
        </div>
        <div>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form>
        </div>







          {/* country input */}
          <div className="relative flex w-full max-w-[24rem]">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => {
                  return (
                    <MenuItem
                      key={name}
                      value={name}
                      className="flex items-center gap-2"
                      onClick={() => setCountry(index)}
                    >
                      <img
                        src={flags.svg}
                        alt={name}
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      {name} <span className="ml-auto">{countryCallingCode}</span>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="rounded-r-md h-10 border-l-0  "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          {/* country input */}

      </div>
    </div>
  )
}

export default Contacts
