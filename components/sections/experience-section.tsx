"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, FileText, Heart, Rocket } from "lucide-react"

const experiences = [
  {
    title: "Stream Coordinator",
    company: "Stream Academy International",
    period: "Current",
    description: "Leading and managing sessions in AI, space science, and web development. Organizing hands-on learning experiences and coordinating educational initiatives across multiple technical disciplines.",
    icon: Briefcase,
    highlights: ["AI Education", "Session Management", "Technical Leadership", "Team Coordination"]
  },
  {
    title: "Content Writer",
    company: "Engagex Digital",
    period: "Recent",
    description: "Created engaging digital content with SEO strategy for tech and business niches. Developed comprehensive content marketing strategies and optimized content for maximum engagement and search visibility.",
    icon: FileText,
    highlights: ["SEO Strategy", "Digital Marketing", "Content Creation", "Tech Writing"]
  },
  {
    title: "Volunteer",
    company: "Mommyology",
    period: "Community Service",
    description: "Assisted in nature-based learning events for children. Supported educational activities focused on environmental awareness and outdoor learning experiences.",
    icon: Heart,
    highlights: ["Nature Education", "Child Development", "Event Support", "Community Engagement"]
  },
  {
    title: "Volunteer",
    company: "Destination Imagination Pakistan",
    period: "Competition Support",
    description: "Supported teams in national creativity tournaments. Helped facilitate creative problem-solving challenges and provided mentorship to participating teams.",
    icon: Users,
    highlights: ["Creative Mentorship", "Team Support", "Problem Solving", "Competition Management"]
  },
  {
    title: "Frontend Developer",
    company: "NASA Space Apps Challenge",
    period: "Hackathon",
    description: "Designed frontend interfaces for space tech hackathon projects. Collaborated with cross-functional teams to develop innovative solutions for space-related challenges.",
    icon: Rocket,
    highlights: ["Frontend Development", "Space Technology", "Hackathon", "Team Collaboration"]
  }
]

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0], index: number }) => {
  const IconComponent = experience.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-1/2 top-full h-8 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 transform -translate-x-1/2 z-10" />
      )}
      
      <Card className="relative bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2 hover:border-blue-500/50 transition-all duration-300 group">
        {/* Timeline dot */}
        <div className="absolute left-1/2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20" />
        
        <CardHeader className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-teal-500/20 group-hover:from-blue-500/30 group-hover:to-teal-500/30 transition-all duration-300">
              <IconComponent className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                {experience.title}
              </CardTitle>
              <p className="text-lg font-semibold text-muted-foreground">
                {experience.company}
              </p>
              <p className="text-sm text-muted-foreground">
                {experience.period}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.highlights.map((highlight) => (
              <Badge key={highlight} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through diverse roles in education, content creation, and technology development, building expertise across multiple domains.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}