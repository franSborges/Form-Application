import { TextField } from "@mui/material"
import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
  return (
  <TextField
   variant="outlined"
    margin="normal" 
    inputRef={ref}
    fullWidth
    {...props}
     />
  )
})