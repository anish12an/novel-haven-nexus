import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Password reset requested for:", email);
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-6">
            <Link to="/" className="inline-flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground transition-all duration-300 group-hover:shadow-glow">
                <BookOpen className="h-7 w-7" />
              </div>
              <span className="text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
                NovelVerse
              </span>
            </Link>

            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-2xl font-playfair font-bold">Check your email</h1>
                <p className="text-muted-foreground">
                  We've sent a password reset link to <br />
                  <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>

              <div className="bg-muted/50 border rounded-lg p-4 text-sm text-muted-foreground">
                <p className="mb-2">Didn't receive the email? Check your spam folder or:</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Try a different email address
                </button>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <Button asChild variant="outline" className="w-full">
              <Link to="/auth/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Link>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link to="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-6">
            <Link to="/" className="inline-flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground transition-all duration-300 group-hover:shadow-glow">
                <BookOpen className="h-7 w-7" />
              </div>
              <span className="text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
                NovelVerse
              </span>
            </Link>
            
            <div className="space-y-2">
              <h1 className="text-3xl font-playfair font-bold">Forgot your password?</h1>
              <p className="text-muted-foreground">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>
          </div>

          {/* Back Link */}
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/auth/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Link>
            </Button>
          </div>

          {/* Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 pl-10"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-primary hover:shadow-glow"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>

          {/* Help Text */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link to="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:block flex-1 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/80 via-primary/60 to-accent/40" />
        
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-center text-primary-foreground space-y-6 max-w-lg">
            <div className="w-24 h-24 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Mail className="w-12 h-12" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-playfair font-bold">
                We're Here to Help
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Forgot your password? No worries! We'll help you get back to your literary adventures in no time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {[
                { icon: "🔐", label: "Secure Reset" },
                { icon: "📧", label: "Email Link" },
                { icon: "⚡", label: "Quick Process" },
                { icon: "🛡️", label: "Safe & Secure" },
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="text-sm text-primary-foreground/80">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;