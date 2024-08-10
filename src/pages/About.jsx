import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>About Medical Tourism in Germany</CardTitle>
          <CardDescription>Learn why Germany is a top destination for medical treatments</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Germany has become one of the leading destinations for medical tourism, attracting patients from around the world with its combination of cutting-edge medical technology, highly skilled doctors, and efficient healthcare system.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Advantages:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>State-of-the-art medical facilities and equipment</li>
            <li>Internationally renowned medical professionals</li>
            <li>Strict quality control and safety standards</li>
            <li>Competitive pricing compared to other Western countries</li>
            <li>No waiting lists for most procedures</li>
            <li>Beautiful and culturally rich environment for recovery</li>
          </ul>
          <p>
            Whether you're seeking specialized treatments, complex surgeries, or innovative therapies, Germany offers a wide range of medical services in a safe and comfortable environment. From major cities to picturesque health resorts, patients can find the perfect setting for their medical journey and recovery.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
