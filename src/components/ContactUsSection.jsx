import { Image, Input, Textarea } from "@nextui-org/react";
import customerSupport from "../assets/customer-care.png";

const ContactUsSection = () => {
    return (
      <div className="w-[90%] md:w-[80%] mx-auto flex gap-4">
        <div className="flex gap-6 flex-col">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            <h1 className="text-mainText text-4xl font-bold whitespace-nowrap">
              Contact us
            </h1>
            <div className="text-md">
              <p className="text-mainText">
                We are a collective of passionate dedicated to delivering
                immersive audio experiences that resonate with your heart &
                mind.
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
            <div className="bg-primary h-full flex flex-col gap-4 p-3">
              <h2 className="text-2xl font-bold">Contact details</h2>
              <div className="grid lg:grid-cols-2 gap-8 mt-4">
                <div>
                  <h3 className="text-md">Email</h3>
                  <p className="text-sm">
                    You can email us at support@example.com
                  </p>
                  <p className="text-sm text-mainText">
                    Whether you have inquiries about our podcasts, need
                    technical support.
                  </p>
                </div>

                <div>
                  <h3 className="text-md">Customer Support</h3>
                  <p className="text-sm">
                    You can contact us at: (258) 555-1058
                  </p>
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <Input
                  type="text"
                  label="Your name"
                  placeholder="Enter your name"
                  className="w-full bg-background rounded-xl"
                  variant="bordered"
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  className="w-full bg-background rounded-xl"
                  variant="bordered"
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message..."
                  className="w-full bg-background rounded-xl"
                  variant="bordered"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactUsSection;
