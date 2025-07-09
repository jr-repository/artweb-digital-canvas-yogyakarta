import { MessageCircle, PenTool, Code, RotateCcw, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Konsultasi",
      description: "Diskusi kebutuhan website, fitur yang diinginkan, dan budget yang tersedia",
      duration: "1-2 hari",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: PenTool,
      title: "Desain Mockup",
      description: "Pembuatan desain mockup sesuai brief dan approval dari klien",
      duration: "3-5 hari",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Pengembangan",
      description: "Coding dan development website sesuai dengan desain yang telah disetujui",
      duration: "7-14 hari",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: RotateCcw,
      title: "Revisi",
      description: "Review hasil dan melakukan revisi sesuai feedback klien",
      duration: "1-3 hari",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Launching",
      description: "Website live dan siap digunakan, termasuk training penggunaan",
      duration: "1 hari",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🔄 Alur Kerja
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proses{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Pengerjaan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proses kerja yang terstruktur dan transparan untuk hasil yang maksimal
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-hero transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Step Number */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-medium">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="border-none shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color}`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          <Badge variant="outline" className="mt-1">
                            {step.duration}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Mobile Step Number */}
                <div className="md:hidden absolute -left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siap Memulai Project Anda?
            </h3>
            <p className="text-muted-foreground mb-6">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan estimasi project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6287821957335" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-gradient-hero text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-strong"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp
              </a>
              <a 
                href="mailto:artwebsitecompany@gmail.com"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Email Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;