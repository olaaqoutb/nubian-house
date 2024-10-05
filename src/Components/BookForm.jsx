import { useState, useEffect } from "react";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import video from "../assets/video.mp4";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: null,
    checkOut: null,
    adults: 1,
    children: 0,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Please enter your name.";
    if (!formData.email) tempErrors.email = "Please enter your email.";
    if (!formData.phone) tempErrors.phone = "Please enter your phone number.";
    if (!formData.checkIn) tempErrors.checkIn = "Please select a check-in date.";
    if (!formData.checkOut) tempErrors.checkOut = "Please select a check-out date.";
    if (!formData.adults) tempErrors.adults = "Please enter the number of adults.";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const inputs = document.querySelectorAll(".animated-input");
    const button = document.querySelector(".animated-button");

    gsap.fromTo(
      inputs,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2
      }
    );

    gsap.fromTo(
      button,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        delay: inputs.length * 0.2 // Delay based on number of inputs to ensure button appears after all inputs
      }
    );
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ marginTop: 5 }}>
        <Grid item xs={12} md={6}>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              muted
              loop
              style={{ objectFit: "cover" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ marginBottom: 3, textAlign: "center" }} className="animated-input">
            Book a Card
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              className="animated-input" // Add class for animation
              sx={{
                marginBottom: 2,
                '& .MuiInputLabel-root': {
                  transition: 'color 0.3s ease',
                },
                '&:hover .MuiInputLabel-root': {
                  color: '#FF8C00',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF8C00',
                  }
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF8C00',
                }
              }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              className="animated-input" // Add class for animation
              sx={{
                marginBottom: 2,
                '& .MuiInputLabel-root': {
                  transition: 'color 0.3s ease',
                },
                '&:hover .MuiInputLabel-root': {
                  color: '#FF8C00',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF8C00',
                  }
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF8C00',
                }
              }}
            />
            <TextField
              label="Phone"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={!!errors.phone}
              helperText={errors.phone}
              className="animated-input" // Add class for animation
              sx={{
                marginBottom: 2,
                '& .MuiInputLabel-root': {
                  transition: 'color 0.3s ease',
                },
                '&:hover .MuiInputLabel-root': {
                  color: '#FF8C00',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF8C00',
                  }
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF8C00',
                }
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Check In"
                value={formData.checkIn}
                className="animated-input"
                onChange={(value) => handleChange("checkIn", value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    className="animated-input" // Add class for animation
                    sx={{
                      marginBottom: 4,
                      '& .MuiInputLabel-root': {
                        transition: 'color 0.3s ease',
                      },
                      '&:hover .MuiInputLabel-root': {
                        color: '#FF8C00',
                      },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '15px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#FF8C00',
                        }
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF8C00',
                      }
                    }}
                  />
                )}
              />
              <DatePicker
                label="Check Out"
                value={formData.checkOut}
                className="animated-input"
                onChange={(value) => handleChange("checkOut", value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    className="animated-input" // Add class for animation
                    sx={{
                      
                      
                      marginBottom: 4,
                      '& .MuiInputLabel-root': {
                        transition: 'color 0.3s ease',
                      },
                      '&:hover .MuiInputLabel-root': {
                        color: '#FF8C00',
                      },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#FF8C00',
                        }
                      },
                      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#FF8C00',
                      }
                    }}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              label="Adults"
              type="number"
              fullWidth
              value={formData.adults}
              onChange={(e) => handleChange("adults", e.target.value)}
              error={!!errors.adults}
              helperText={errors.adults}
              className="animated-input" // Add class for animation
              sx={{
                color:"orange",

                marginBottom: 2,
                marginTop: 5,
                '& .MuiInputLabel-root': {
                  transition: 'color 0.3s ease',
                },
                '&:hover .MuiInputLabel-root': {
                  color: '#FF8C00',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF8C00',
                  }
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF8C00',
                }
              }}
            />
            <TextField
              label="Children"
              type="number"
              fullWidth
              value={formData.children}
              onChange={(e) => handleChange("children", e.target.value)}
              className="animated-input" // Add class for animation
              sx={{
                marginBottom: 2,
              
                '& .MuiInputLabel-root': {
                  transition: 'color 0.3s ease',
                },
                '&:hover .MuiInputLabel-root': {
                  color: '#FF8C00',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF8C00',
                  }
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#FF8C00',
                }
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="animated-button" // Add class for animation
              sx={{
                padding: 2,
                backgroundColor: "#FF6F00",
                "&:hover": { backgroundColor: "#FF8C00" }
              }}
            >
              BOOK NOW
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookForm;
