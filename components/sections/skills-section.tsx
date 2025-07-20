"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "React", level: 80 },
      { name: "shadcn/ui", level: 85 },
    ]
  },
  {
    title: "Backend & AI Basics",
    icon: Brain,
    skills: [
      { name: "Python", level: 75 },
      { name: "APIs", level: 80 },
      { name: "Mistral LLM", level: 70 },
      { name: "Streamlit", level: 75 },
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "VSCode", level: 95 },
    ]
  }
]

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const IconComponent = category.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2 hover:border-blue-500/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <IconComponent className="h-8 w-8 text-blue-500" />
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.2) + (skillIndex * 0.1) }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across frontend development, AI technologies, and essential development tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}