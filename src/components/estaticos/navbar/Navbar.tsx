import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './Navbar.css';

function Navbar() {
    // const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    function goLogout() {
        dispatch(addToken(''))
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ''){
        navbarComponent =    
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }
       return (
        <>
        {navbarComponent}
       </>
    )
}

export default Navbar;