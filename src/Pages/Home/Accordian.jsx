import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ChevronDown } from "lucide-react";
import Container from "../../components/container";
import Lottie from "react-lottie";
import animationData from "../../../public/accordian.json";

export default function AccordionUsage() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <Container className="py-20">
         
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex justify-end">
          <Lottie options={lottieOptions} height={300} width={300} />
        </div>
              <div>
                  
              <h1 className='mb-14'>
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">Have you any questions? <br /> Know about us...</span>
                  </h1>
                  
              <div>
                  
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ChevronDown />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      What types of medical products do you offer?
                    </AccordionSummary>
                    <AccordionDetails className="text-gray-500">
                    We offer a wide range of medical products, including nebulizers, diabetes monitoring machines, blood pressure monitors, thermometers, pulse oximeters, and more.
                    </AccordionDetails>
                      </Accordion>
                      
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ChevronDown />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                     Do you provide warranties on your products?
                    </AccordionSummary>
                    <AccordionDetails className="text-gray-500">
                    Yes, we offer warranties on most of our products. The warranty period and terms vary by product and brand. Please check the product page or contact us for details.
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ChevronDown />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      What payment methods do you accept?
                    </AccordionSummary>
                    <AccordionDetails className="text-gray-500">
                    We accept various payment methods, including <span className="text-green-600 font-semibold">bkash/ nagod/ rocket</span> and cash on delivery (available in select locations).
                    </AccordionDetails>
                      </Accordion>
                      
                      <Accordion>
                    <AccordionSummary
                      expandIcon={<ChevronDown />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                     Can I return or exchange a product?
                    </AccordionSummary>
                    <AccordionDetails className="text-gray-500">
                    Yes, we have a hassle-free return and exchange policy. If you’re not satisfied with the product or receive a defective item, you can initiate a return or exchange within <span className="text-red-600 font-semibold">7 days</span> of delivery.
                    </AccordionDetails>
                  </Accordion>
                </div>
      </div>
      </div>
    </Container>
  );
}







