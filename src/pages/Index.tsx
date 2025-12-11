import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Spiral = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 50 C50 40 60 40 60 50 C60 60 40 60 40 50 C40 35 65 35 65 50 C65 65 35 65 35 50 C35 30 70 30 70 50 C70 70 30 70 30 50 C30 25 75 25 75 50 C75 75 25 75 25 50 C25 20 80 20 80 50" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>;

const SquareSpiral = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M50 50 L60 50 L60 60 L40 60 L40 40 L70 40 L70 70 L30 70 L30 30 L80 30 L80 80 L20 80 L20 20 L90 20 L90 90 L10 90 L10 10" stroke="white" strokeWidth="2" strokeLinecap="square" opacity="0.6" />
  </svg>;
const Index = () => {
  return <div className="relative min-h-screen overflow-hidden bg-background-outer p-4 md:p-8">
      {/* Decorative Spirals */}
      <Spiral className="absolute left-2 top-12 h-16 w-16" />
      <Spiral className="absolute left-8 top-1/3 h-24 w-24" />
      <Spiral className="absolute bottom-20 left-4 h-12 w-12" />
      <Spiral className="absolute bottom-1/4 left-6 h-20 w-20" />
      <Spiral className="absolute right-4 top-20 h-20 w-20" />
      <Spiral className="absolute right-10 top-1/2 h-14 w-14" />
      <Spiral className="absolute bottom-32 right-6 h-24 w-24" />
      <Spiral className="absolute bottom-8 right-2 h-10 w-10" />
      <Spiral className="absolute left-1/4 top-4 h-10 w-10 md:left-12" />
      <SquareSpiral className="absolute left-16 top-8 h-12 w-12" />
      
      <SquareSpiral className="absolute left-6 bottom-1/3 h-14 w-14" />
      <SquareSpiral className="absolute right-8 bottom-16 h-10 w-10" />
      <SquareSpiral className="absolute left-1/3 bottom-8 h-16 w-16" />
      <SquareSpiral className="absolute right-1/3 top-16 h-12 w-12" />
      <Spiral className="absolute bottom-4 right-1/4 h-16 w-16 md:right-16" />
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