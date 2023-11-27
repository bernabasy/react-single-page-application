import React from "react";
import "./App.css";

function SectorOptions({ handleSectorsChange, selectedOptions }) {
  const options = [
    { value: "1", label: "Manufacturing", className: "indentation-level-0" },
    { value: "19", label: "Construction materials", className: "indentation-level-4" },
    { value: "18", label: "Electronics and Optics", className: "indentation-level-4" },
    { value: "6", label: "Food and Beverage", className: "indentation-level-4" },
    { value: "342", label: "Bakery &amp; confectionery products", className: "indentation-level-8" },
    { value: "43", label: "Beverages", className: "indentation-level-8" },
    { value: "42", label: "Fish &amp; fish products", className: "indentation-level-8" },
    { value: "40", label: "Meat &amp; meat products", className: "indentation-level-8" },
    { value: "39", label: "Milk &amp; dairy products", className: "indentation-level-8" },
    { value: "437", label: "Other", className: "indentation-level-8" },
    { value: "378", label: "Sweets &amp; snack food", className: "indentation-level-8" },
    { value: "13", label: "Furniture", className: "indentation-level-4" },
    { value: "389", label: "Bathroom/sauna", className: "indentation-level-8" },
    { value: "385", label: "Bedroom", className: "indentation-level-8" },
    { value: "390", label: "Childrenâ€™s room", className: "indentation-level-8" },
    { value: "98", label: "Kitchen", className: "indentation-level-8" },
    { value: "101", label: "Living room", className: "indentation-level-8" },
    { value: "392", label: "Office", className: "indentation-level-8" },
    { value: "394", label: "Other (Furniture)", className: "indentation-level-8" },
    { value: "341", label: "Outdoor", className: "indentation-level-8" },
    { value: "99", label: "Project furniture", className: "indentation-level-8" },
    { value: "12", label: "Machinery", className: "indentation-level-4" },
    { value: "94", label: "Machinery components", className: "indentation-level-8" },
    { value: "91", label: "Machinery equipment/tools", className: "indentation-level-8" },
    { value: "224", label: "Manufacture of machinery", className: "indentation-level-8" },
    { value: "97", label: "Maritime", className: "indentation-level-8" },
    { value: "271", label: "Aluminium and steel workboats", className: "indentation-level-12" },
    { value: "269", label: "Boat/Yacht building", className: "indentation-level-12" },
    { value: "230", label: "Ship repair and conversion", className: "indentation-level-12" },
    { value: "93", label: "Metal structures", className: "indentation-level-8" },
    { value: "508", label: "Other", className: "indentation-level-8" },
    { value: "227", label: "Repair and maintenance service", className: "indentation-level-8" },
    { value: "11", label: "Metalworking", className: "indentation-level-4" },
    { value: "67", label: "Construction of metal structures", className: "indentation-level-8" },
    { value: "263", label: "Houses and buildings", className: "indentation-level-8" },
    { value: "267", label: "Metal products", className: "indentation-level-8" },
    { value: "542", label: "Metal works", className: "indentation-level-8" },
    { value: "75", label: "CNC-machining", className: "indentation-level-12" },
    { value: "62", label: "Forgings, Fasteners", className: "indentation-level-12" },
    { value: "69", label: "Gas, Plasma, Laser cutting", className: "indentation-level-12" },
    { value: "66", label: "MIG, TIG, Aluminum welding", className: "indentation-level-12" },
    { value: "9", label: "Plastic and Rubber", className: "indentation-level-4" },
    { value: "54", label: "Packaging", className: "indentation-level-8" },
    { value: "556", label: "Plastic goods", className: "indentation-level-8" },
    { value: "559", label: "Plastic processing technology", className: "indentation-level-8" },
    { value: "55", label: "Blowing", className: "indentation-level-12" },
    { value: "57", label: "Moulding", className: "indentation-level-12" },
    { value: "53", label: "Plastics welding and processing", className: "indentation-level-12" },
    { value: "560", label: "Plastic profiles", className: "indentation-level-8" },
    { value: "5", label: "Printing", className: "indentation-level-4" },
    { value: "148", label: "Advertising", className: "indentation-level-8" },
    { value: "150", label: "Book/Periodicals printing", className: "indentation-level-8" },
    { value: "145", label: "Labelling and packaging printing", className: "indentation-level-8" },
    { value: "7", label: "Textile and Clothing", className: "indentation-level-4" },
    { value: "44", label: "Clothing", className: "indentation-level-8" },
    { value: "45", label: "Textile", className: "indentation-level-8" },
    { value: "8", label: "Wood", className: "indentation-level-4" },
    { value: "337", label: "Other (Wood)", className: "indentation-level-8" },
    { value: "51", label: "Wooden building materials", className: "indentation-level-8" },
    { value: "47", label: "Wooden houses", className: "indentation-level-8" },
    { value: "3", label: "Other" },
    { value: "37", label: "Creative industries", className: "indentation-level-4" },
    { value: "29", label: "Energy technology", className: "indentation-level-4" },
    { value: "33", label: "Environment", className: "indentation-level-4" },
    { value: "2", label: "Service" },
    { value: "25", label: "Business services", className: "indentation-level-4" },
    { value: "35", label: "Engineering", className: "indentation-level-4" },
    { value: "28", label: "Information Technology and Telecommunications", className: "indentation-level-4" },
    { value: "581", label: "Data processing, Web portals, E-marketing", className: "indentation-level-8" },
    { value: "576", label: "Programming, Consultancy", className: "indentation-level-8" },
    { value: "121", label: "Software, Hardware", className: "indentation-level-8" },
    { value: "122", label: "Telecommunications", className: "indentation-level-8" },
    { value: "22", label: "Tourism", className: "indentation-level-4" },
    { value: "141", label: "Translation services", className: "indentation-level-4" },
    { value: "21", label: "Transport and Logistics", className: "indentation-level-4" },
    { value: "111", label: "Air", className: "indentation-level-8" },
    { value: "114", label: "Rail", className: "indentation-level-8" },
    { value: "112", label: "Road", className: "indentation-level-8" },
    { value: "113", label: "Water", className: "indentation-level-8" }
  ];

  const handleOptionChange = (e) => {
    handleSectorsChange(e);
  };

  return (
    <div className="sectors-dropdown">
      {options.map((option, index) => (
        <div key={option.value} className={option.className}>
          <label className="container">
            {option.label}
            <input 
              type="checkbox" 
              value={option.value} 
              onChange={handleOptionChange} 
              checked={selectedOptions.includes(option.value)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default SectorOptions;
