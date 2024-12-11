import { Microscope, Award, Users, PhoneCall } from 'lucide-react'
import Container from '../../components/container'
import { Link } from 'react-router-dom'

export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
          <Container>
          <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
              Empowering Healthcare <br />
              <span className="text-blue-600">One Instrument at a Time</span>
            </h2>
            <p className="text-lg text-gray-700">
              At MediTech Instruments, we're dedicated to providing cutting-edge medical equipment to healthcare professionals worldwide. With over two decades of experience, we combine innovation and reliability to support your mission of saving lives.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope, text: "State-of-the-art Technology" },
                { icon: Award, text: "ISO 13485 Certified" },
                { icon: Users, text: "Expert Support Team" },
                { icon: PhoneCall, text: "24/7 Customer Service" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white">
              Discover Our Products
            </Link>
          </div>
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://img.freepik.com/premium-photo/doctor-tools-blue-surface_77249-544.jpg?semt=ais_hybrid"
              alt="Medical professionals using our instruments"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
            <div className="absolute bottom-10 shadow-md left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
              <p className="text-blue-900 font-semibold">
              “ MediTech Instruments has revolutionized our diagnostic capabilities. ”
              </p>
              <p className="text-sm text-gray-600 mt-1">
                - Dr. Emily Chen, Chief of Cardiology
              </p>
            </div>
          </div>
        </div>
      </div>
     </Container>
    </section>
  )
}

