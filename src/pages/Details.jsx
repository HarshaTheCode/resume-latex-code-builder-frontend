import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Loader2, User, FileText, Briefcase, Award } from 'lucide-react';
import { LLMcontext } from '../context/LLMresponse';
import Navcomponent from '../components/Navcomponent';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { cn } from '../lib/utils';

const steps = [
  { id: "personal", title: "Personal Info", icon: User },
  { id: "summary", title: "Summary & Skills", icon: FileText },
  { id: "experience", title: "Experience", icon: Briefcase },
  { id: "projects", title: "Projects & Certs", icon: Award },
];

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Details = () => {
  // ============ PRESERVED API FUNCTIONALITY ============
  const [resumedata, axiosfecting] = useContext(LLMcontext);
  // =====================================================

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============ PRESERVED FORM DATA STRUCTURE ============
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
    skills: '',
    experience: '',
    education: '',
    projects: '',
    certifications: '',
  });

  // ============ PRESERVED HANDLE CHANGE ============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // =================================================

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // ============ PRESERVED API CALL ============
    axiosfecting();
    // ============================================
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  // Step validation
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return true; // Optional step
      case 2:
        return true; // Optional step
      case 3:
        return true; // Optional step
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF6] text-[#1a1a1a] selection:bg-[#B8860B]/20">
      <Navcomponent />

      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Side: Multi-Step Form */}
          <div className="w-full lg:w-[60%]">

            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-3">
                Build Your Resume
              </h1>
              <p className="text-lg text-[#4A4A4A]">
                Enter your details step by step and let our AI craft your perfect resume.
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex justify-between mb-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center flex-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2",
                          index < currentStep
                            ? "bg-[#B8860B] border-[#B8860B] text-white"
                            : index === currentStep
                              ? "bg-[#000] border-[#1a1a1a] text-white ring-4 ring-[#B8860B]/20"
                              : "bg-white border-[#1a1a1a]/20 text-[#4A4A4A]"
                        )}
                        onClick={() => {
                          if (index <= currentStep) {
                            setCurrentStep(index);
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {index < currentStep ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <Icon className="w-5 h-5" />
                        )}
                      </motion.div>
                      <motion.span
                        className={cn(
                          "text-xs mt-2 text-center hidden sm:block font-medium",
                          index === currentStep
                            ? "text-[#1a1a1a]"
                            : index < currentStep
                              ? "text-[#B8860B]"
                              : "text-[#4A4A4A]"
                        )}
                      >
                        {step.title}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#1a1a1a]/10 h-2 rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-[#1a1a1a]/10 shadow-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={contentVariants}
                  >
                    {/* Step 1: Personal Info */}
                    {currentStep === 0 && (
                      <>
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                          <CardDescription>
                            Let's start with your basic contact details
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="e.g. Alex Morgan"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="e.g. alex@example.com"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </motion.div>
                          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="e.g. +1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="location">Location</Label>
                              <Input
                                id="location"
                                name="location"
                                placeholder="e.g. San Francisco, CA"
                                value={formData.location}
                                onChange={handleChange}
                              />
                            </div>
                          </motion.div>
                          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                              <Label htmlFor="linkedin">LinkedIn</Label>
                              <Input
                                id="linkedin"
                                name="linkedin"
                                placeholder="e.g. linkedin.com/in/alex"
                                value={formData.linkedin}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="website">Website</Label>
                              <Input
                                id="website"
                                name="website"
                                placeholder="e.g. alexmorgan.dev"
                                value={formData.website}
                                onChange={handleChange}
                              />
                            </div>
                          </motion.div>
                        </CardContent>
                      </>
                    )}

                    {/* Step 2: Summary & Skills */}
                    {currentStep === 1 && (
                      <>
                        <CardHeader>
                          <CardTitle>Summary & Skills</CardTitle>
                          <CardDescription>
                            Tell us about your professional background
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="summary">Professional Summary</Label>
                            <Textarea
                              id="summary"
                              name="summary"
                              placeholder="Briefly describe your professional background, experience, and career goals..."
                              value={formData.summary}
                              onChange={handleChange}
                              className="min-h-[120px]"
                            />
                          </motion.div>
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="skills">Skills</Label>
                            <Textarea
                              id="skills"
                              name="skills"
                              placeholder="List your key skills separated by commas. e.g. React, Node.js, Python, TypeScript, AWS..."
                              value={formData.skills}
                              onChange={handleChange}
                              className="min-h-[100px]"
                            />
                          </motion.div>
                        </CardContent>
                      </>
                    )}

                    {/* Step 3: Experience & Education */}
                    {currentStep === 2 && (
                      <>
                        <CardHeader>
                          <CardTitle>Experience & Education</CardTitle>
                          <CardDescription>
                            Share your work history and educational background
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="experience">Work Experience</Label>
                            <Textarea
                              id="experience"
                              name="experience"
                              placeholder="Describe your work history. Include job title, company, dates, and key responsibilities/achievements..."
                              value={formData.experience}
                              onChange={handleChange}
                              className="min-h-[140px]"
                            />
                          </motion.div>
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="education">Education</Label>
                            <Textarea
                              id="education"
                              name="education"
                              placeholder="List your educational background. Include degree, institution, graduation year..."
                              value={formData.education}
                              onChange={handleChange}
                              className="min-h-[100px]"
                            />
                          </motion.div>
                        </CardContent>
                      </>
                    )}

                    {/* Step 4: Projects & Certifications */}
                    {currentStep === 3 && (
                      <>
                        <CardHeader>
                          <CardTitle>Projects & Certifications</CardTitle>
                          <CardDescription>
                            Highlight your key projects and professional certifications
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="projects">Key Projects</Label>
                            <Textarea
                              id="projects"
                              name="projects"
                              placeholder="Describe notable projects you've worked on. Include project name, your role, technologies used, and outcomes..."
                              value={formData.projects}
                              onChange={handleChange}
                              className="min-h-[140px]"
                            />
                          </motion.div>
                          <motion.div variants={fadeInUp} className="space-y-2">
                            <Label htmlFor="certifications">Certifications</Label>
                            <Textarea
                              id="certifications"
                              name="certifications"
                              placeholder="List professional certifications. e.g. AWS Solutions Architect, Google Cloud Engineer..."
                              value={formData.certifications}
                              onChange={handleChange}
                              className="min-h-[100px]"
                            />
                          </motion.div>
                        </CardContent>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <CardFooter className="flex justify-between pt-6 pb-6 border-t border-[#1a1a1a]/10">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" /> Back
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="button"
                      onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                      disabled={!isStepValid() || isSubmitting}
                      variant={currentStep === steps.length - 1 ? "accent" : "default"}
                      className="flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Generating...
                        </>
                      ) : (
                        <>
                          {currentStep === steps.length - 1 ? "Generate Resume" : "Next"}
                          {currentStep === steps.length - 1 ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </>
                      )}
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Step indicator text */}
            <motion.div
              className="mt-4 text-center text-sm text-[#4A4A4A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
            </motion.div>
          </div>

          {/* Right Side: Result Preview */}
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl border border-[#1a1a1a]/10 overflow-hidden flex flex-col h-[calc(100vh-140px)]"
              >
                <div className="p-4 border-b border-[#1a1a1a]/10 bg-[#FDFBF6] flex items-center justify-between">
                  <h3 className="font-bold text-[#1a1a1a]">Preview</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                </div>

                <div className="flex-grow overflow-auto p-0 bg-[#1e1e1e] relative">
                  <pre className="w-full h-full p-6 text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
                    <code>
                      {resumedata || "// Your generated resume content will appear here...\n// Fill out the form to the left to get started."}
                    </code>
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Details;