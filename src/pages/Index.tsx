import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Spiral = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 50 C50 40 60 40 60 50 C60 60 40 60 40 50 C40 35 65 35 65 50 C65 65 35 65 35 50 C35 30 70 30 70 50 C70 70 30 70 30 50 C30 25 75 25 75 50 C75 75 25 75 25 50 C25 20 80 20 80 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const SquareSpiral = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 50 L60 50 L60 60 L40 60 L40 40 L65 40 L65 65 L35 65 L35 35 L70 35 L70 70 L30 70 L30 30 L75 30 L75 75 L25 75 L25 25 L80 25 L80 80" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const DiamondSpiral = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 50 L55 45 L60 50 L55 55 L50 50 L45 40 L60 45 L65 60 L50 65 L35 50 L50 35 L70 50 L50 70 L30 50 L50 30 L75 50 L50 75 L25 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);
const Index = () => {
  return <div className="relative min-h-screen overflow-hidden bg-background-outer p-4 md:p-8 lg:p-12">
      {/* Left Side - Round Spirals */}
      <Spiral className="absolute -left-4 top-8 h-12 w-12" />
      <Spiral className="absolute -left-6 top-32 h-16 w-16" />
      <Spiral className="absolute -left-5 top-56 h-14 w-14" />
      <Spiral className="absolute -left-4 top-80 h-10 w-10" />
      <Spiral className="absolute -left-8 top-[420px] h-18 w-18" />
      <Spiral className="absolute -left-5 top-[540px] h-12 w-12" />
      <Spiral className="absolute -left-6 bottom-72 h-14 w-14" />
      <Spiral className="absolute -left-4 bottom-44 h-10 w-10" />
      <Spiral className="absolute -left-7 bottom-16 h-16 w-16" />
      <Spiral className="absolute -left-10 top-[280px] h-20 w-20" />
      
      {/* Right Side - Round Spirals */}
      <Spiral className="absolute -right-4 top-12 h-12 w-12" />
      <Spiral className="absolute -right-6 top-40 h-16 w-16" />
      <Spiral className="absolute -right-5 top-72 h-10 w-10" />
      <Spiral className="absolute -right-7 top-[380px] h-14 w-14" />
      <Spiral className="absolute -right-4 top-[500px] h-10 w-10" />
      <Spiral className="absolute -right-8 bottom-80 h-18 w-18" />
      <Spiral className="absolute -right-5 bottom-52 h-14 w-14" />
      <Spiral className="absolute -right-6 bottom-24 h-12 w-12" />
      <Spiral className="absolute -right-10 bottom-[360px] h-20 w-20" />
      
      {/* Left Side - Square Spirals */}
      <SquareSpiral className="absolute -left-3 top-20 h-10 w-10" />
      <SquareSpiral className="absolute -left-5 top-44 h-12 w-12" />
      <SquareSpiral className="absolute -left-6 top-[340px] h-14 w-14" />
      <SquareSpiral className="absolute -left-4 top-[480px] h-10 w-10" />
      <SquareSpiral className="absolute -left-7 bottom-60 h-16 w-16" />
      <SquareSpiral className="absolute -left-4 bottom-28 h-10 w-10" />
      <SquareSpiral className="absolute -left-8 bottom-[200px] h-18 w-18" />
      
      {/* Right Side - Square Spirals */}
      <SquareSpiral className="absolute -right-4 top-24 h-10 w-10" />
      <SquareSpiral className="absolute -right-6 top-56 h-14 w-14" />
      <SquareSpiral className="absolute -right-5 top-[320px] h-10 w-10" />
      <SquareSpiral className="absolute -right-7 top-[440px] h-16 w-16" />
      <SquareSpiral className="absolute -right-4 bottom-68 h-12 w-12" />
      <SquareSpiral className="absolute -right-6 bottom-36 h-14 w-14" />
      <SquareSpiral className="absolute -right-8 top-[180px] h-18 w-18" />
      
      {/* Left Side - Diamond Spirals */}
      <DiamondSpiral className="absolute -left-3 top-4 h-8 w-8" />
      <DiamondSpiral className="absolute -left-5 top-64 h-10 w-10" />
      <DiamondSpiral className="absolute -left-4 top-[360px] h-10 w-10" />
      <DiamondSpiral className="absolute -left-6 top-[520px] h-14 w-14" />
      <DiamondSpiral className="absolute -left-4 bottom-52 h-12 w-12" />
      <DiamondSpiral className="absolute -left-5 bottom-8 h-10 w-10" />
      <DiamondSpiral className="absolute -left-7 top-[600px] h-16 w-16" />
      
      {/* Right Side - Diamond Spirals */}
      <DiamondSpiral className="absolute -right-3 top-4 h-8 w-8" />
      <DiamondSpiral className="absolute -right-5 top-52 h-12 w-12" />
      <DiamondSpiral className="absolute -right-4 top-[300px] h-8 w-8" />
      <DiamondSpiral className="absolute -right-6 top-[460px] h-10 w-10" />
      <DiamondSpiral className="absolute -right-5 bottom-44 h-14 w-14" />
      <DiamondSpiral className="absolute -right-4 bottom-12 h-10 w-10" />
      <DiamondSpiral className="absolute -right-7 bottom-[280px] h-16 w-16" />
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
          <CardContent className="min-h-32">
            {/* Channel links will go here */}
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