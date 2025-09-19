  import { createTheme } from "@mui/material/styles";

  export const getDesignTokens = (mode) => ({
    palette :{
      mode,
      ...(mode === "light" ? 
        {
          // light color theme
          pimary:{main :"#6851ff"},
          background:{default :"#f5f5f5", paper:"#fff"},
          text :{primary :"#000"}
        } : {
        
          // dark color theme
          pimary:{main :"#6851ff"},
          background:{default :"#1e1e1e", paper:"#292930"},
          text :{primary :"#fff"}
        // #292930 bg dark card color
        // #D3D3D3 text dark color

        }
      )
    }
  })