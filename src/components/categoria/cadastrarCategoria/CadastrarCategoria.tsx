import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/action';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, post, put } from '../../../services/service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import Categoria from '../../../models/Categoria';
import './cadastroCategoria.css';


export default function CadastrarCategoria() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        descricao: ''
    })

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            dispatch(addToken(token))
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })

    }

    function updateCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();
        console.log('Categoria ' + JSON.stringify(categoria))

        if (id !== undefined) {

            console.log(categoria)
            put(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            back();

        } else {

            post(`/categorias`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

        }
        back()
    }

    function back() {
        navigate("/categorias")
    }

    return (
        <>
            <Container maxWidth="sm" className="topo2">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" className='tituloCadCat' component="h1" align="center" >Cadastro de Categorias</Typography>
                    <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updateCategoria(e)} id="tipo" label="Tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                    <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updateCategoria(e)} id="descricao" label="Descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" className='btnFinalizarCat' >
                        Finalizar
                    </Button>
                </form>
            </Container>
        </>
    )
}