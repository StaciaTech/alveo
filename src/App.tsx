import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import GetInvolved from "./pages/GetInvolved";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Overview from "./pages/about/Overview";
import VisionMission from "./pages/about/VisionMission";
import BoardOfTrustees from "./pages/about/BoardOfTrustees";
import Leadership from "./pages/about/Leadership";
import Projects from "./pages/work/Projects";
import ProgrammesEvents from "./pages/work/ProgrammesEvents";
import Careers from "./pages/get-involved/Careers";
import Partner from "./pages/get-involved/Partner";
import Volunteer from "./pages/get-involved/Volunteer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofService from "./pages/TermsofService";
import Transparency from "./pages/Transparency";

const queryClient = new QueryClient();

const App = () => {
  console.log("App component is rendering");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/overview" element={<Overview />} />
                <Route
                  path="/about/vision-mission"
                  element={<VisionMission />}
                />
                <Route
                  path="/about/board-of-trustees"
                  element={<BoardOfTrustees />}
                />
                <Route path="/about/leadership" element={<Leadership />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/projects" element={<Projects />} />
                <Route
                  path="/work/programmes-events"
                  element={<ProgrammesEvents />}
                />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/get-involved/volunteer" element={<Volunteer />} />
                <Route path="/get-involved/partner" element={<Partner />} />
                <Route path="/get-involved/careers" element={<Careers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsofService />} />
                <Route path="/transparency" element={<Transparency />} />

                {/*About */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
