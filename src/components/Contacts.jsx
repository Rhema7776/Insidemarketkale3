import React, { useState} from "react";
import { useCountries } from "use-react-countries";

import {

  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Typography,
  

} from "@material-tailwind/react";
import phone from "../images/Icon (1).png";
import mail from "../images/Icon.png";
import { useForm } from "react-hook-form";

const Contacts = () => {

  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    option: '',
    message: '',
    agreement: ''

  });
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if(!formData.username.trim()){
      validationErrors.username = "username is required"
    }
    if(!formData.email.trim()){
      validationErrors.email = "Email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
      validationErrors.email = "Email is not valid"
    }
  
    if(!formData.option.trim()){
      validationErrors.option = "option, how we can assist you"
    }
    if(!formData.phone.trim()){
      validationErrors.phone = "Phone number is required"
    } else if(!/^\d{10}$/.test(formData.phone)){
      validationErrors.phone = "Phone number is not valid make sure you input the last 10 digits "
    }
    if(!formData.agreement.trim()){
      validationErrors.agreement = "Do you agree with our terms?"
    }
    
    if (Object.keys(validationErrors).length === 0)  {
      alert("Form Submitted successfully")
      
    }

    setErrors(validationErrors)

  };


 

  return (
    <div id="contacts" className="bg-gray-100 py-20  ">
      <div className="container grid md:grid-cols-2 md:max-lg:px-3  mx-auto flex-col gap-4 ">
        <div color="transparent" shadow={false} className="lg:w-96  mt-5 xs:max-lg:px-3">
          <Typography className="font-bold text-sm text-orange-500 ">
            Contact us
          </Typography>
          <Typography className="font-bold text-2xl  ">
            Get in Touch with us
          </Typography>
          <Typography className=" text-sm text-gray-600 mt-4 ">
            Have a question, a suggestion, or just want to say hello? We'd love
            to hear from you!
          </Typography>
          <div className="flex flex-wrap gap-5 mt-6">
            <div>
              <img src={mail} alt="" className="w-5" />
              <Typography className="mt-4">Email</Typography>
              <Typography className="  text-gray-600 text-xs mt-3">
                Our friendly team is here to help
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold mt-4 ">
                examplemail@gmail.com
              </a>
            </div>
            <div>
              <img src={phone} alt="" className="w-4" />
              <Typography className="mt-4">Phone</Typography>
              <Typography className="text-gray-600 text-xs mt-3">
                Mon-Fri from 8am to 5pm
              </Typography>
              <a href="" className="text-orange-400 text-sm font-bold mt-52 ">
                +1 (555) 000-0000
              </a>
            </div>
          </div>
        </div>

        <div className=" container mx-auto ">
          <form  action="" className=" mt-8 mb-2  max-w-screen-lg  bg-white p-5 rounded-lg xs:max-lg:px-3 ">
            <div className="mb-1 flex flex-wrap gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                size="lg"
                placeholder="Your name"
                className=" border border-gray-300 rounded-lg text-sm w-full "
              />
              {errors.username && <span className="text-red-500 text-extrabold">{errors.username}</span>}
              <div className="grid md:grid-cols-2  mx-auto flex-col gap-4  items-center w-full">
                <div className="lg:w1/2">
                  <Typography variant="h6" color="blue-gray" className="">
                    Phone
                  </Typography>


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
                        {countries.map(
                          ({ name, flags, countryCallingCode }, index) => {
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
                                {name}{" "}
                                <span className="ml-auto">
                                  {countryCallingCode}
                                </span>
                              </MenuItem>
                            );
                          }
                        )}
                      </MenuList>
                    </Menu>
                    <input
                      name="phone"
                      onChange={handleChange}
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
                  {errors.phone && <span className="text-red-500 text-extrabold">{errors.phone}</span>}
                  

                </div>
                <div className="lg:w1/2">
                  <Typography variant="h6" color="blue-gray" className="">
                    Your Email
                  </Typography>
                  <input
                    name='email'
                    onChange={handleChange}
                    type="text"
                    size="lg"
                    placeholder="name@mail.com"
                    className="h-10 rounded-lg border border-gray-300 text-sm w-full "
                  />
                  {errors.email && <span className="text-red-500 text-extrabold">{errors.email}</span>}
                </div>
              </div>
              <div className="mb-3 block form-control input-group border-none w-full">
                <Typography>How can we assist you</Typography>

                <select name="option" onChange={handleChange} className="w-full rounded-lg border border-gray-300 text-sm text-gray-500">
                  <option value="select option">Select an option</option>
                  <option value="clothing">Clothing</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Food</option>
                </select>
                {errors.option && <span className="text-red-500 text-extrabold" >{errors.option}</span>}
              </div>
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              rows="4"
              class="mb-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
           

           <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                  onChange={handleChange}
                  
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                   <u>&nbsp;Terms and Conditions</u> 
                  </a>
                </Typography>
              }
              containerProps={{ className: "pr-3"  }}
            />
            <br />
            {errors.agreement && <span className="text-red-500 text-extrabold">{errors.agreement}</span>}
            <Button type='submit' onClick={handleSubmit}   className="mt-6 capitalize bg-orange-500" fullWidth>
              Send message
            </Button> 
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
