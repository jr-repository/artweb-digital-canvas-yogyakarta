import { useState } from "react";
import { Plus, Edit, Trash2, Eye, Upload, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Toko Elektronik Jaya",
      category: "ecommerce",
      description: "Website e-commerce untuk toko elektronik dengan fitur pembayaran online dan manajemen stok.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      client: "Toko Elektronik Jaya",
      year: "2024",
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "Catering Sari Rasa",
      category: "company",
      description: "Website company profile untuk bisnis catering dengan galeri menu dan sistem pemesanan.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      client: "Catering Sari Rasa",
      year: "2024",
      url: "#",
      featured: false
    }
  ]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    client: "",
    year: "",
    url: "",
    featured: false
  });

  const categories = [
    { id: "company", name: "Company Profile" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "portfolio", name: "Portfolio" },
    { id: "landing", name: "Landing Page" }
  ];

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({ ...project });
    setIsEditMode(true);
  };

  const handleSave = () => {
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...formData, id: editingProject.id }
          : p
      ));
      toast({
        title: "Project Updated",
        description: "Project berhasil diupdate!"
      });
    } else {
      const newProject = {
        ...formData,
        id: Date.now(),
      };
      setProjects([...projects, newProject]);
      toast({
        title: "Project Added",
        description: "Project baru berhasil ditambahkan!"
      });
    }
    
    setIsEditMode(false);
    setEditingProject(null);
    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      client: "",
      year: "",
      url: "",
      featured: false
    });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Project Deleted",
      description: "Project berhasil dihapus!"
    });
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditingProject(null);
    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      client: "",
      year: "",
      url: "",
      featured: false
    });
  };

  const stats = [
    { title: "Total Projects", value: projects.length, color: "from-blue-500 to-cyan-500" },
    { title: "Featured Projects", value: projects.filter(p => p.featured).length, color: "from-purple-500 to-pink-500" },
    { title: "E-commerce", value: projects.filter(p => p.category === "ecommerce").length, color: "from-green-500 to-emerald-500" },
    { title: "Company Profile", value: projects.filter(p => p.category === "company").length, color: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Kelola portfolio dan konten website Artweb
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{stat.value}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{stat.title}</h3>
                    <p className="text-sm text-muted-foreground">Total items</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Portfolio Management
          </h2>
          <Button variant="hero" onClick={() => setIsEditMode(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add New Project
          </Button>
        </div>

        {/* Project Form */}
        {isEditMode && (
          <Card className="mb-8 border-none shadow-medium">
            <CardHeader>
              <CardTitle>
                {editingProject ? "Edit Project" : "Add New Project"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Title
                  </label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter project title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Category
                  </label>
                  <select 
                    className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option value="">Select category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Client Name
                  </label>
                  <Input
                    value={formData.client}
                    onChange={(e) => setFormData({...formData, client: e.target.value})}
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Year
                  </label>
                  <Input
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    placeholder="2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Image URL
                  </label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="Enter image URL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website URL
                  </label>
                  <Input
                    value={formData.url}
                    onChange={(e) => setFormData({...formData, url: e.target.value})}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Enter project description"
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="rounded border-input"
                />
                <label htmlFor="featured" className="text-sm text-foreground">
                  Featured Project
                </label>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="hero" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Project
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Projects List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="border-none shadow-soft hover:shadow-medium transition-shadow">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {project.featured && (
                  <Badge className="absolute top-2 left-2 bg-gradient-hero">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground">{project.title}</h3>
                  <Badge variant="outline">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;