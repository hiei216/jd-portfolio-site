import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useLanguage } from "../hooks/use-language";

export const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChange = (event: SelectChangeEvent<string>) => {
    changeLanguage(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          width: 110,
          position: "absolute",
          zIndex: "1000",
          border: "1px solid white",
          borderRadius: "5px",
          mt: "10px",
          ml: "10px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel sx={{ color: "white" }} id='demo-simple-select-label'>
            Language
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={language}
            label='Language'
            onChange={handleChange}
            sx={{
              "& .MuiSelect-icon": {
                color: "white",
              },
              color: "white",
            }}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"sk"}>Slovak</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
