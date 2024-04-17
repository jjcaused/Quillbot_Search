import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

export const Muitoggle = () => {
  const [checkToggle, setCheckToggle] = useState(false);
  const handleChange = () => {
    const updatedToggle = !checkToggle;
    setCheckToggle(updatedToggle);
  };
  return (
    <div>
      <FormControlLabel
        label="Academic"
        control={
          <Switch
            defaultChecked={checkToggle}
            onChange={handleChange}
            color="success"
          />
        }
      />
    </div>
  );
};
