import { Button, Image, Input, Textarea } from "@nextui-org/react";
import customerSupport from "../assets/customer-care.png";
import { useState } from "react";
import { WEB3_API_KEY } from "../constants";
const ContactUsSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", WEB3_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="w-[90%] md:w-[80%] mx-auto flex gap-4">
      <div className="flex gap-6 flex-col">
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <h1 className="text-white text-4xl font-bold whitespace-nowrap">
            Contact us
          </h1>
          <div className="text-md">
            <p className="text-gray-300">
              We are a collective of passionate individuals dedicated to
              delivering immersive audio experiences that resonate with your
              heart & mind.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-[2fr_3fr] gap-3 rounded-md w-full overflow-hidden">
          <img
            src={customerSupport}
            alt="Contact us"
            loading="lazy"
            className="object-cover w-full h-[400px] md:h-full"
          />
          <div className="h-full flex flex-col gap-4 p-3">
            <h2 className="text-2xl font-bold text-white">Contact details</h2>
            <div className="grid lg:grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="text-md text-gray-200">Email</h3>
                <p className="text-sm text-gray-400">
                  You can email us at ceo@journeystory.in
                </p>
                <p className="text-sm text-gray-400">
                  Whether you have inquiries about our podcasts or need
                  technical support, feel free to reach out.
                </p>
              </div>
              <div>
                <h3 className="text-md text-gray-200">Customer Support</h3>
                <p className="text-sm text-gray-400">
                  You can contact us at: +91 8530975857
                </p>
              </div>
            </div>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <Input
                type="text"
                label="Your name"
                placeholder="Enter your name"
                className="w-full text-white rounded-xl border border-gray-800"
                variant="bordered"
              />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                className="w-full text-white rounded-xl border border-gray-800"
                variant="bordered"
              />
              <Textarea
                label="Message"
                placeholder="Enter your message..."
                className="w-full text-white rounded-xl border border-gray-800"
                variant="bordered"
              />
              <Button className="bg-primary font-bold text-white" type="submit">
                Send
              </Button>
            </form>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
