"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from '@emailjs/browser'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormData = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration - Replace with your actual values
      await emailjs.send(
        'service_8ykghy8',
        'template_qbzr8ni',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'mustafayamin5@gmail.com',
        },
        'P_Tm0RvXYlaHczj0x'
      )
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      
      form.reset()
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mustafayamin5@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=mustafayamin5@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mustafayamin",
      href: "https://github.com/mustafayamin"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mustafa-yamin",
      href: "https://www.linkedin.com/in/mustafa-yamin/"
    }
  ]

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in web development and AI. I'm always open to new challenges and connections.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-blue-500" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        {...form.register("name")}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-destructive">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      {...form.register("subject")}
                    />
                    {form.formState.errors.subject && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.subject.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-teal-500/20 group-hover:from-blue-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <p className="font-semibold">{info.label}</p>
                          <p className="text-muted-foreground group-hover:text-blue-500 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  )
                })}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 backdrop-blur-sm border-2">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Let's Build Something Amazing</h3>
                <p className="text-muted-foreground">
                  I'm always excited to work on new projects and collaborate with passionate individuals. 
                  Whether you have a project in mind, need technical consultation, or just want to connect, 
                  I'd love to hear from you!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}