"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Brain, Server } from "lucide-react"

const skillCategories = [
  {
    title: "AI & Agents",
    icon: Brain,
    skills: [
      { name: "Python", level: 90 },
      { name: "OpenAI Agents SDK", level: 85 },
      { name: "Multi-Agent Systems", level: 85 },
      { name: "RAG", level: 85 },
      { name: "MCP (Model Context Protocol)", level: 80 },
      { name: "Computer Vision", level: 75 },
    ]
  },
  {
    title: "Backend, Data & Cloud",
    icon: Server,
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Docker", level: 75 },
      { name: "Azure / Microsoft Fabric", level: 70 },
      { name: "Odoo Integration", level: 70 },
    ]
  },
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Angular", level: 75 },
      { name: "Git & GitHub", level: 90 },
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
            The stack I use to ship production AI systems, from agents and RAG to APIs, cloud data platforms and polished front ends.
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