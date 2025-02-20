'use client'

import Link from "next/link"
import { Shirt, Key, Lock, Scissors } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import styles from './services.module.css'

interface Service {
  id: string
  title: string
  description: string
  price: string
  icon: string
  features: string[]
}

const AnimatedIcon = ({ type }: { type: string }) => {
  const renderIcon = () => {
    switch (type) {
      case 'dry-cleaning':
        return (
          <div className={styles.iconContainer}>
            <Shirt className={`${styles.icon} ${styles.dryCleaningIcon}`} />
            <div className={styles.sparkleContainer}>
              <div className={`${styles.sparkle} ${styles.sparkle1}`}>⭐</div>
              <div className={`${styles.sparkle} ${styles.sparkle2}`}>⭐</div>
              <div className={`${styles.sparkle} ${styles.sparkle3}`}>⭐</div>
              <div className={`${styles.sparkle} ${styles.sparkle4}`}>⭐</div>
            </div>
          </div>
        );
      case 'alterations':
        return (
          <div className={styles.iconContainer}>
            <Scissors className={`${styles.icon} ${styles.alterationsIcon}`} />
          </div>
        );
      case 'key-cutting':
        return (
          <div className={styles.iconContainer}>
            <Key className={`${styles.icon} ${styles.keyIcon}`} />
            <Lock className={`${styles.icon} ${styles.lockIcon}`} />
          </div>
        );
      default:
        return null;
    }
  };

  return renderIcon();
};

const services: Service[] = [
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    description: "Professional dry cleaning service for your delicate garments, suits, dresses, and more.",
    price: "From $15",
    icon: "dry-cleaning",
    features: [
      "Gentle cleaning process",
      "Stain removal",
      "Professional pressing",
      "Eco-friendly solvents",
      "Same-day service available",
      "Expert care for delicate fabrics"
    ],
  },
  {
    id: "alterations",
    title: "Clothing Alterations",
    description: "Expert tailoring and alterations to ensure your garments fit perfectly and look their best.",
    price: "From $10",
    icon: "alterations",
    features: [
      "Professional tailoring",
      "Hemming and length adjustments",
      "Size modifications",
      "Zipper replacements",
      "Quick turnaround time",
      "Experienced seamstresses"
    ],
  },
  {
    id: "key-cutting",
    title: "Key Cutting",
    description: "Precise key cutting service for home, office, or vehicle keys.",
    price: "From $5",
    icon: "key-cutting",
    features: [
      "Residential and commercial keys",
      "Car key duplication",
      "High-security key cutting",
      "Quick turnaround",
      "Wide range of key blanks",
      "Experienced technicians"
    ],
  },
]

export function ServicesPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience top-quality dry cleaning and reliable key cutting services. 
          Visit our store for personalized care and attention to detail.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className={`flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-blue-100 ${styles.serviceCard}`}>
            <CardHeader className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 opacity-80"></div>
              <div className="relative z-10">
                <AnimatedIcon type={service.icon} />
                <CardTitle className="text-2xl mb-2 text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">{service.price}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all" asChild>
                <Link 
                  href={
                    service.id === "dry-cleaning" 
                      ? "/services/dry-cleaning" 
                      : service.id === "alterations"
                      ? "/services/alterations"
                      : service.id === "key-cutting"
                      ? "/services/key-cutting"
                      : "/contact"
                  }
                >
                  {service.id === "dry-cleaning" 
                    ? "View Dry Cleaning Services" 
                    : service.id === "alterations"
                    ? "View Alteration Services"
                    : service.id === "key-cutting"
                    ? "View Key Cutting Services"
                    : "Learn More"
                  }
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Additional Information */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Store</h2>
        <p className="text-gray-600 mb-6">
          For the best service experience, visit our store to discuss your dry cleaning needs 
          or get keys cut on the spot. Our experienced staff is ready to assist you.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all" asChild>
          <Link href="/contact">Find Our Location</Link>
        </Button>
      </div>
    </div>
  )
}