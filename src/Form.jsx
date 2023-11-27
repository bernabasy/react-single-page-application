import React, { useState, useEffect } from "react";
import SectorOptions from "./SelectOptions";
import "./App.css";

function MyForm() {
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState([]);
  const [finalSectors, setFinalSectors] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSectorsChange = (e) => {
    const value = e.target.value;
    if (sectors.includes(value)) {
      setSectors(sectors.filter((sector) => sector !== value));
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSectors([...sectors, value]);
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleCancelClick = () => {
    setName("");
    setSectors([]);
    setSelectedOptions([]);
    setIsOpen(false);
  };

  const handleOkClick = () => {
    setIsOpen(false);
    setFinalSectors(sectors);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOptions.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000); // Hide the error message after 20 seconds
      return;
    }

    // Perform the POST request here using the form data
    const data = {
      input_data: {
        name: name,
        sectors: finalSectors,
        agree_to_terms: agreedToTerms,
      },
    };

    fetch("http://127.0.0.1:3000/input_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
            // Reset the form
            resetForm();
          })
          .catch((error) => {
            console.error(error);
          });
  };

  const resetForm = () => {
    setName("");
    setSectors([]);
    setSelectedOptions([]);
    setIsOpen(false);
    setAgreedToTerms(false);
  };
  
  useEffect(() => {
    setSelectedOptions(sectors);
  }, [sectors]);

  return (
    <div className='main'>
      {error && <p className="error-message">Please select at least one option.</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-container">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={handleNameChange}
              required
            />
        </div>
        <div className="options">
          <div className={`select-wrapper ${isOpen ? "open" : ""}`}>
            <input
              type="text"
              value={selectedOptions.length > 0 ? `${selectedOptions.length} sectors` : "Select sectors"}
              disabled
              className="sectors-input"
              onClick={toggleDropdown}
            />
            <span
              className={`arrow ${isOpen ? "open" : ""}`}
              onClick={toggleDropdown}
            ></span>
          </div>
          {isOpen && (
            <div>
              <SectorOptions
                handleSectorsChange={handleSectorsChange}
                selectedOptions={selectedOptions}
              required/>
              <div className="buttons" id="buttons">
                <button type="button" onClick={handleCancelClick}>
                  Cancel
                </button>
                <button type="button" onClick={handleOkClick}>
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
        <div>
          <label className="container">
            <input
              type="checkbox"
              
              checked={agreedToTerms}
              onChange={handleCheckboxChange}
              required
            />
            <span class="checkmark"></span>
            <p className="Agree">Agree to Terms</p>
          </label>
        </div>
        <button type="submit" className="save-button">SAVE</button>
      </form>
    </div>
  );
}

export default MyForm;