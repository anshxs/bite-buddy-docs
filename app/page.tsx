import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Bite Buddy Documentation</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Overview</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#guide" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">User Guide</a>
              <a href="#technical" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Technical</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bite Buddy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI that decodes your plate into calories, macros, and healthier choices.
            </p>
            <p className="text-lg text-gray-700 mb-12">
              An AI-powered nutritional tracking and recommendation platform designed to empower users with immediate, ingredient-aware insights into the food they consume.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#overview" className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Get Started
              </a>
              <a href="#guide" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                User Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Product Overview */}
        <section id="overview" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Problem We Solve</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>The Awareness Gap:</strong> Many individuals lack consistent, real-time awareness of their meal's calorie and nutrient content, leading to inconsistent energy levels, poor dietary habits, and reduced focus throughout the day.</p>
                <p><strong>Escalating Health Risks:</strong> High-risk consumption patterns, specifically characterized by macronutrient imbalance, contribute to the rapid emergence of Non-Communicable Diseases (NCDs), including high blood pressure, elevated cardiometabolic risk, and obesity.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Health Crisis</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• High rates of child stunting (34.7%) and wasting (17.3%)</li>
                <li>• Rising prevalence of teen overweight and obesity</li>
                <li>• Significant adult diabetes prevalence (9.0% women, 10.2% men)</li>
                <li>• Increased risk of type-2 diabetes and hypertension</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Target Outcomes & Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">📊</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Nutritional Awareness</h4>
                <p className="text-sm text-gray-600">Clear, instant understanding of what you eat</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reduced Disease Risk</h4>
                <p className="text-sm text-gray-600">Mitigates high blood pressure, obesity, and diet-related NCDs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalized Insights</h4>
                <p className="text-sm text-gray-600">Actionable data tailored to your specific meals</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="features" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Bite Buddy Works</h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hybrid AI Architecture</h3>
            <p className="text-gray-700 mb-6">
              The system uses a Hybrid AI Model (Convolutional Neural Networks [CNN] + Vision Transformers [ViT]) to ensure high accuracy and robust, scalable food recognition across diverse cuisines and presentation styles.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">📸</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Image Capture</h4>
                <p className="text-sm text-gray-600">Simple photo of your plate</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">🔍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Food Segmentation</h4>
                <p className="text-sm text-gray-600">AI isolates each ingredient</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">🏷️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Classification</h4>
                <p className="text-sm text-gray-600">Determines dish type & context</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 font-bold">📈</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Analysis</h4>
                <p className="text-sm text-gray-600">Nutritional mapping & results</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Calorie & Macro Estimation</h4>
              <p className="text-gray-600 text-sm">Precise estimates for total calories, protein, fats, and carbohydrates based on detected food items and portions.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Portion & Cooking Adjustment</h4>
              <p className="text-gray-600 text-sm">Ingredient-aware predictions that factor in portion sizes and cooking methods affecting caloric density.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Healthier Alternatives</h4>
              <p className="text-gray-600 text-sm">Proactive, contextually relevant recommendations for improved dietary choices.</p>
            </div>
          </div>
        </section>

        {/* User Guide with Screenshots */}
        <section id="guide" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">User Guide & Screenshots</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>1. Onboarding:</strong> Set up your profile and dietary preferences for personalized analysis.</p>
                <p><strong>2. Photo Capture:</strong> Take a clear photo of your meal with good lighting for optimal analysis.</p>
                <p><strong>3. Review Results:</strong> View detailed nutritional breakdown and recommendations.</p>
                <p><strong>4. Track Progress:</strong> Monitor your nutritional intake over time with comprehensive statistics.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Image
                src="/onboarding-data-selection.jpg"
                alt="Onboarding data selection screen"
                width={400}
                height={300}
                className="w-full rounded-lg shadow-sm"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">Onboarding: Selecting your dietary preferences</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/home-screen-stats.jpg"
                alt="Home screen with nutrition statistics"
                width={300}
                height={400}
                className="w-full rounded-xl shadow-sm mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Dashboard Overview</h4>
              <p className="text-sm text-gray-600">Track your daily nutrition goals and progress</p>
            </div>
            <div className="text-center">
              <Image
                src="/upload-ai-analysis.jpg"
                alt="Upload and AI analysis interface"
                width={300}
                height={400}
                className="w-full rounded-xl shadow-sm mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
              <p className="text-sm text-gray-600">Upload your meal photo for instant nutritional analysis</p>
            </div>
            <div className="text-center">
              <Image
                src="/profile-analysis-1.jpg"
                alt="User profile analysis view 1"
                width={300}
                height={400}
                className="w-full rounded-xl shadow-sm mb-4"
              />
              <h4 className="font-semibold text-gray-900 mb-2">Profile Insights</h4>
              <p className="text-sm text-gray-600">Comprehensive analysis of your eating patterns</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Image
              src="/profile-analysis-2.jpg"
              alt="User profile analysis view 2"
              width={600}
              height={400}
              className="mx-auto rounded-xl shadow-sm"
            />
            <p className="text-sm text-gray-600 mt-2">Detailed nutritional trends and recommendations</p>
          </div>
        </section>

        {/* Technical Details */}
        <section id="technical" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical & Business Feasibility</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Feasibility</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Hybrid AI Model:</strong> CNN + ViT architecture ensures accurate, scalable food recognition</p>
                <p><strong>Low Friction UX:</strong> Simple photo input delivers instant nutritional results</p>
                <p><strong>Scalable Architecture:</strong> Supports multi-component dishes and easy addition of new food items</p>
                <p><strong>Data Integration:</strong> Compatible with high-integrity licensed resources like IFCT 2017</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Considerations</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>Cost Efficiency:</strong> Leverages existing ML models and available datasets</p>
                <p><strong>Legal Compliance:</strong> Committed to ethical data sourcing and privacy protection</p>
                <p><strong>Market Ready:</strong> Addresses critical public health challenges with proven technology</p>
                <p><strong>Scalable Growth:</strong> Architecture supports expansion to new regions and cuisines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to transform how people understand their nutrition? Contact Team Larazus for partnerships, support, or inquiries.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Contact Us
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-white transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BB</span>
              </div>
              <span className="text-gray-900 font-semibold">Bite Buddy</span>
            </div>
            <p className="text-sm text-gray-600">© 2025 Team Larazus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
