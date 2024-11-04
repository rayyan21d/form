import { Steps, DatePicker, Button } from "antd";
import { useState, useContext, createContext } from "react";
import { Card, Divider } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";

const FormContext = createContext(1);

const Form = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-blue-900">
        {/* Main Content Section */}
        <div className="grid grid-cols-7 p-8 gap-10 flex-grow">
          {/* Sidebar with Steps */}
          <div className="col-span-2 text-white">
            <div className="mb-8 text-center bg-gray-100 p-4 rounded-lg">
              <img
                src="/path-to-logo.png"
                alt="Logo"
                className="h-16 mx-auto"
              />
            </div>
            <Steps
              direction="vertical"
              current={step}
              items={[
                { title: "STEP 1", description: "Agreement Basics" },
                { title: "STEP 2", description: "Parking Spaces & Rates" },
                { title: "STEP 3", description: "Payment Processing Info" },
                { title: "STEP 4", description: "Preferences" },
                { title: "STEP 5", description: "Authorization" },
                { title: "STEP 6", description: "Preview & Generate PDF" },
              ]}
            />
          </div>

          {/* Main Form Section */}
          <div className="col-span-5">
            <FormContext.Provider value={step}>
              <FormSection />
            </FormContext.Provider>
          </div>
        </div>

        {/* Navigation Buttons Section at Bottom */}
        <div className="flex justify-between p-8 space-x-4 bg-blue-900">
          <Button
            onClick={handlePrevious}
            disabled={step === 0}
            type="primary"
            className="w-1/2 text-white font-semibold py-2 rounded-lg border-0"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            type="primary"
            className="w-1/2 bg-green-700 text-white font-semibold py-2 rounded-lg  "
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

const FormSection = () => {
  const step = useContext(FormContext);

  return (
    <div className="p-6 lg:min-w-96 border-2 rounded-lg shadow-md bg-white text-black font-sans">
      {step === 0 && <Section0 />}
      {step === 1 && <Section1 />}
      {step === 2 && <Section2 />}
      {step === 3 && <Section3 />}
      {step === 4 && <Section4 />}
      {step === 5 && <Section5 />}
    </div>
  );
};

export default Form;

const Section0 = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onDateChange = (date: any, dateString: any) => {
    console.log("Selected Date:", dateString);
    console.log(date);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="h-24 bg-cover bg-center rounded-lg mb-4"
          style={{ backgroundImage: "url('/path-to-image.jpg')" }}
        ></div>
        <h2 className="font-bold text-lg">
          Detail of the Spaces you want to put on BTP
        </h2>
        <div className="flex flex-col gap-2">
          <label className="text-md font-semibold">
            Enter the Effective Date
          </label>
          <DatePicker onChange={onDateChange} className="w-full" />
          <span className="text-sm text-gray-600">
            The date the agreement starts
          </span>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-600 text-md font-semibold mb-2">
            Your Detail as Site Owner
          </h3>
          <div className="flex flex-col gap-2 p-4 border rounded-lg bg-gray-50">
            <div>
              <label className="block text-gray-500">Name</label>
              <div>Craig E</div>
            </div>
            <div>
              <label className="block text-gray-500">Facility Name</label>
              <div>Rantoul-IL Truck & Trailer Parking</div>
            </div>
            <div>
              <label className="block text-gray-500">Facility Address</label>
              <div>815 Enterprise Dr, Rantoul, IL 61866</div>
            </div>
          </div>
          <div className="mt-10">
            <div className="p-2 text-green-500  rounded-lg bg-green-100 font-semibold text-center">
              Feel Free to reach out to us at +1
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const parkingOptions = [
  {
    title: "Truck Trailer",
    spaces: 12,
    price: {
      daily: "$15.00",
      weekly: "$100.00",
      monthly: "$350.00",
    },
    salesTax: "BTP is allowed to collect Sales Tax",
  },
  {
    title: "Trailer",
    spaces: 10,
    price: {
      daily: "$15.00",
      weekly: "$100.00",
      monthly: "$350.00",
    },
    salesTax: "BTP is allowed to collect Sales Tax",
  },
  {
    title: "Truck",
    spaces: 9,
    price: {
      daily: "$15.00",
      weekly: "$100.00",
      monthly: "$350.00",
    },
    salesTax: "BTP is allowed to collect Sales Tax",
  },
];

const Section1 = () => {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">
        Detail of the Spaces you want to put on BTP
      </h2>
      {parkingOptions.map((option, index) => (
        <Card
          key={index}
          className="mb-4 border rounded-lg shadow-sm"
          title={
            <div className="flex justify-between">
              <span className="font-semibold">{option.title}</span>
              <span className="text-gray-500">{option.spaces} Spaces</span>
            </div>
          }
        >
          <div className="text-md text-gray-800 flex items-center space-x-2">
            <span>{option.price.daily} / Day</span>
            <Divider type="vertical" />
            <span>{option.price.weekly} / Week</span>
            <Divider type="vertical" />
            <span>{option.price.monthly} / Month</span>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <CheckCircleOutlined className="mr-2" />
            <span>{option.salesTax}</span>
          </div>
        </Card>
      ))}
      <div className="p-2 text-green-500  rounded-lg bg-green-100 font-semibold text-center">
        For any concerns please feel free to contact us at +1 458 (896) 4554
      </div>
    </>
  );
};

const Section2 = () => {
  return (
    <>
      <h2 className="text-lg font-bold mb-6">Bank Account Detail</h2>

      <div className="flex flex-col gap-6">
        {/* Routing Number Field */}
        <div>
          <label className="block text-md font-semibold mb-2">
            Routing Number
          </label>
          <Input
            placeholder="Enter Routing Number"
            className="w-full rounded-lg"
          />
          <span className="text-sm text-gray-600">
            Enter the routing number for ACH transfers.
          </span>
        </div>

        {/* Account Number Field */}
        <div>
          <label className="block text-md font-semibold mb-2">
            Account Number
          </label>
          <Input
            placeholder="Enter Bank Account Number"
            className="w-full rounded-lg"
          />
          <span className="text-sm text-gray-600">
            Enter the bank account number for ACH transfers.
          </span>
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  return <>3</>;
};
const Section4 = () => {
  return <>4</>;
};
const Section5 = () => {
  return <>5</>;
};