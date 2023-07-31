import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = () => {
  return (
    <FormControl sx={{ minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectField;
