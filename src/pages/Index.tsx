import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto max-w-2xl space-y-8">
      {/* Header Row with Image Spots */}
        <div className="flex items-center justify-center gap-6">
          {/* Image Spot #1 */}
          <Card className="border-2 border-border bg-card">
            <CardContent className="flex h-24 w-24 items-center justify-center p-2">
              <span className="text-xs text-muted-foreground">Image</span>
            </CardContent>
          </Card>

          {/* Header */}
          <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Splat_FR
          </h1>

          {/* Image Spot #2 */}
          <Card className="border-2 border-border bg-card">
            <CardContent className="flex h-24 w-24 items-center justify-center p-2">
              <span className="text-xs text-muted-foreground">Image</span>
            </CardContent>
          </Card>
        </div>

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
  );
};

export default Index;
