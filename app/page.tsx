import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BiteBuddyDocs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-secondary">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Bite Buddy</h1>
            <p className="text-xl text-muted-foreground font-medium">
              AI that decodes your plate into calories, macros, and healthier choices.
            </p>
            <Badge className="mt-4 bg-black text-[#0f3] font-bold">
              Team Larazus
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Introduction */}
        <section className="mb-8">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Introduction and Product Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Bite Buddy is an AI-powered nutritional tracking and recommendation platform designed to empower users
                with immediate, ingredient-aware insights into the food they consume. Our mission is to bridge the
                awareness gap in nutritional understanding through cutting-edge technology.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Problem Statement */}
        <section className="mb-8">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">The Problem We Solve</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">The Awareness Gap</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Many individuals lack consistent, real-time awareness of their meal's calorie and nutrient content,
                  leading to inconsistent energy levels, poor dietary habits, and reduced focus throughout the day.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">Escalating Health Risks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-risk consumption patterns, characterized by macronutrient imbalance, contribute to the rapid
                  emergence of Non-Communicable Diseases (NCDs), including high blood pressure, elevated cardiometabolic
                  risk, and obesity.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-2">Current Public Health Challenges</h3>
                <ul className="text-muted-foreground space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    High rates of child stunting (34.7%) and wasting (17.3%) indicate ongoing nutritional deficits
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rising prevalence of teen overweight and obesity increases long-term risk of type-2 diabetes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Significant adult diabetes prevalence (9.0% women, 10.2% men) highlights the national crisis
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Target Audience */}
        <section className="mb-8">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Target Audience & Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Who We Serve</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Individuals across all demographics, primarily teenagers and adults, who are actively seeking to
                  manage their diet, improve nutritional literacy, and achieve specific health and wellness goals.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Demonstrated Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Awareness</Badge>
                      <span className="text-sm">Improved Nutritional Understanding</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Prevention</Badge>
                      <span className="text-sm">Reduced Risk of Lifestyle Diseases</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Habits</Badge>
                      <span className="text-sm">Healthier Eating Patterns</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Insights</Badge>
                      <span className="text-sm">Quick, Personalized Diet Data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="default">Empowerment</Badge>
                      <span className="text-sm">Self-Directed Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* How It Works */}
        <section className="mb-8">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">How Bite Buddy Works</CardTitle>
              <CardDescription>
                Hybrid AI Architecture: CNN + Vision Transformers for high accuracy and scalable food recognition
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="flex items-start space-x-4 p-4 bg-white border border-border rounded-3xl">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Food Image Capture</h4>
                    <p className="text-muted-foreground text-sm">
                      User provides a simple photo of their plate as the primary input
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white border border-border rounded-3xl">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Food Segmentation</h4>
                    <p className="text-muted-foreground text-sm">
                      AI isolates and identifies every individual ingredient/component (rice, broccoli, chicken, sauce)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white border border-border rounded-3xl">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dish Classification</h4>
                    <p className="text-muted-foreground text-sm">
                      System determines overall dish type (salad, stew, sandwich) for contextual analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white border border-border rounded-3xl">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Nutritional Mapping</h4>
                    <p className="text-muted-foreground text-sm">
                      Cross-referenced with comprehensive nutritional databases for accurate data retrieval
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center bg-white p-4 border border-border rounded-4xl">
                  <h3 className="font-semibold mb-2">Calorie & Macro Estimation</h3>
                  <p className="text-muted-foreground text-sm">
                    Precise estimates for calories, protein, fats, and carbohydrates based on detected foods
                  </p>
                </div>

                <div className="text-center bg-white p-4 border border-border rounded-4xl">
                  <h3 className="font-semibold mb-2">Portion & Cooking Adjustment</h3>
                  <p className="text-muted-foreground text-sm">
                    Ingredient-aware predictions factoring portion sizes and cooking methods
                  </p>
                </div>

                <div className="text-center bg-white p-4 border border-border rounded-4xl">
                  <h3 className="font-semibold mb-2">Healthier Alternatives</h3>
                  <p className="text-muted-foreground text-sm">
                    Contextually relevant recommendations for improved dietary choices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feasibility */}
        <section className="mb-12">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Feasibility & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Feasibility</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Hybrid AI (CNN + ViT) model ensures accuracy</li>
                    <li>• Proven approach for scalable food recognition</li>
                    <li>• Low friction user experience</li>
                    <li>• Instant nutritional results</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Business & Legal</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Cost-effective development approach</li>
                    <li>• Leverages existing ML models</li>
                    <li>• Legal & compliant data sourcing</li>
                    <li>• Full regulatory compliance</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Data & Scalability</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Currently using reliable open-access datasets with architecture designed for scalability to
                  high-integrity licensed resources like IFCT 2017. The platform supports multi-component dishes and
                  allows easy addition of new food items or regional cuisine data.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* User Guide */}
        <section className="mb-12">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">User Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Getting Started</h3>
                  <p className="text-muted-foreground text-sm">
                    Simply capture an optimal photo of your meal for analysis. Ensure good lighting and clear visibility
                    of all food items.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Interpreting Results</h3>
                  <p className="text-muted-foreground text-sm">
                    Review the segmentation map, understand the calorie and macro breakdown data, and explore the
                    detailed nutritional analysis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Actionable Insights</h3>
                  <p className="text-muted-foreground text-sm">
                    Apply the healthier alternative suggestions to future meal planning and make informed consumption
                    decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="bg-secondary shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bite Buddy combines high-accuracy AI with personalized, actionable nutrition advice to address the
                critical gap in nutritional awareness. Our platform empowers users to make informed dietary choices,
                reduce health risks, and develop sustainable eating habits through innovative technology.
              </p>
              <div className="text-center pt-4">
                <Badge variant="default" className="text-sm">
                  Team Larazus - 2025
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Bite Buddy - Team Larazus. AI-powered nutritional intelligence.
          </p>
        </div>
      </footer>
    </div>
  )
}
