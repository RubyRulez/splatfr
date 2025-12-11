import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const spiralPaths = {
  tight: "M50 50 C50 45 55 45 55 50 C55 55 45 55 45 50 C45 42 58 42 58 50 C58 58 42 58 42 50 C42 39 61 39 61 50 C61 61 39 61 39 50 C39 36 64 36 64 50 C64 64 36 64 36 50 C36 33 67 33 67 50 C67 67 33 67 33 50 C33 30 70 30 70 50 C70 70 30 70 30 50 C30 27 73 27 73 50 C73 73 27 73 27 50",
  normal: "M50 50 C50 40 60 40 60 50 C60 60 40 60 40 50 C40 35 65 35 65 50 C65 65 35 65 35 50 C35 30 70 30 70 50 C70 70 30 70 30 50 C30 25 75 25 75 50 C75 75 25 75 25 50 C25 20 80 20 80 50",
  loose: "M50 50 C50 35 65 35 65 50 C65 65 35 65 35 50 C35 25 75 25 75 50 C75 75 25 75 25 50 C25 15 85 15 85 50 C85 85 15 85 15 50"
};

const squareSpiralPaths = {
  tight: "M50 50 L55 50 L55 55 L45 55 L45 45 L60 45 L60 60 L40 60 L40 40 L65 40 L65 65 L35 65 L35 35 L70 35 L70 70 L30 70 L30 30 L75 30 L75 75 L25 75 L25 25 L80 25 L80 80 L20 80 L20 20",
  normal: "M50 50 L60 50 L60 60 L40 60 L40 40 L70 40 L70 70 L30 70 L30 30 L80 30 L80 80 L20 80 L20 20 L90 20 L90 90 L10 90 L10 10",
  loose: "M50 50 L65 50 L65 65 L35 65 L35 35 L80 35 L80 80 L20 80 L20 20 L95 20 L95 95 L5 95 L5 5"
};

type Density = "tight" | "normal" | "loose";

const Spiral = ({
  className,
  strokeWidth = 2,
  density = "normal"
}: {
  className?: string;
  strokeWidth?: number;
  density?: Density;
}) => <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d={spiralPaths[density]} stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" opacity="0.6" />
  </svg>;

const SquareSpiral = ({
  className,
  strokeWidth = 2,
  density = "normal"
}: {
  className?: string;
  strokeWidth?: number;
  density?: Density;
}) => <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d={squareSpiralPaths[density]} stroke="white" strokeWidth={strokeWidth} strokeLinecap="square" opacity="0.6" />
  </svg>;

const Index = () => {
  return <div className="relative min-h-screen overflow-hidden bg-background-outer p-4 md:p-8">
      {/* Decorative Spirals */}
      <Spiral className="absolute left-2 top-12 h-16 w-16" strokeWidth={1} density="tight" />
      <Spiral className="absolute left-8 top-1/3 h-24 w-24" strokeWidth={3} density="loose" />
      <Spiral className="absolute bottom-20 left-4 h-12 w-12" density="tight" />
      <Spiral className="absolute bottom-1/4 left-6 h-20 w-20" strokeWidth={1.5} />
      <Spiral className="absolute right-4 top-20 h-20 w-20" strokeWidth={3} density="loose" />
      <Spiral className="absolute right-10 top-1/2 h-14 w-14" strokeWidth={1} density="tight" />
      <Spiral className="absolute bottom-32 right-6 h-24 w-24" density="loose" />
      <Spiral className="absolute bottom-8 right-2 h-10 w-10" strokeWidth={1.5} density="tight" />
      <Spiral className="absolute left-1/4 top-4 h-10 w-10 md:left-12" strokeWidth={3} />
      <SquareSpiral className="absolute left-16 top-8 h-12 w-12" strokeWidth={1} density="loose" />
      
      <SquareSpiral className="absolute left-6 bottom-1/3 h-14 w-14" strokeWidth={3} density="tight" />
      <SquareSpiral className="absolute right-8 bottom-16 h-10 w-10" density="loose" />
      <SquareSpiral className="absolute left-1/3 bottom-8 h-16 w-16" strokeWidth={1.5} />
      <SquareSpiral className="absolute right-1/3 top-16 h-12 w-12" strokeWidth={1} density="tight" />
      <Spiral className="absolute bottom-4 right-1/4 h-16 w-16 md:right-16" strokeWidth={3} density="loose" />
      
      {/* Additional smaller spirals spread along sides */}
      <Spiral className="absolute left-1 top-24 h-6 w-6" strokeWidth={1} density="loose" />
      <Spiral className="absolute left-3 top-2/3 h-8 w-8" strokeWidth={3} density="tight" />
      <Spiral className="absolute left-10 bottom-12 h-6 w-6" density="loose" />
      <SquareSpiral className="absolute left-2 top-1/2 h-8 w-8" strokeWidth={1.5} density="tight" />
      <SquareSpiral className="absolute left-12 bottom-40 h-6 w-6" strokeWidth={1} />
      
      <Spiral className="absolute right-1 top-32 h-8 w-8" strokeWidth={3} density="loose" />
      <Spiral className="absolute right-12 top-2/3 h-6 w-6" strokeWidth={1} density="tight" />
      <Spiral className="absolute right-3 bottom-1/3 h-8 w-8" />
      <SquareSpiral className="absolute right-2 top-40 h-6 w-6" strokeWidth={1.5} density="loose" />
      <SquareSpiral className="absolute right-14 bottom-24 h-8 w-8" strokeWidth={3} density="tight" />
      <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-3xl rounded-2xl border-4 border-border bg-background p-6 md:p-8">
        <div className="space-y-8">
      {/* Header Row with Image Spots */}
 
          {/* Header */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground text-align: center md:text-7xl text-center">
            Splat_FR
          </h1>

        {/* Divider */}
        <div className="border-t-2 border-border" />

        {/* Channels Section */}
        <Card className="border-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              variant="outline" 
              className="transition-transform duration-200 hover:scale-95"
            >
              <a href="https://youtube.com/@splat_fr" target="_blank" rel="noopener noreferrer">
                <span className="font-bold">Youtube - </span>
                <span>@splat_fr</span>
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Merch Section */}
        <Card className="border-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Merch</CardTitle>
          </CardHeader>
          <CardContent className="flex min-h-32 items-center justify-center">
            <span className="text-3xl font-bold text-muted-foreground">COMING SOON</span>
          </CardContent>
        </Card>

        {/* Partners Section */}
        <Card className="border-2 border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">Partners</CardTitle>
          </CardHeader>
          <CardContent className="min-h-32">
            {/* Partner logos will go here */}
          </CardContent>
        </Card>
        </div>
      </div>
    </div>;
};
export default Index;