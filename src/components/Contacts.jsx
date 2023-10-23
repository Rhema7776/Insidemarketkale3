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
  Box
} from "@material-tailwind/react";
import phone from "../images/Icon (1).png";
import mail from "../images/Icon.png";

const Contacts = () => {

  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  // const handleChange = ()=> {
  //   setState("");
  // }

  return (
    <div id="contacts" className="bg-gray-100 lg:p-20 ">
      <div className='container  grid md:grid-cols-2  mx-auto flex-col gap-4'>

        <div color="transparent" shadow={false} className="lg:w-96  mt-5">
          <Typography className="font-bold text-sm text-orange-500 ">
            Contact us
          </Typography>
          <Typography className="font-bold text-2xl  ">
            Get in Touch with us
          </Typography>
          <Typography className=" text-sm text-gray-600 mt-4 ">
            Have a question, a suggestion, or just want to say hello? We'd love to hear from you!
          </Typography>
          <div className="flex flex-wrap gap-5 mt-6">
            <div>
              <img src={mail} alt="" className="w-5"/>
              <Typography className="mt-4">
                Email
              </Typography>
              <Typography className="  text-gray-600 text-xs mt-3">
                Our friendly team is here to help
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold mt-4 ">examplemail@gmail.com</a>
            </div>
            <div>
              <img src={phone} alt="" className="w-4" />
              <Typography className="mt-4">
                Phone
              </Typography>
              <Typography className="text-gray-600 text-xs mt-3">
                Mon-Fri from 8am to 5pm
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold mt-52 ">+1 (555) 000-0000</a>
            </div>
          </div>
        </div>

        

        <div className=" container mx-auto">
          <form className="mt-8 mb-2  max-w-screen-lg w-full bg-white p-5 rounded-lg ">
            <div className="mb-1 flex flex-wrap gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <input
                type="text"
                size="lg"
                placeholder="Your name"
                className=" border border-gray-300 rounded-lg text-sm w-full "
               
              />

              <div className="grid md:grid-cols-2  mx-auto flex-col gap-4  items-center w-full">
                <div className="lg:w1/2">
                  <Typography variant="h6" color="blue-gray" className="">
                    Phone
                  </Typography>
                  
                  {/* country input */}
                  <div className="relative flex w-full  ">
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <Button
                          ripple={false}
                          variant="text"
                          color="blue-gray"
                          className="flex h-10 items-center gap-2 rounded-r-none border border-r-1 border-blue-gray-400 bg-blue-gray-500/10 pl-3"
                          
                        >
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {countryCallingCode}
                        </Button>
                      </MenuHandler>
                      <MenuList className="max-h-[20rem] max-w-[10rem]">
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
                                className="h-5 w-5 rounded-full object-cover border border-gray-300 text-sm text-gray-500"
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
                      className="rounded-r-md h-10 border-l-0 xs:w-full sm:w-full md:w-30 lg:w-30 border border-gray-300 text-sm text-gray-500 "
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
                <div className="lg:w1/2" >
                  <Typography variant="h6" color="blue-gray" className="">
                    Your Email
                  </Typography>
                  <input
                    type="text"
                    size="lg"
                    placeholder="name@mail.com"
                    className="h-10 rounded-lg border border-gray-300 text-sm w-full "
                  
                  />
                </div>
               
              </div>
              <div className="mb-3 block form-control input-group border-none w-full">
                <Typography>
                  How can we assist you
                </Typography>
                
                <select className="w-full rounded-lg border border-gray-300 text-sm text-gray-500" >
                  <option value="select option">Select an option</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Food</option>
                </select>
                
              </div>
            </div>
            
            
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea id="message" rows="4" class="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

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
              containerProps={{ className: "pr-3"  }}
            />
            <Button className="mt-6 capitalize bg-orange-500" fullWidth>
              Send message
            </Button>
            
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contacts
