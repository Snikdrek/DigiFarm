import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("farmer"); // 'farmer' | 'expert'

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    village: "",
    city: "",
    district: "",
    country: "",
    specialization: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const title = useMemo(
    () => (role === "farmer" ? "Register Farmer" : "Register Expert"),
    [role]
  );

  useEffect(() => {
    setError("");
    setSuccessMsg("");
    // keep filled fields; only clear specialization when switching to farmer
    if (role === "farmer") {
      setForm((prev) => ({ ...prev, specialization: "" }));
    }
  }, [role]);

  const onChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMsg("");

    try {
      if (!form.name || !form.email || !form.password) {
        setError("Name, email, and password are required.");
        return;
      }

      const endpoint =
        role === "farmer"
          ? "http://localhost:8080/api/register/farmer"
          : "http://localhost:8080/api/register/expert";

      const payload =
        role === "farmer"
          ? {
              name: form.name,
              email: form.email,
              password: form.password,
              phone: form.phone,
              village: form.village,
              city: form.city,
              district: form.district,
              country: form.country,
            }
          : {
              name: form.name,
              email: form.email,
              password: form.password,
              phone: form.phone,
              village: form.village,
              city: form.city,
              district: form.district,
              country: form.country,
              specialization: form.specialization,
            };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok) {
        // backend returns { error: "..." } for failures
        const msg =
          (data && (data.error || data.message)) ||
          `Registration failed (${res.status})`;
        setError(msg);
        return;
      }

      setSuccessMsg(data?.message || "Registered successfully! Redirecting to login…");

      setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (err) {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">Create your DigiFarm account</p>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Register as</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} disabled={loading}>
              <option value="farmer">Farmer</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div className="form-group">
            <label>Name *</label>
            <input value={form.name} onChange={onChange("name")} placeholder="Full name" disabled={loading} />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={onChange("email")}
              placeholder="you@example.com"
              autoComplete="email"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              value={form.password}
              onChange={onChange("password")}
              placeholder="Create a password"
              autoComplete="new-password"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input value={form.phone} onChange={onChange("phone")} placeholder="Phone" disabled={loading} />
          </div>

          <div className="form-group">
            <label>Village</label>
            <input value={form.village} onChange={onChange("village")} placeholder="Village" disabled={loading} />
          </div>

          <div className="form-group">
            <label>City</label>
            <input value={form.city} onChange={onChange("city")} placeholder="City" disabled={loading} />
          </div>

          <div className="form-group">
            <label>District</label>
            <input value={form.district} onChange={onChange("district")} placeholder="District" disabled={loading} />
          </div>

          <div className="form-group">
            <label>Country</label>
            <input value={form.country} onChange={onChange("country")} placeholder="Country" disabled={loading} />
          </div>

          {role === "expert" ? (
            <div className="form-group">
              <label>Specialization</label>
              <input
                value={form.specialization}
                onChange={onChange("specialization")}
                placeholder="E.g., Soil, Crops, Pest control"
                disabled={loading}
              />
            </div>
          ) : null}

          {error ? <p style={{ color: "#c62828", marginTop: "0.5rem" }}>{error}</p> : null}
          {successMsg ? <p style={{ color: "#2e7d32", marginTop: "0.5rem" }}>{successMsg}</p> : null}

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Creating account…" : "Create Account"}
          </button>

          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;