import { useOutletContext, useParams } from "react-router-dom";
import api from "../../../Api/api";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Image as ImageIcon,
  Music,
  Star,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { sileo, Toaster } from "sileo";

function Product() {
  const { user } = useOutletContext();
  const [projects, Setprojects] = useState([]);
  const fetchprojects = async () => {
    try {
      const respone = await api.get("api/projects");
      Setprojects(respone.data);
    } catch (err) {
      console.log(err.respone?.data);
    }
  };

  const [dataForm, SetDataForm] = useState({
    title: "",
    description: "",
    link_project: "",
    url_video: "",
  });

  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);


  const handleChange = (e) => {
    SetDataForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.keys(dataForm).forEach((key) => {
        formData.append(key, dataForm[key]);
      });

      if (file) {
        formData.append("thumbnail", file);
      }

      if (isEditing) {
        await api.put(`/projects/product/${editId}`, formData);
        sileo.success({ title: "Updated success" });
      } else {
        await api.post("/projects/product", formData);
        sileo.success({ title: "Created success" });
      }

      handleCancel();
      fetchprojects();
    } catch (err) {
      sileo.error({
        title: isEditing ? "Error updating" : "Error created",
        description: err?.response?.data?.message,
      });
    }
  };

  const handleDelete = async (id) => {
    sileo.action({
      title: "You want delete product ?",
      description: "Delete Right ?",
      button: {
        title: "Delete",
        onClick: async () => {
          try {
            const respones1 = await api.delete(`/projects/product/${id}`);
            sileo.success({ title: "Detele success" });
            fetchprojects(); // Refresh list after delete
          } catch (err) {
            sileo.error({
              title: "Error Deleted",
              description: err?.respones1?.data?.message,
            });
          }
        },
      },
    });
  };

  const handleEdit = (project) => {
    setIsEditing(true);
    setEditId(project.id);
    SetDataForm({
      title: project.title,
      description: project.description,
      link_project: project.link_project || "",
      url_video: project.url_video || "",
    });
    setFile(null);

    // Scroll to the bottom of the page assuming the form is there
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditId(null);
    SetDataForm({
      title: "",
      description: "",
      link_project: "",
      url_video: "",
    });
    setFile(null);
  };

  useEffect(() => {
    document.title = "Admin Dasboard";
    fetchprojects();
  }, []);

  return (
    <div className="product-layout">
      <Toaster
        position="top-center"
        options={{
          fill: "#171717",
          styles: { description: "text-white/75!" },
        }}
      />
      <div className="product-list">
        <div className="product-header animate-fade-up">
          <h3>Projects</h3>
          <span>12 items</span>
        </div>

        <div className="card product-table-card animate-fade-up delay-1">
          <table className="product-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <div className="product-item">
                      <div className="product-icon">
                        <img
                          src={
                            project?.thumbnail ||
                            "https://i.pinimg.com/736x/1e/ff/aa/1effaaa3b2e6d1cbf3495139c8115a43.jpg"
                          }
                        />
                      </div>

                      <div>
                        <p className="product-name">{project?.title}</p>

                        <span className="product-meta">
                          {project?.created_at}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>{project?.description.toUpperCase()}</td>

                  <td>
                    <div className="product-actions">
                      <button className="icon-btn edit" onClick={() => handleEdit(project)} title="Edit">
                        <Edit size={16} color="#0ea5e9" />
                      </button>
                      <button className="icon-btn delete" onClick={() => handleDelete(project.id)} title="Delete">
                        <Trash2 size={16} color="#ef4444" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="product-form-section">
        <div className="product-header animate-fade-up">
          <h3>Management</h3>
          <ChevronRight size={18} />
        </div>

        <div className="card product-form-card animate-fade-up delay-2">
          <h4 className="form-title">
            {isEditing ? <Edit size={18} /> : <Plus size={18} />}
            {isEditing ? "Edit Project" : "Create Project"}
          </h4>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="title"
                value={dataForm.title}
                onChange={handleChange}
                type="text"
                placeholder="Project name"
              />
            </div>

            <div className="form-group">
              <label>Url Videos</label>

              <div className="input-icon">
                <input
                  name="url_video"
                  value={dataForm.url_video}
                  onChange={handleChange}
                  placeholder="https://youtube..."
                />
                <ImageIcon size={18} />
              </div>
            </div>

            <div className="form-group">
              <label>Image URL</label>
              <div className="input-icon">
                <input
                  name="link_project"
                  value={dataForm.link_project}
                  onChange={handleChange}
                  placeholder="https://image..."
                />
                <ImageIcon size={18} />
              </div>
            </div>

            <div className="form-group">
              <label>Thumbnail</label>

              <div className="input-icon">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                />

                <ImageIcon size={18} />
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={dataForm.description}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div className="form-buttons">
              <button type="button" className="btn-cancel" onClick={handleCancel}>
                <X size={16} />
                Cancel
              </button>

              <button className="btn-save">
                <Save size={16} />
                {isEditing ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
