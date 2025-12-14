import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Premium background card with subtle glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-indigo-600/10 rounded-3xl blur-xl opacity-70" />
      
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="relative space-y-8 bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50"
          data-testid="form-contact"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
              Contactez-nous
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Nous serons ravis de répondre à toutes vos questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/90 font-medium">Nom complet</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Votre nom complet" 
                      className="h-12 rounded-xl border-border/50 focus:border-primary focus:ring-primary/30 bg-background/70"
                      {...field} 
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/90 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="h-12 rounded-xl border-border/50 focus:border-primary focus:ring-primary/30 bg-background/70"
                      {...field} 
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Téléphone (optionnel)</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    placeholder="+216 XX XXX XXX" 
                    className="h-12 rounded-xl border-border/50 focus:border-primary focus:ring-primary/30 bg-background/70"
                    {...field} 
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/90 font-medium">Votre message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Écrivez votre message ici..." 
                    className="min-h-[160px] rounded-xl border-border/50 focus:border-primary focus:ring-primary/30 bg-background/70 resize-none"
                    {...field} 
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-6">
            <Button 
              type="submit" 
              size="xl" 
              className={cn(
                "w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600",
                "hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700",
                "text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl",
                "transition-all duration-500 group"
              )}
              data-testid="button-submit"
            >
              <Send className="mr-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              Envoyer le message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}