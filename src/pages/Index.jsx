import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hospital, Stethoscope, Euro } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Medical Tourism in Germany</h1>
        <p className="text-xl text-gray-600">World-class healthcare in the heart of Europe</p>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="hospitals">Top Hospitals</TabsTrigger>
          <TabsTrigger value="treatments">Popular Treatments</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Germany for Medical Treatment?</CardTitle>
              <CardDescription>Discover the benefits of German healthcare</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>World-renowned medical expertise and technology</li>
                <li>Shorter waiting times compared to many other countries</li>
                <li>Strict quality control and hygiene standards</li>
                <li>Beautiful surroundings for recovery and rehabilitation</li>
                <li>Excellent infrastructure and easy accessibility</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hospitals">
          <Card>
            <CardHeader>
              <CardTitle>Top Hospitals in Germany</CardTitle>
              <CardDescription>Leading medical institutions for international patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Charité - Universitätsmedizin Berlin", location: "Berlin" },
                  { name: "University Hospital Heidelberg", location: "Heidelberg" },
                  { name: "Munich Municipal Hospital", location: "Munich" },
                  { name: "University Medical Center Hamburg-Eppendorf", location: "Hamburg" },
                ].map((hospital, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Hospital className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-semibold">{hospital.name}</p>
                      <p className="text-sm text-gray-500">{hospital.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="treatments">
          <Card>
            <CardHeader>
              <CardTitle>Popular Treatments</CardTitle>
              <CardDescription>Common procedures sought by medical tourists</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Orthopedic Surgery",
                  "Cancer Treatment",
                  "Cardiovascular Procedures",
                  "Neurosurgery",
                  "Fertility Treatments",
                  "Dental Procedures",
                ].map((treatment, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Stethoscope className="h-5 w-5 text-green-500" />
                    <p>{treatment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <Button onClick={() => alert("Contact form will be implemented here")}>
          <Euro className="mr-2 h-4 w-4" /> Get a Cost Estimate
        </Button>
      </div>
    </div>
  );
};

export default Index;
