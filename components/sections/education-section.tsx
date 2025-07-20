"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen } from "lucide-react"

const education = [
  {
    degree: "BS Computer Science",
    institution: "Virtual University of Pakistan",
    status: "Ongoing",
    description: "Online degree program with emphasis on software development, AI, and data structures. Comprehensive curriculum covering algorithms, programming fundamentals, web development, and artificial intelligence.",
    icon: GraduationCap,
    highlights: ["Software Development", "AI & Machine Learning", "Data Structures", "Web Technologies", "Programming Fundamentals"]
  },
  {
    degree: "GIAIC Certified Courses",
    institution: "Governor Initiative for Artificial Intelligence & Computing",
    status: "Ongoing",
    description: "Studying Web Development, Artificial Intelligence, and Cloud Computing with hands-on projects. Advanced curriculum focusing on modern development practices and emerging technologies.",
    icon: BookOpen,
    highlights: ["Web Development", "Artificial Intelligence", "Cloud Computing", "Hands-on Projects", "Modern Tech Stack"]
  }
]

const EducationCard = ({ edu, index }: { edu: typeof education[0], index: number }) => {
  const IconComponent = edu.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2 hover:border-teal-500/50 transition-all duration-300">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20 group-hover:from-teal-500/30 group-hover:to-blue-500/30 transition-all duration-300">
              <IconComponent className="h-8 w-8 text-teal-500" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-teal-500 transition-colors">
                {edu.degree}
              </CardTitle>
              <p className="text-lg font-semibold text-muted-foreground">
                {edu.institution}
              </p>
              <Badge variant="outline" className="mt-2 w-fit">
                {edu.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {edu.description}
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Key Focus Areas:</h4>
            <div className="flex flex-wrap gap-2">
              {edu.highlights.map((highlight) => (
                <Badge key={highlight} variant="secondary" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function EducationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey in computer science, artificial intelligence, and modern web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}