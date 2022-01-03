import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const NavBar = () => {
    return (
      <div>
        <Container>
            <div style={{marginTop:"19rem"}}>
                        <Typography variant="h4" sx={{textAlign:"center"}}>Engineers Cradle</Typography>
          <Link href="/Components/Details/Details">
                    <Typography sx={{textAlign:"center",mt:3}}> <Button variant="contained">Go to Course Page</Button></Typography>
                    
           
          </Link>
            </div>
        
        </Container>
      </div>
    );
}

export default NavBar;