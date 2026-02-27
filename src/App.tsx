import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Plus, Pencil, Trash2, Search } from "lucide-react"

interface Cat {
  id: string
  name: string
  breed: string
  age: string
  description: string
  imageUrl: string
}

const initialCats: Cat[] = [
  {
    id: "1",
    name: "Whiskers",
    breed: "Persian",
    age: "3 years",
    description: "A fluffy and gentle Persian cat who loves to cuddle and nap in sunny spots.",
    imageUrl: "https://placekitten.com/400/300"
  },
  {
    id: "2",
    name: "Mittens",
    breed: "Siamese",
    age: "2 years",
    description: "An elegant Siamese with striking blue eyes and a playful personality.",
    imageUrl: "https://placekitten.com/401/300"
  },
  {
    id: "3",
    name: "Shadow",
    breed: "Maine Coon",
    age: "4 years",
    description: "A majestic Maine Coon with a luxurious coat and friendly demeanor.",
    imageUrl: "https://placekitten.com/402/300"
  }
]

function App() {
  const [cats, setCats] = useState<Cat[]>(initialCats)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCat, setEditingCat] = useState<Cat | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
    imageUrl: ""
  })

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.breed.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleOpenDialog = (cat?: Cat) => {
    if (cat) {
      setEditingCat(cat)
      setFormData({
        name: cat.name,
        breed: cat.breed,
        age: cat.age,
        description: cat.description,
        imageUrl: cat.imageUrl
      })
    } else {
      setEditingCat(null)
      setFormData({
        name: "",
        breed: "",
        age: "",
        description: "",
        imageUrl: ""
      })
    }
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setEditingCat(null)
    setFormData({
      name: "",
      breed: "",
      age: "",
      description: "",
      imageUrl: ""
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingCat) {
      setCats(cats.map(cat =>
        cat.id === editingCat.id
          ? { ...cat, ...formData }
          : cat
      ))
    } else {
      const newCat: Cat = {
        id: Date.now().toString(),
        ...formData,
        imageUrl: formData.imageUrl || `https://placekitten.com/${400 + cats.length}/300`
      }
      setCats([...cats, newCat])
    }

    handleCloseDialog()
  }

  const handleDelete = (id: string) => {
    setCats(cats.filter(cat => cat.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">🐱 Cat Catalogue</h1>
          <p className="text-muted-foreground">Manage your collection of adorable cats</p>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cats by name or breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button onClick={() => handleOpenDialog()}>
            <Plus className="h-4 w-4 mr-2" />
            Add Cat
          </Button>
        </div>

        {filteredCats.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {searchTerm ? "No cats found matching your search." : "No cats in the catalogue yet."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCats.map(cat => (
              <Card key={cat.id} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{cat.name}</CardTitle>
                  <CardDescription>{cat.breed} • {cat.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {cat.description}
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenDialog(cat)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(cat.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingCat ? "Edit Cat" : "Add New Cat"}</DialogTitle>
              <DialogDescription>
                {editingCat ? "Update the cat's information below." : "Fill in the details for your new cat."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter cat's name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="breed">Breed</Label>
                <Input
                  id="breed"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  placeholder="Enter breed"
                  required
                />
              </div>
              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="e.g., 3 years"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the cat's personality..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="imageUrl">Image URL (optional)</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://example.com/cat.jpg"
                />
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingCat ? "Update" : "Add"} Cat
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default App
