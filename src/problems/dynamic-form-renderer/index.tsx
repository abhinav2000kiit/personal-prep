import { useState } from "react";
import { formConfig } from "./constants/demmyData";

export default function DynamicFormRenderer() {
  const [formData, setFormData] = useState(formConfig);

  return (
    <div>
      <h1>Dynamic Form Renderer</h1>
      {formData.map((fc) => (
        <div key={fc.name}>
          <label htmlFor={fc.name}>{fc.label}</label>
          <input type={fc.type} name={fc.name} />
        </div>
      ))}
    </div>
  );
}
